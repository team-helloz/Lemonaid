package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HospitalCustomRepository {

    List<Hospital> searchByFilter(MedicalSearchFilter filter);

}
