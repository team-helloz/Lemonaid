package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.db.repository.CoronaCountRepository;
import com.helloz.lemonaid.db.repository.CoronaGenderRepository;
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


    @Override
    public List<CoronaCount> getCoronaCountList() {
        return coronaCountRepository.findAll();
    }

    @Override
    public CoronaGenderRes getCoronaGenderList() {

        CoronaGenderRes result = new CoronaGenderRes();
        result.setCoronaGenderList(coronaGenderRepository.findAll());
        result.setCoronaMenTotal(coronaGenderRepository.countByGenderMen());
        result.setCoronaWomenTotal(coronaGenderRepository.countByGenderWomen());
        return result;
    }

}
