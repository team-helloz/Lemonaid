package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.db.repository.HospitalRepository;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
class MedicalServiceImplTest {

    @Autowired
    private HospitalRepository hospitalRepository;

//    @Test
//    void 목록출력(){
//        MedicalSearchFilter filter = new MedicalSearchFilter();
//
//        filter.setRadius(2);
//        filter.setParking(false);
//        filter.setKeyword("");
//        filter.setEmergency(false);
//        filter.setCode(0);
//        filter.setSearchType(MedicalType.hospital);
//        filter
//    }

}