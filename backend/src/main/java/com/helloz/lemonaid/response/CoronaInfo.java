package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("CoronaInfoResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CoronaInfo implements Comparable<CoronaInfo> {

    private String region;
    private int count;

    public CoronaInfo(String region, int count) {
        this.region = region;
        this.count = count;
    }

    @Override
    public int compareTo(CoronaInfo info) {
        return -this.count + info.count;
    }

}
