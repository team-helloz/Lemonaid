package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;
import com.helloz.lemonaid.db.repository.DiseaseRepository;
import com.helloz.lemonaid.db.repository.SymptomRepository;
import com.helloz.lemonaid.response.DiseaseRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DiseaseServiceImpl implements DiseaseService {

    private final DiseaseRepository diseaseRepository;
    private final SymptomRepository symptomRepository;

    @Override
    public Page<DiseaseRes> getDiseaseList(List<String> symptoms, Pageable pageable) {
        Page<Disease> diseases = diseaseRepository.findAllBySymptoms(symptoms, symptoms != null ? symptoms.size() : 0, pageable);

        List<DiseaseRes> contents = diseases.getContent().stream().map(DiseaseRes::of).collect(Collectors.toList());

        return new PageImpl<>(contents, pageable, diseases.getTotalElements());
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
