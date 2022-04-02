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
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "medical_type")
@Table(name = "MEDICAL")
public abstract class Medical{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medical_no")
    private long no;

    @OneToOne
    @JoinColumn(name = "opentime_no")
    private OpenTime opentime;

    @Column(name = "medical_name")
    private String name;

    @Column(name = "medical_tel")
    private String tel;

    @Column(name = "medical_y")
    private double lat;

    @Column(name = "medical_x")
    private double lng;

    @Column(name = "medical_address")
    private String address;

    @Column(name = "medical_parking_count")
    private int parkingCount;

    @Transient
    private double distance;
}
