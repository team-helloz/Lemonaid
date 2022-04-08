package com.helloz.lemonaid.service;


import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.response.MedicalCode;
import com.helloz.lemonaid.response.MedicalRes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MedicalService {

    Page<MedicalRes> getMedicalList(MedicalSearchFilter filter, Pageable pageable);

    Medical getMedical(MedicalType medicalType, long no);

    List<MedicalSubject> getMedicalSubjectList();

    List<MedicalCode> getMedicalCodeList();

}
