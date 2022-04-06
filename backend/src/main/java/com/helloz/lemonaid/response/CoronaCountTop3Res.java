package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("CoronaCountTop3Response")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CoronaCountTop3Res {

    private List<CoronaInfo> coronaCountTop3;
}
