package com.helloz.lemonaid.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.util.DistanceUtil;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;

import java.util.Arrays;
import java.util.List;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@ApiModel("MedicalSearchFilter")

public class MedicalSearchFilter {

    @ApiModelProperty(name = "검색 유형", example = "all")
    private MedicalType searchType;

    @ApiModelProperty(name = "종목 코드", example = "1")
    private int code;

    @ApiModelProperty(name = "진료 과목 목록", example = "[1, 2, 3]")
    private List<Long> subjects;

    @ApiModelProperty(name = "응급실 여부", example = "false")
    private boolean emergency;

    @ApiModelProperty(name = "주차장 여부", example = "false")
    private boolean parking;

    @ApiModelProperty(name = "검색어", example = "삼성")
    private String keyword;

    @ApiModelProperty(name = "경도")
    private double lat;

    @ApiModelProperty(name = "위도")
    private double lng;

    @ApiModelProperty(name = "반경")
    private int radius;

    public void setSubjects(List<Long> subjects) {

        Long[] dentistry = {50L, 51L, 52L, 53L, 54L, 55L, 56L,57L, 58L, 59L, 60L, 61L};
        Long[] herb = {81L, 82L, 83L, 84L, 85L, 86L, 87L, 88L};

        if (subjects.contains(49L)){
            subjects.addAll(Arrays.asList(dentistry));
        }
        if (subjects.contains(80L)) {
            subjects.addAll(Arrays.asList(herb));
        }
        this.subjects = subjects;
    }
}
