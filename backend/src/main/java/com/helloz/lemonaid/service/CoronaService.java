package com.helloz.lemonaid.service;

import com.helloz.lemonaid.db.entity.CoronaCount;

import java.util.List;

public interface CoronaService {

    List<CoronaCount> getCoronaCountList();
}
