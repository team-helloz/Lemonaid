package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Disease;
import com.helloz.lemonaid.db.entity.Symptom;
import com.helloz.lemonaid.response.DiseaseRes;
import com.helloz.lemonaid.service.DiseaseService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Api(value = "질병 / 증상 정보 API", tags = {"Disease, Symptom"})
@Slf4j
@RequestMapping("/api/v1/disease")
@RequiredArgsConstructor
@RestController
public class DiseaseController {

    private final DiseaseService diseaseService;

    @GetMapping
    @ApiOperation(value = "질병 목록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<? extends BaseResponseBody> getDiseaseList(
            @ApiParam("symptoms") @RequestParam(required = false, defaultValue = "") List<String> symptoms){

        List<Disease> diseases = diseaseService.getDiseaseList(symptoms);

        List<DiseaseRes> diseaseRes = diseases.stream().map(
                DiseaseRes::of
        ).collect(Collectors.toList());

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", diseaseRes));
    }

    @GetMapping("/{no}")
    @ApiOperation(value = "질병 상세 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<? extends BaseResponseBody> getDiseaseDetail(
            @ApiParam("no")@PathVariable(value = "no") long no
    ){
        Disease disease = diseaseService.getDiseaseByNo(no);

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", DiseaseRes.of(disease)));
    }

    @GetMapping("/site")
    @ApiOperation(value = "신체부위 목록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<? extends BaseResponseBody> getSiteList(){

        List<String> sites = diseaseService.getSymptomSite();

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", sites));
    }

    @GetMapping("/symptom")
    @ApiOperation(value = "신체부위 별 증상 목록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<? extends BaseResponseBody> getSymptomList(
            @ApiParam("site")@RequestParam(value = "site") String site
    ){

        List<Symptom> symptoms = diseaseService.getSymptomList(site);

        return ResponseEntity.ok(BaseResponseBody.of(200, "Success", symptoms));
    }

}
