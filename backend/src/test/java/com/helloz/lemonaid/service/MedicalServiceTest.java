package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.db.entity.HospitalMedicalSubject;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.db.entity.OpenTime;
import com.helloz.lemonaid.db.repository.*;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.request.MedicalSearchType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
        hospital.setBuildCode("설립구분명코드1");
        hospital.setCode(1);
        hospital.setCodeName("상급종합");
        hospital.setEmergencyDay("Y");
        hospital.setEmergencyNight("N");

        OpenTime openTime = new OpenTime();
        openTime = openTimeRepository.save(openTime);

        hospital.setOpenTime(openTime);
        hospital.setTel("1111-2222");
        hospital.setX("111");
        hospital.setY("222");

        hospital = hospitalRepository.save(hospital);

        MedicalSubject medicalSubject = new MedicalSubject();
        medicalSubject.setName("내과");

        medicalSubject = medicalSubjectRepository.save(medicalSubject);

        HospitalMedicalSubject hospitalMedicalSubject = new HospitalMedicalSubject();
        hospitalMedicalSubject.setMedicalSubject(medicalSubject);
        hospitalMedicalSubject.setHospital(hospital);

        hospitalMedicalSubject = hospitalMedicalSubjectRepository.save(hospitalMedicalSubject);

        MedicalSearchFilter filter = new MedicalSearchFilter();

        filter.setSearchType(MedicalSearchType.all);
        filter.setCode(0);
        filter.setEmergency(false);
        filter.setParking(false);

        List<Hospital> result = hospitalRepository.searchByFilter(filter, 0);
        Assertions.assertThat(result.size()).isEqualTo(1);
    }
}