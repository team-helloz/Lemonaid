package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.db.repository.MedicineRepository;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import com.helloz.lemonaid.response.MedicineHitRes;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository medicineRepository;

    @Override
    public List<Medicine> getMedicineList(MedicineSearchFilter filter) {
        List<Medicine> result = medicineRepository.searchByFilter(filter.getName(), filter.getShape(), filter.getColor(),
                filter.getForm(), filter.getLine(), filter.getSign());
        return result;
    }

    @Override
    public Medicine getMedicine(long no) {
        return medicineRepository.findByNo(no);
    }

    @Override
    @Transactional
    public void updateHit(long no) {
        medicineRepository.updateHit(no);
    }

    @Override
    public List<Medicine> topMedicineList() {
        List<Medicine> medicineList = new ArrayList<>();
        medicineRepository.findTopMedicines().stream().forEach(tuple -> {
            Medicine medicine = new Medicine();
            medicine.setNo(new Long(tuple.get(0, Integer.class)));
            medicine.setName(tuple.get(1, String.class));
            medicine.setImage(tuple.get(2, String.class));
            medicineList.add(medicine);
        });
        return medicineList;
    }
}
