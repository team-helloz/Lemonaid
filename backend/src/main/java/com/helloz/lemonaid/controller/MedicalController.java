package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.request.MedicalSearchType;
import com.helloz.lemonaid.response.MedicalCode;
import com.helloz.lemonaid.service.MedicalService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "의료 기관 정보 API", tags = {"Medical"})
@Slf4j
@RequestMapping("/api/v1/medical")
@RequiredArgsConstructor
@RestController
public class MedicalController {

    private final MedicalService medicalService;

    @PostMapping
    @ApiOperation(value = "의료 기관 목록 조회", notes = "<stong>검색 조건</strong>을 통해 의료 기관 목록을 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<List<Medical>> getMedicalList(
            @ApiParam("검색 조건") @RequestBody MedicalSearchFilter filter
    ) {

        List<Medical> result = medicalService.getMedicalList(filter);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{medicalType}/{medicalNo}")
    @ApiOperation(value = "의료 기관 상세 조회", notes = "기관 정보와 번호를 통해 <stong>의료 기관 상세 정보</strong>를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<Medical> getMedical(
            @ApiParam("의료 기관 유형") @PathVariable String medicalType,
            @ApiParam("의료 기관 번호") @PathVariable long medicalNo) {

        Medical result = medicalService.getMedical(MedicalSearchType.valueOf(medicalType), medicalNo);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/subject")
    @ApiOperation(value = "진료 과목 목록 조회", notes = "<strong>진료 과목</strong>의 목록을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<List<MedicalSubject>> getMedicalSubjectList() {

        List<MedicalSubject> result = medicalService.getMedicalSubjectList();

        return ResponseEntity.ok(result);
    }

    @GetMapping("/code")
    @ApiOperation(value = "종목 코드 목록 조회", notes = "<strong>종목 코드</strong>의 목록을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<List<MedicalCode>> getMedicalCodeList() {

        List<MedicalCode> result = medicalService.getMedicalCodeList();

        return ResponseEntity.ok(result);
    }
}
