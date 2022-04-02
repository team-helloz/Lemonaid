package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Table(name = "HOSPITAL_MEDICAL_SUBJECT")
public class HospitalMedicalSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospital_medical_subject_no")
    private long no;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "hospital_medical_subject_hospital_no")
    private Hospital hospital;

    @ManyToOne
    @JoinColumn(name = "hospital_medical_subject_medical_subject_no")
    private MedicalSubject medicalSubject;

}
