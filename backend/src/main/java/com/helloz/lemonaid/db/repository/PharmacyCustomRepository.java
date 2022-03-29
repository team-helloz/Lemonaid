package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;

import java.util.List;

public interface PharmacyCustomRepository {

        List<Pharmacy> searchByFilter(MedicalSearchFilter filter);
}
