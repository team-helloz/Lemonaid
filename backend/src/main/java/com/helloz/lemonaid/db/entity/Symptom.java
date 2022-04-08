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
@Table(name = "SYMPTOM")
public class Symptom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "symptom_no")
    private long no;

    @Column(name = "symptom_site")
    private String site;

    @Column(name = "symptom_name")
    private String name;
}
