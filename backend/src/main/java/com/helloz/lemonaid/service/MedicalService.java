package com.helloz.lemonaid.service;


import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.request.MedicalSearchType;
import com.helloz.lemonaid.response.MedicalCode;

import java.util.List;

public interface MedicalService {

    List<Medical> getMedicalList(MedicalSearchFilter filter);

    Medical getMedical(MedicalSearchType medicalType, long no);

    List<MedicalSubject> getMedicalSubjectList();

    List<MedicalCode> getMedicalCodeList();
}
