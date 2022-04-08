package com.helloz.lemonaid.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MedicineSearchFilter")
public class MedicineSearchFilter {

    @ApiModelProperty(name = "약품명", example = "레프로진정")
    private String name;
//
//    @ApiModelProperty(name = "업체명", example = "위더스제약")
//    private String company;

    @ApiModelProperty(name = "약품 모양", example = "원형")
    private String shape;

    @ApiModelProperty(name = "약품 색상", example = "하양")
    private String color;

    @ApiModelProperty(name = "약품 제형", example = "정제")
    private String form;

    @ApiModelProperty(name = "약품 분할선", example = "없음")
    private String line;

//    @ApiModelProperty(name = "약품 마크", example = "없음")
//    private String mark;

    @ApiModelProperty(name = "약품 식별문자", example = "WU / LV")
    private String sign;
}
