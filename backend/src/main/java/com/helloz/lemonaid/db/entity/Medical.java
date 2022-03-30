package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Transient;
import java.util.List;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Medical implements Comparable<Medical> {

    MedicalType type;

    double distance;

    List<MedicalSubject> medicalSubjectList;
    public Medical(){

    }

    public Medical(MedicalType medicalType) {
        this.type = medicalType;
    }

    @Override
    public int compareTo(Medical o) {
        return Double.compare(this.distance, o.distance);
    }
}
