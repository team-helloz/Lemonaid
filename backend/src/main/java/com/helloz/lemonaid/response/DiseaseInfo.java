package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
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
    private List<RelatedDiseaseInfo> relatedDisease;
    private List<MedicalSubject> subjects;

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
        info.relatedDisease = disease.getRelatedDiseases().stream().map(rd -> RelatedDiseaseInfo.of(rd.getRelatedDisease())).collect(Collectors.toList());
        info.setSubjects(disease.getMedicalSubjects().stream().map(DiseaseMedicalSubject::getMedicalSubject).collect(Collectors.toList()));
        return info;
    }
}
