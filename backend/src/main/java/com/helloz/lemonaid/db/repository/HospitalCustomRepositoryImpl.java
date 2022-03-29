package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.util.DistanceUtil;
import com.querydsl.core.Fetchable;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.MathExpressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static com.helloz.lemonaid.db.entity.QHospital.hospital;
import static com.helloz.lemonaid.db.entity.QHospitalMedicalSubject.hospitalMedicalSubject;

@Slf4j
@RequiredArgsConstructor
@Repository
public class HospitalCustomRepositoryImpl implements HospitalCustomRepository {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Hospital> searchByFilter(MedicalSearchFilter filter) {
        List<Hospital> result = jpaQueryFactory.selectFrom(hospital)
                .join(hospitalMedicalSubject)
                .on(hospital.eq(hospitalMedicalSubject.hospital))
                .where(subjectIn(filter.getSubjects()),
                        eqCode(filter.getCode()),
                        eqEmergency(filter.isEmergency()),
                        goeParking(filter.isParking()),
                        eqKeyword(filter.getKeyword())
//                        inRadius(filter.getX(), filter.getY(), filter.getRadius())
                )
                .fetch();

        result.forEach(h->{
            h.setDistance(DistanceUtil.getDistance(filter.getLat(), filter.getLng(), h.getLat(), h.getLng()));
            log.info("distance: " +h.getDistance());
        }
        );

        Collections.sort(result);

        result = result.stream().filter(h -> h.getDistance() <= filter.getRadius()).collect(Collectors.toList());

        return result;

    }

    private BooleanExpression subjectIn(List<Long> subjects) {
        return subjects != null && subjects.size() > 0 ? hospitalMedicalSubject.medicalSubject.no.in(subjects) : null;
    }

    private BooleanExpression eqCode(int code) {
        return code > 0 ? hospital.code.eq(code) : null;
    }

    private BooleanExpression eqEmergency(boolean emergency) {
        return emergency ? hospital.emergencyDay.eq("Y").or(hospital.emergencyNight.eq("Y")) : null;
    }

    private BooleanExpression goeParking(boolean parking) {
        return parking ? hospital.parkingCount.goe(0) : null;
    }

    private BooleanExpression eqKeyword(String keyword) {
        return StringUtils.hasText(keyword) ? hospital.name.contains(keyword) : null;
    }
}
