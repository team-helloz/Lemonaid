package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;

import java.util.List;

public interface DiseaseService {
    List<Disease> getDiseaseList();

    Disease getDiseaseByNo(long no);

    List<Symptom> getSymptomList(String site);

    List<String> getSymptomSite();
}
