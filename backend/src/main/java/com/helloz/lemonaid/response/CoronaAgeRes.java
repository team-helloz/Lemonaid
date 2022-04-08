package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.CoronaAge;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("CoronaAgeResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CoronaAgeRes {

    private List<CoronaAge> coronaAgeList;
    private long corona0Total;
    private long corona10Total;
    private long corona20Total;
    private long corona30Total;
    private long corona40Total;
    private long corona50Total;
    private long corona60Total;
    private long corona70Total;
    private long corona80Total;

}
