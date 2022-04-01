package com.helloz.lemonaid.controller;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import com.helloz.lemonaid.response.MedicineHitRes;
import com.helloz.lemonaid.response.MedicineRes;
import com.helloz.lemonaid.service.MedicineService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "의약품 정보 API", tags = {"Medicine"})
@Slf4j
@RequestMapping("/api/v1/medicine")
@RequiredArgsConstructor
@RestController
public class MedicineController {

    private final MedicineService medicineService;

    @GetMapping
    @ApiOperation(value = "의약품 목록 조회", notes = "<strong>검색 조건</strong>을 통해 의약품 목록을 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<List<Medicine>> getMedicineList(
            @ApiParam("약품명") @RequestParam(required = false) String name,
            @ApiParam(value = "약품 모양", defaultValue = "전체") @RequestParam(required = false) String shape,
            @ApiParam(value = "약품 색상", defaultValue = "전체") @RequestParam(required = false) String color,
            @ApiParam(value = "약품 제형 (정제, 경질캡슐, 연질캡슐, 기타, 전체)", defaultValue = "전체") @RequestParam(required = false) String form,
            @ApiParam(value = "약품 분할선 (없음, -, +, 기타, 전체)", defaultValue = "전체") @RequestParam(required = false) String line,
            @ApiParam(value = "약품 식별문자", defaultValue = "전체") @RequestParam(required = false) String sign
    ) {
        MedicineSearchFilter filter = new MedicineSearchFilter();
        filter.setName(name);
        filter.setShape(shape);
        filter.setColor(color);
        filter.setForm(form);
        filter.setLine(line);
        filter.setSign(sign);

        List<Medicine> result = medicineService.getMedicineList(filter);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{medicineNo}")
    @ApiOperation(value = "의약품 상세 조회", notes = "의약품 일련번호를 통해 <strong>의약품 상세 정보</strong>를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<MedicineRes> getMedicine(
            @ApiParam("의약품 일련번호") @PathVariable long medicineNo
    ) {
        Medicine result = medicineService.getMedicine(medicineNo);
        if (result == null) {
            return ResponseEntity.ok(MedicineRes.of(200, "Data Not Found", null));
        }
        medicineService.updateHit(medicineNo);
        return ResponseEntity.ok(MedicineRes.of(200, "Success", result));
    }

    @GetMapping("/hit")
    @ApiOperation(value = "의약품 Top5 조회", notes = "조회수가 가장 높은 의약품 5개를 보여준다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Server Error")
    })
    private ResponseEntity<MedicineHitRes> topMedicine() {
        List<Medicine> result = medicineService.topMedicineList();
        return ResponseEntity.ok(MedicineHitRes.of(200, "Success", result));
    }

}
