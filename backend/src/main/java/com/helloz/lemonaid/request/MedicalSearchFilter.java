package com.helloz.lemonaid.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@ApiModel("MedicalSearchFilter")

public class MedicalSearchFilter {

    @ApiModelProperty(name = "검색 유형", example = "all")
    private MedicalSearchType searchType;

    @ApiModelProperty(name = "종목 코드", example = "1")
    private int code;

    @ApiModelProperty(name = "진료 과목 목록", example = "[1, 2, 3]")
    private List<Long> subjects;

    @ApiModelProperty(name = "응급실 여부", example = "True")
    private boolean emergency;

    @ApiModelProperty(name = "주차장 여부", example = "True")
    private boolean parking;

    @ApiModelProperty(name = "검색어", example = "삼성")
    private String keyword;
}