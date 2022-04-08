package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Table(name = "DISEASE")
public class Disease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disease_no")
    private long no;

    @Column(name = "disease_name")
    private String name;

    @Column(name = "disease_definition")
    private String definition;

    @Column(name = "disease_cause")
    private String cause;

    @Column(name = "disease_diagnosis")
    private String diagnosis;

    @Column(name = "disease_treatment")
    private String treatment;

    @Column(name = "disease_caution")
    private String caution;

    @Column(name = "disease_synonym")
    private String synonym;

    @Column(name = "disease_symptom_description")
    private String symptom_description;

    @Column(name = "disease_keyword")
    private String keyword;

    @OneToMany(mappedBy = "disease")
    private List<SymptomDisease> symptomDiseases;

    @OneToMany(mappedBy = "disease")
    private List<RelatedDisease> relatedDiseases;

    @OneToMany(mappedBy = "disease")
    private List<DiseaseMedicalSubject> medicalSubjects;
}
