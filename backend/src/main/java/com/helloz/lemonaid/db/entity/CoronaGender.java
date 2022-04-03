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
@Table(name = "CORONA_GENDER")
public class CoronaGender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "corona_gender_no")
    private long no;

    @Column(name = "corona_gender_date")
    private Date genderDate;

    @Column(name = "corona_gender_men")
    private int genderMen;

    @Column(name = "corona_gender_women")
    private int genderWomen;
}
