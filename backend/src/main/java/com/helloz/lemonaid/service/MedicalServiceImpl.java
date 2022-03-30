package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.*;
import com.helloz.lemonaid.db.repository.HospitalMedicalSubjectRepository;
import com.helloz.lemonaid.db.repository.HospitalRepository;
import com.helloz.lemonaid.db.repository.MedicalSubjectRepository;
import com.helloz.lemonaid.db.repository.PharmacyRepository;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import com.helloz.lemonaid.util.DistanceUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.geo.Distance;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class MedicalServiceImpl implements MedicalService {

    private final HospitalRepository hospitalRepository;
    private final PharmacyRepository pharmacyRepository;
    private final MedicalSubjectRepository medicalSubjectRepository;
    private final HospitalMedicalSubjectRepository hospitalMedicalSubjectRepository;

    @Override
    public List<Medical> getMedicalList(MedicalSearchFilter filter) {
        List<Medical> result = new ArrayList<>();

        if (filter.getSearchType() == MedicalType.all) {
            result.addAll(getHospitalList(filter));
            result.addAll(getPharmacyList(filter));
        } else if (filter.getSearchType() == MedicalType.hospital) {
            result.addAll(getHospitalList(filter));
        } else if (filter.getSearchType() == MedicalType.pharmacy) {
            result.addAll(getPharmacyList(filter));
        }

        Collections.sort(result);
        log.info("호출, 크기: {}", result.size());
        return result;
    }

    @Override
    public Medical getMedical(MedicalType medicalType, long no) {
        if (medicalType == MedicalType.hospital) {
            Hospital hospital = hospitalRepository.findById(no).orElseThrow(NotFoundException::new);
            hospital.setMedicalSubjectList(getMedicalSubjectListByHospital(hospital));
            return hospital;
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

    private List<Hospital> getHospitalList(MedicalSearchFilter filter) {
        List<Hospital> result = hospitalRepository.searchByFilter(filter);
        result.forEach(
                hospital -> {
                    hospital.setMedicalSubjectList(getMedicalSubjectListByHospital(hospital));
                    hospital.setDistance(DistanceUtil.getDistance(hospital.getLat(), hospital.getLng(), filter.getLat(), filter.getLng()));
                }
        );

        return result;
    }

    private List<Pharmacy> getPharmacyList(MedicalSearchFilter filter) {
        List<Pharmacy>  result = pharmacyRepository.searchByFilter(filter);
        result.forEach(pharmacy -> pharmacy.setDistance(DistanceUtil.getDistance(pharmacy.getLat(), pharmacy.getLng(), filter.getLat(), filter.getLng())));

        return result;
    }

    private List<MedicalSubject> getMedicalSubjectListByHospital(Hospital hospital) {
        return hospitalMedicalSubjectRepository.findAllByHospital(hospital)
                .stream().map(HospitalMedicalSubject::getMedicalSubject).collect(Collectors.toList());
    }
}
