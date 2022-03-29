package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.util.DistanceUtil;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static com.helloz.lemonaid.db.entity.QHospital.hospital;
import static com.helloz.lemonaid.db.entity.QPharmacy.pharmacy;

@RequiredArgsConstructor
@Repository
public class PharmacyRepositoryImpl implements PharmacyCustomRepository {


    private final JPAQueryFactory jpaQueryFactory;


    @Override
    public List<Pharmacy> searchByFilter(MedicalSearchFilter filter) {
        List<Pharmacy> result = jpaQueryFactory.selectFrom(pharmacy)
                .where(
                        goeParking(filter.isParking()),
                        eqKeyword(filter.getKeyword())
                )
                .fetch();

        result.forEach(p -> p.setDistance(DistanceUtil.getDistance(filter.getX(), filter.getY(), p.getX(), p.getY())));

        Collections.sort(result);

        result = result.stream().filter(h -> h.getDistance() <= filter.getRadius()).collect(Collectors.toList());

        return result;
    }

    private BooleanExpression goeParking(boolean parking) {
        return parking ? hospital.parkingCount.goe(0) : null;
    }

    private BooleanExpression eqKeyword(String keyword) {
        return StringUtils.hasText(keyword) ? hospital.name.contains(keyword) : null;
    }
}
