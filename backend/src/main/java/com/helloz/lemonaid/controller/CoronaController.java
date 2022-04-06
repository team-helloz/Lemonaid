package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.CoronaCount;
import com.helloz.lemonaid.db.entity.CoronaGender;
import com.helloz.lemonaid.response.CoronaAgeRes;
import com.helloz.lemonaid.response.CoronaCountTodayRes;
import com.helloz.lemonaid.response.CoronaCountTop3Res;
import com.helloz.lemonaid.response.CoronaGenderRes;
import com.helloz.lemonaid.service.CoronaService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "코로나 확진자 수 정보 API", tags = {"Corona"})
@Slf4j
@RequestMapping("/api/v1/corona")
@RequiredArgsConstructor
@RestController
public class CoronaController {

    private final CoronaService coronaService;

    @GetMapping("/count")
    @ApiOperation(value = "코로나 지역별 확진자 수 조회", notes = "<strong>지역별 확진자 수</strong>를 날짜별로 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<List<CoronaCount>> getCoronaCountList(

    ) {
        List<CoronaCount> result = coronaService.getCoronaCountList();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/count/today")
    @ApiOperation(value = "코로나 지역별 오늘 확진자 수 조회", notes = "<strong>지역별 확진자 수</strong>중 오늘날짜를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<CoronaCountTodayRes> getCoronaCountToday(

    ) {
        CoronaCountTodayRes result = coronaService.getCoronaCountToday();
        return ResponseEntity.ok(result);
    }


    @GetMapping("/gender")
    @ApiOperation(value = "코로나 성별별 확진자 수 조회", notes = "<strong>성별별 확진자 수</strong>를 날짜별로 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<CoronaGenderRes> getCoronaGenderList(

    ) {
        CoronaGenderRes result = coronaService.getCoronaGenderList();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/age")
    @ApiOperation(value = "코로나 나이대별 확진자 수 조회", notes = "<strong>나이대별 확진자 수</strong>를 날짜별로 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<CoronaAgeRes> getCoronaAgeList(

    ) {
        CoronaAgeRes result = coronaService.getCoronaAgeList();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/count/top3")
    @ApiOperation(value = "코로나 지역별 오늘 확진자 많은 순 최대 3 지역 조회", notes = "<strong>지역별 확진자 수</strong>중 많은 순으로 세 개의 지역을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<CoronaCountTop3Res> getCoronaCountTop3(

    ) {
        CoronaCountTop3Res result = coronaService.getCoronaCountTop3();

        return ResponseEntity.ok(result);
    }
}
