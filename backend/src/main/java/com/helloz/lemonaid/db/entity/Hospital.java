package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@DiscriminatorValue("H")
public class Hospital extends Medical{

    @Column(name = "hospital_code")
    private int code;

    @Column(name = "hospital_code_name")
    private String codeName;

    @Column(name = "hospital_url")
    private String url;

    @Column(name = "hospital_emergency_day")
    private String emergencyDay;

    @Column(name = "hospital_emergency_night")
    private String emergencyNight;

    @JsonManagedReference
    @OneToMany(mappedBy = "hospital")
    private List<HospitalMedicalSubject> hospitalMedicalSubjects;
}
