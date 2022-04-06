package com.helloz.lemonaid.service;

import com.helloz.lemonaid.common.exception.NotFoundException;
import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.db.repository.CoronaAgeRepository;
import com.helloz.lemonaid.db.repository.CoronaCountRepository;
import com.helloz.lemonaid.db.repository.CoronaCountTodayRepository;
import com.helloz.lemonaid.db.repository.CoronaGenderRepository;
import com.helloz.lemonaid.response.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class CoronaServiceImpl implements CoronaService {
    private final CoronaCountRepository coronaCountRepository;
    private final CoronaGenderRepository coronaGenderRepository;
    private final CoronaAgeRepository coronaAgeRepository;
    private final CoronaCountTodayRepository coronaCountTodayRepository;


    @Override
    public List<CoronaCount> getCoronaCountList() {
        return coronaCountRepository.findAll();
    }

    @Override
    public CoronaGenderRes getCoronaGenderList() {

        CoronaGenderRes result = new CoronaGenderRes();
        result.setCoronaGenderList(coronaGenderRepository.findAll());
        result.setCoronaMenTotal(coronaGenderRepository.countGroupByGenderMen());
        result.setCoronaWomenTotal(coronaGenderRepository.countGroupByGenderWomen());
        return result;
    }

    @Override
    public CoronaAgeRes getCoronaAgeList() {

        CoronaAgeRes result = new CoronaAgeRes();
        result.setCoronaAgeList(coronaAgeRepository.findByRecentDate());
        result.setCorona0Total(coronaAgeRepository.countGroupByAge0());
        result.setCorona10Total(coronaAgeRepository.countGroupByAge10());
        result.setCorona20Total(coronaAgeRepository.countGroupByAge20());
        result.setCorona30Total(coronaAgeRepository.countGroupByAge30());
        result.setCorona40Total(coronaAgeRepository.countGroupByAge40());
        result.setCorona50Total(coronaAgeRepository.countGroupByAge50());
        result.setCorona60Total(coronaAgeRepository.countGroupByAge60());
        result.setCorona70Total(coronaAgeRepository.countGroupByAge70());
        result.setCorona80Total(coronaAgeRepository.countGroupByAge80());
        return result;
    }

    @Override
    public CoronaCountTodayRes getCoronaCountToday() {
        CoronaCountTodayRes result = new CoronaCountTodayRes();
        result.setCoronaCountToday(coronaCountTodayRepository.findByRecentDate());
        return result;
    }

    @Override
    public CoronaCountTop3Res getCoronaCountTop3() {
        CoronaCountTop3Res top3Res = new CoronaCountTop3Res();
        List<CoronaCount> result = coronaCountTodayRepository.findByRecentDate();

        if (result.size() == 0) throw new NotFoundException();

        List<CoronaInfo> coronaInfos = new ArrayList<>();
        CoronaCount coronaCount =result.get(0);

        coronaInfos.add(new CoronaInfo("서울", coronaCount.getCountSeoul()));
        coronaInfos.add(new CoronaInfo("부산", coronaCount.getCountBusan()));
        coronaInfos.add(new CoronaInfo("대구", coronaCount.getCountDaegu()));
        coronaInfos.add(new CoronaInfo("인천", coronaCount.getCountIncheon()));
        coronaInfos.add(new CoronaInfo("광주", coronaCount.getCountGwangju()));
        coronaInfos.add(new CoronaInfo("대전", coronaCount.getCountDaejeon()));
        coronaInfos.add(new CoronaInfo("울산", coronaCount.getCountUlsan()));
        coronaInfos.add(new CoronaInfo("세종", coronaCount.getCountSejong()));
        coronaInfos.add(new CoronaInfo("경기", coronaCount.getCountGyeonggi()));
        coronaInfos.add(new CoronaInfo("강원", coronaCount.getCountGangwon()));
        coronaInfos.add(new CoronaInfo("충북", coronaCount.getCountChungn()));
        coronaInfos.add(new CoronaInfo("충남", coronaCount.getCountChungs()));
        coronaInfos.add(new CoronaInfo("전북", coronaCount.getCountJeonn()));
        coronaInfos.add(new CoronaInfo("전남", coronaCount.getCountJeons()));
        coronaInfos.add(new CoronaInfo("경북", coronaCount.getCountGyeongn()));
        coronaInfos.add(new CoronaInfo("경남", coronaCount.getCountGyeongs()));
        coronaInfos.add(new CoronaInfo("제주", coronaCount.getCountJeju()));
        coronaInfos.add(new CoronaInfo("기타", coronaCount.getCountGita()));

        Collections.sort(coronaInfos);

        top3Res.setCoronaCountTop3(coronaInfos.subList(0, 3));
        return top3Res;
    }

}
