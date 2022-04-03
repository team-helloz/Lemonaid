package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Table(name = "CORONA_AGE")
public class CoronaAge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "corona_age_no")
    private long no;

    @Column(name = "corona_age_date")
    private Date ageDate;

    @Column(name = "corona_age_0")
    private int age0;

    @Column(name = "corona_age_10")
    private int age10;

    @Column(name = "corona_age_20")
    private int age20;

    @Column(name = "corona_age_30")
    private int age30;

    @Column(name = "corona_age_40")
    private int age40;

    @Column(name = "corona_age_50")
    private int age50;

    @Column(name = "corona_age_60")
    private int age60;

    @Column(name = "corona_age_70")
    private int age70;

    @Column(name = "corona_age_80")
    private int age80;
}
