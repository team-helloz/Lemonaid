package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import com.helloz.lemonaid.response.MedicineHitRes;

import java.util.List;

public interface MedicineService {
    List<Medicine> getMedicineList(MedicineSearchFilter filter);
    Medicine getMedicine(long no);
    void updateHit(long no);
    List<Medicine> topMedicineList();
}
