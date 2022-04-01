package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MedicineService {
    List<Medicine> getMedicineList(MedicineSearchFilter filter, Pageable pageable);
    int getMedicineCount(MedicineSearchFilter filter);
    Medicine getMedicine(long no);
    void updateHit(long no);
    List<Medicine> topMedicineList();
}
