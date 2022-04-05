package com.helloz.lemonaid.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.util.Direction;
import com.helloz.lemonaid.util.GeometryUtil;
import com.helloz.lemonaid.util.Location;
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

    @ApiModelProperty(name = "현재 위치 경도")
    private double nowLat;

    @ApiModelProperty(name = "현재 위치 위도")
    private double nowLng;

    @ApiModelProperty(name = "지도 중심 경도")
    private double mapLat;

    @ApiModelProperty(name = "지도 중심 위도")
    private double mapLng;

    @ApiModelProperty(name = "반경")
    private int radius;

    private double x1;

    private double y1;

    private double x2;

    private double y2;

    public void setBoundary(){
        Location northEast = GeometryUtil
                .getLocation(mapLat, mapLng, (double)radius / 1000, Direction.NORTHEAST.getBearing());
        Location southWest = GeometryUtil
                .getLocation(mapLat, mapLng, (double)radius / 1000, Direction.SOUTHWEST.getBearing());

        this.x1 = northEast.getLatitude();
        this.y1 = northEast.getLongitude();
        this.x2 = southWest.getLatitude();
        this.y2 = southWest.getLongitude();
    }
}
