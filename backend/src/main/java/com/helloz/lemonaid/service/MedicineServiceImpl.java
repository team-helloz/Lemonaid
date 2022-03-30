package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.db.repository.MedicineRepository;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository medicineRepository;

    @Override
    public List<Medicine> getMedicineList(MedicineSearchFilter filter) {
        List<Medicine> result = medicineRepository.searchByFilter(filter);
        return result;
    }

    @Override
    public Medicine getMedicine(long no) {
        return medicineRepository.findByNo(no);
    }

    @Override
    public List<Medicine> topMedicineList() {
        return medicineRepository.findTopMedicines();
    }
}
