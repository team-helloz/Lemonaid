package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;
import com.helloz.lemonaid.db.repository.DiseaseRepository;
import com.helloz.lemonaid.db.repository.SymptomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DiseaseServiceImpl implements DiseaseService {

    private final DiseaseRepository diseaseRepository;
    private final SymptomRepository symptomRepository;

    @Override
    public List<Disease> getDiseaseList(List<String> symptoms) {
        return diseaseRepository.findAllBySymptoms(symptoms);
    }

    @Override
    public Disease getDiseaseByNo(long no) {
        return diseaseRepository.findById(no).orElseThrow(NotFoundException::new);
    }

    @Override
    public List<Symptom> getSymptomList(String site) {

        return symptomRepository.findAllBySite(site);
    }

    @Override
    public List<String> getSymptomSite() {
        return symptomRepository.findDistinctSite();
    }
}
