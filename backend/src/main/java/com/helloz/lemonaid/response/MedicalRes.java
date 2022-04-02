package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.db.entity.OpenTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class MedicalRes {
    private long no;
    private MedicalType type;
    private OpenTime opentime;
    private String name;
    private String tel;
    private double lat;
    private double lng;
    private String address;
    private int parkingCount;
    private Double distance;

}
