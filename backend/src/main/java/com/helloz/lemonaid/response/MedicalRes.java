package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medical;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel("MedicalResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class MedicalRes extends BaseResponseBody {

    @ApiModelProperty(name = "요양기관")
    Medical medical;

    public static MedicalRes of(Integer status, String message, Medical medical) {
        MedicalRes res = new MedicalRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedical(medical);

        return res;
    }

}
