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
@Table(name = "PHARMACY")
public class Pharmacy extends Medical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pharmacy_no")
    private long no;

    @OneToOne
    @JoinColumn(name = "opentime_no")
    private OpenTime openTime;

    @Column(name = "pharmacy_name")
    private String name;

    @Column(name = "pharmacy_tel")
    private String tel;

    @Column(name = "pharmacy_x")
    private double x;

    @Column(name = "pharmacy_y")
    private double y;

    @Column(name = "pharmacy_address")
    private String address;

    @Column(name = "pharmacy_parking_count")
    private int parkingCount;

    public Pharmacy(){
        super(MedicalType.pharmacy);
    }
}
