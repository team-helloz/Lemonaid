package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class DiseaseMedicalSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disease_medical_subject_no")
    private long no;

    @ManyToOne
    @JoinColumn(name = "disease_medical_subject_disease_no")
    private Disease disease;

    @ManyToOne
    @JoinColumn(name = "disease_medical_subject_medical_subject_no")
    private MedicalSubject medicalSubject;
}
