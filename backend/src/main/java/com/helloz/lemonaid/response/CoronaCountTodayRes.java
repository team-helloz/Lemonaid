package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.CoronaCount;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("CoronaCountResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CoronaCountTodayRes {
    private List<CoronaCount> coronaCountToday;
//    private long coronaTotalTotal;
//    private long coronaSeoulTotal;
//    private long coronaBusanTotal;
//    private long coronaDaeguTotal;
//    private long coronaIncheonTotal;
//    private long coronaGwangjuTotal;
//    private long coronaDaejeonTotal;
//    private long coronaUlsanTotal;
//    private long coronaSejongTotal;
//    private long coronaGyeonggiTotal;
//    private long coronaGangwonTotal;
//    private long coronaChungnTotal;
//    private long coronaChungsTotal;
//    private long coronaJeonnTotal;
//    private long coronaJeonsTotal;
//    private long coronaGyeongnTotal;
//    private long coronaGyeongsTotal;
//    private long coronaJejuTotal;
//    private long coronaGitaTotal;

}
