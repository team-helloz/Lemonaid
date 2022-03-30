package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.response.*;
import com.helloz.lemonaid.service.MedicalService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Nullable;
import java.util.List;

@Api(value = "의료 기관 정보 API", tags = {"Medical"})
@Slf4j
@RequestMapping("/api/v1/medical")
@RequiredArgsConstructor
@RestController
public class MedicalController {

    private final MedicalService medicalService;

    @GetMapping
    @ApiOperation(value = "의료 기관 목록 조회", notes = "<stong>검색 조건</strong>을 통해 의료 기관 목록을 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<? extends BaseResponseBody> getMedicalList(
            @ApiParam("search_type") @RequestParam(value = "search_type", required = true) MedicalType searchType,
            @ApiParam("code") @RequestParam(required = false, defaultValue = "0") int code,
            @ApiParam("subjects") @RequestParam(required = false, defaultValue = "") List<Long> subjects,
            @ApiParam("emergency") @RequestParam(required = false, defaultValue = "false") boolean emergency,
            @ApiParam("parking") @RequestParam(required = false, defaultValue = "false") boolean parking,
            @ApiParam("keyword") @RequestParam(required = false, defaultValue = "") String keyword,
            @ApiParam("lat") @RequestParam double lat,
            @ApiParam("lng") @RequestParam double lng,
            @ApiParam("radius") @RequestParam(defaultValue = "0") int radius
    ) {
        MedicalSearchFilter filter = new MedicalSearchFilter();
        filter.setSearchType(searchType);
        filter.setCode(code);
        filter.setSubjects(subjects);
        filter.setEmergency(emergency);
        filter.setParking(parking);
        filter.setKeyword(keyword);
        filter.setLat(lat);
        filter.setLng(lng);
        filter.setRadius(radius);

        List<Medical> result = medicalService.getMedicalList(filter);

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", result));
    }

    @GetMapping("/{medicalType}/{medicalNo}")
    @ApiOperation(value = "의료 기관 상세 조회", notes = "기관 정보와 번호를 통해 <stong>의료 기관 상세 정보</strong>를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity< ? extends BaseResponseBody> getMedical(
            @ApiParam("의료 기관 유형") @PathVariable String medicalType,
            @ApiParam("의료 기관 번호") @PathVariable long medicalNo) {

        Medical result = medicalService.getMedical(MedicalType.valueOf(medicalType), medicalNo);

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", result));
    }

    @GetMapping("/subject")
    @ApiOperation(value = "진료 과목 목록 조회", notes = "<strong>진료 과목</strong>의 목록을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<? extends BaseResponseBody> getMedicalSubjectList() {

        List<MedicalSubject> result = medicalService.getMedicalSubjectList();

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", result));
    }

    @GetMapping("/code")
    @ApiOperation(value = "종목 코드 목록 조회", notes = "<strong>종목 코드</strong>의 목록을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "")
    })
    private ResponseEntity<? extends BaseResponseBody> getMedicalCodeList() {

        List<MedicalCode> result = medicalService.getMedicalCodeList();

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", result));
    }
}
