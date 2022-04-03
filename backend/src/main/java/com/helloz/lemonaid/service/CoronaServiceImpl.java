package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.db.repository.CoronaCountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class CoronaServiceImpl implements CoronaService {
    private final CoronaCountRepository coronaCountRepository;

    @Override
    public List<CoronaCount> getCoronaCountList() {
        return coronaCountRepository.findAll();
    }

}
