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
@Table(name = "OPENTIME")
public class OpenTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "opentime_no")
    private long no;

    @Column(name = "opentime_sun")
    private int opentimeSun;

    @Column(name = "closetime_sun")
    private int closetimeSun;

    @Column(name = "opentime_mon")
    private int opentimeMon;

    @Column(name = "closetime_mon")
    private int closetimeMon;

    @Column(name = "opentime_tue")
    private int opentimeTue;

    @Column(name = "closetime_tue")
    private int closetimeTue;

    @Column(name = "opentime_wed")
    private int opentimeWed;

    @Column(name = "closetime_wed")
    private int closetimeWed;

    @Column(name = "opentime_thu")
    private int opentimeThu;

    @Column(name = "closetime_thu")
    private int closetimeThu;

    @Column(name = "opentime_fri")
    private int opentimeFri;

    @Column(name = "closetime_fri")
    private int closetimeFri;

    @Column(name = "opentime_sat")
    private int opentimeSat;

    @Column(name = "closetime_sat")
    private int closetimeSat;
}
