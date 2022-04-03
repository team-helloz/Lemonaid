package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;
import com.helloz.lemonaid.response.DiseaseRes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DiseaseService {
    Page<DiseaseRes> getDiseaseList(List<String> symptoms, Pageable pageable);

    Disease getDiseaseByNo(long no);

    List<Symptom> getSymptomList(String site);

    List<String> getSymptomSite();
}
