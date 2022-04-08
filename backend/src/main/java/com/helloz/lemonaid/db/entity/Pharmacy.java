package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@DiscriminatorValue("P")
public class Pharmacy extends Medical {
}
