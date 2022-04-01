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
@Table(name = "RELATED_DISEASE")
public class RelatedDisease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "related_disease_no")
    private long no;

    @ManyToOne
    @JoinColumn(name = "related_disease_disease_no")
    private Disease disease;

    @ManyToOne
    @JoinColumn(name = "related_disease_related_disease_no")
    private Disease relatedDisease;
}
