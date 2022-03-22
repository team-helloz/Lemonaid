package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.db.repository.HospitalRepository;
import com.helloz.lemonaid.db.repository.MedicalSubjectRepository;
import com.helloz.lemonaid.db.repository.PharmacyRepository;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.request.MedicalSearchType;
import com.helloz.lemonaid.response.MedicalCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MedicalServiceImpl implements MedicalService {

    private final HospitalRepository hospitalRepository;
    private final PharmacyRepository pharmacyRepository;
    private final MedicalSubjectRepository medicalSubjectRepository;

    @Override
    public List<Medical> getMedicalList(MedicalSearchFilter filter) {
        List<Medical> result = new ArrayList<>();

        if (filter.getSearchType() == MedicalSearchType.all) {
            List<Hospital> hospitals = hospitalRepository.searchByFilter(filter,  filter.getSubjects() != null ? filter.getSubjects().size() : 0);
            List<Pharmacy> pharmacies = pharmacyRepository.searchByFilter(filter);

            if (hospitals != null) result.addAll(hospitals);
            if (pharmacies != null) result.addAll( pharmacies);

        } else if (filter.getSearchType() == MedicalSearchType.hospital) {
            List<Hospital> hospitals = hospitalRepository.searchByFilter(filter, filter.getSubjects() != null ? filter.getSubjects().size() : 0);
            if (hospitals != null) result.addAll(hospitals);

        } else if (filter.getSearchType() == MedicalSearchType.pharmacy) {
            List<Pharmacy> pharmacies = pharmacyRepository.searchByFilter(filter);
            if (pharmacies != null) result.addAll(pharmacies);
        }

        return result;
    }

    @Override
    public Medical getMedical(MedicalSearchType medicalType, long no) {
        if (medicalType == MedicalSearchType.hospital) {
            return hospitalRepository.findById(no).orElseThrow(NotFoundException::new);
        } else if (medicalType == MedicalSearchType.pharmacy) {
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
