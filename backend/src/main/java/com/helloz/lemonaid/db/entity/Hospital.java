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
@Table(name = "HOSPITAL")
public class Hospital extends Medical{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospital_no")
    private long no;

    @OneToOne
    @JoinColumn(name = "opentime_no")
    private OpenTime opentime;

    @Column(name = "hospital_name")
    private String name;

    @Column(name = "hospital_tel")
    private String tel;

    @Column(name = "hospital_total_doctor")
    private int numberOfDoctors;

    @Column(name = "hospital_x")
    private String x;

    @Column(name = "hospital_y")
    private String y;

    @Column(name = "hospital_code")
    private int code;

    @Column(name = "hospital_code_name")
    private String codeName;

    @Column(name = "hospital_address")
    private String address;

    @Column(name = "hospital_url")
    private String url;

    @Column(name = "hospital_build_code")
    private String buildCode;

    @Column(name = "hospital_emergency_day")
    private String emergencyDay;

    @Column(name = "hospital_emergency_night")
    private String emergencyNight;

    @Column(name = "hospital_parking_count")
    private int parkingCount;

    public Hospital(){
        super(MedicalType.hospital);
    }
}
