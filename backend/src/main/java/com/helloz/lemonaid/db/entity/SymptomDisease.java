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
@Table(name = "SYMPTOM_DISEASE")
public class SymptomDisease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "symptom_disease_no")
    private long no;

    @ManyToOne
    @JoinColumn(name = "symptom_disease_symptom_no")
    private Symptom symptom;

    @ManyToOne
    @JoinColumn(name = "symptom_disease_disease_no")
    private Disease disease;
}
