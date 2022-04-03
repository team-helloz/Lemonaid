package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.CoronaGender;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("CoronaGenderResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CoronaGenderRes {

    private List<CoronaGender> coronaGenderList;
    private long coronaMenTotal;
    private long coronaWomenTotal;


}
