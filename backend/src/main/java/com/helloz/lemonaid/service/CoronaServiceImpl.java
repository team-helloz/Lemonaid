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
        return coronaCountRepository.findAllByOrderByCountDateDesc();
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

        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountSeoul()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountBusan()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountDaegu()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountIncheon()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGwangju()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountDaejeon()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountUlsan()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountSejong()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGyeonggi()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGangwon()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountChungn()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountChungs()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountJeonn()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountJeons()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGyeongn()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGyeongs()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountJeju()));
        coronaInfos.add(new CoronaInfo("??????", coronaCount.getCountGita()));

        Collections.sort(coronaInfos);

        top3Res.setCoronaCountTop3(coronaInfos.subList(0, 3));
        return top3Res;
    }

}
