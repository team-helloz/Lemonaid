package com.helloz.lemonaid.util;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
class DistanceUtilTest {

    @Test
    void 거리계산(){
        log.info("거리: " + DistanceUtil.getDistance(36.10823756272571, 128.41548259074878,36.10823756272571 ,128.41548259074878));
    }
}