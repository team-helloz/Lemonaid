package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("MedicalCodeListResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class MedicalCodeListRes extends BaseResponseBody {

    @ApiModelProperty(name = "요양기관 종목 코드 리스트")
    List<MedicalCode> medicalCodeList;

    public static MedicalCodeListRes of(Integer status, String message, List<MedicalCode> medicalCodeList) {
        MedicalCodeListRes res = new MedicalCodeListRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicalCodeList(medicalCodeList);

        return res;
    }
}
