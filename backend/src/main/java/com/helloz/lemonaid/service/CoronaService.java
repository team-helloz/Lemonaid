package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.response.CoronaAgeRes;
import com.helloz.lemonaid.response.CoronaCountTodayRes;
import com.helloz.lemonaid.response.CoronaCountTop3Res;
import com.helloz.lemonaid.response.CoronaGenderRes;

import java.util.List;

public interface CoronaService {

    List<CoronaCount> getCoronaCountList();

    CoronaGenderRes getCoronaGenderList();

    CoronaAgeRes getCoronaAgeList();

    CoronaCountTodayRes getCoronaCountToday();

    CoronaCountTop3Res getCoronaCountTop3();
}
