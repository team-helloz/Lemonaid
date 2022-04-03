package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.*;
import com.helloz.lemonaid.db.repository.*;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import com.helloz.lemonaid.util.DistanceUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class MedicalServiceImpl implements MedicalService {

    private final HospitalRepository hospitalRepository;
    private final PharmacyRepository pharmacyRepository;
    private final MedicalSubjectRepository medicalSubjectRepository;
    private final MedicalRepository medicalRepository;

    @Override
    public List<Medical> getMedicalList(MedicalSearchFilter filter, Pageable pageable) {
        List<Medical> result = new ArrayList<>();

        int subjectSize = filter.getSubjects()!= null ? filter.getSubjects().size(): 0;

        if (filter.getSearchType() == MedicalType.all) {
            result.addAll(medicalRepository.searchByFilter(filter, subjectSize, pageable));
        } else if (filter.getSearchType() == MedicalType.hospital) {
            result.addAll(hospitalRepository.searchByFilter(filter,subjectSize, pageable));
        } else if (filter.getSearchType() == MedicalType.pharmacy) {
            result.addAll(pharmacyRepository.searchByFilter(filter, pageable));
        }

        result.forEach(m -> {
            m.setDistance(DistanceUtil.getDistance(m.getLat(), m.getLng(), filter.getNowLat(), filter.getNowLng()));
        });
        return result;
    }

    @Override
    public Medical getMedical(MedicalType medicalType, long no) {
        if (medicalType == MedicalType.hospital) {
            return hospitalRepository.findById(no).orElseThrow(NotFoundException::new);
        } else if (medicalType == MedicalType.pharmacy) {
            return pharmacyRepository.findById(no).orElseThrow(NotFoundException::new);
        }
        return null;
    }

    @Override
    public List<MedicalSubject> getMedicalSubjectList() {
        return medicalSubjectRepository.findAll();
    }

    @Override
    public List<MedicalCode> getMedicalCodeList() {

        return hospitalRepository.findCodeAll();
    }

}
