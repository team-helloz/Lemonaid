package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.db.repository.CoronaAgeRepository;
import com.helloz.lemonaid.db.repository.CoronaCountRepository;
import com.helloz.lemonaid.db.repository.CoronaCountTodayRepository;
import com.helloz.lemonaid.db.repository.CoronaGenderRepository;
import com.helloz.lemonaid.response.CoronaAgeRes;
import com.helloz.lemonaid.response.CoronaCountTodayRes;
import com.helloz.lemonaid.response.CoronaGenderRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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

}
