package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.db.entity.HospitalMedicalSubject;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.db.entity.OpenTime;
import com.helloz.lemonaid.db.repository.*;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.db.entity.MedicalType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;


@Slf4j
@SpringBootTest
@RequiredArgsConstructor
class MedicalServiceTest {

    @Autowired
    private HospitalRepository hospitalRepository;
    @Autowired
    private PharmacyRepository pharmacyRepository;
    @Autowired
    private MedicalSubjectRepository medicalSubjectRepository;
    @Autowired
    private OpenTimeRepository openTimeRepository;
    @Autowired
    private HospitalMedicalSubjectRepository hospitalMedicalSubjectRepository;

    @Test
    @Transactional
    void 의료기관_전체검색(){
        Hospital hospital = new Hospital();
        hospital.setName("싸피병원");
        hospital.setAddress("구미 어딘가");
        hospital.setCode(1);
        hospital.setCodeName("상급종합");
        hospital.setEmergencyDay("Y");
        hospital.setEmergencyNight("N");

        OpenTime openTime = new OpenTime();
        openTime = openTimeRepository.save(openTime);

        hospital.setOpentime(openTime);
        hospital.setTel("1111-2222");
        hospital.setLng(123.340);
        hospital.setLat(1234.57);

        hospital = hospitalRepository.save(hospital);

        MedicalSubject medicalSubject = new MedicalSubject();
        medicalSubject.setName("내과");

        medicalSubject = medicalSubjectRepository.save(medicalSubject);

        HospitalMedicalSubject hospitalMedicalSubject = new HospitalMedicalSubject();
        hospitalMedicalSubject.setMedicalSubject(medicalSubject);
        hospitalMedicalSubject.setHospital(hospital);

        hospitalMedicalSubject = hospitalMedicalSubjectRepository.save(hospitalMedicalSubject);

        MedicalSearchFilter filter = new MedicalSearchFilter();

        filter.setSearchType(MedicalType.all);
        filter.setCode(0);
        filter.setEmergency(false);
        filter.setParking(false);

//        Pageable pageable = new PageRequest();
//        List<Hospital> result = hospitalRepository.searchByFilter(filter, filter.getSubjects()!= null ? filter.getSubjects().size() : 0, pageable);
//        Assertions.assertThat(result.size()).isEqualTo(1);
    }
}