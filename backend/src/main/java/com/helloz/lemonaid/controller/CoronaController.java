package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.CoronaCount;
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

}
