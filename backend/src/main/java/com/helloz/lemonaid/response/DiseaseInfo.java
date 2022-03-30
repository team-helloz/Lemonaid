package com.helloz.lemonaid.response;

import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;
import com.helloz.lemonaid.db.entity.SymptomDisease;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class DiseaseInfo {
    private long no;
    private String name;
    private String definition;
    private String cause;
    private String diagnosis;
    private String treatment;
    private String caution;
    private String synonym;
    private String symptom_description;
    private List<Symptom> symptoms;

    public static DiseaseInfo of(Disease disease) {
        DiseaseInfo info = new DiseaseInfo();
        info.no = disease.getNo();
        info.name =disease.getName();
        info.definition = disease.getDefinition();
        info.cause = disease.getCause();
        info.diagnosis = disease.getDiagnosis();
        info.treatment = disease.getTreatment();
        info.caution = disease.getCaution();
        info.synonym = disease.getSynonym();
        info.symptom_description = disease.getSymptom_description();
        info.symptoms = disease.getSymptomDiseases().stream().map(SymptomDisease::getSymptom).collect(Collectors.toList());

        return info;
    }
}
