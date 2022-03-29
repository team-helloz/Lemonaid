package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("MedicalSubjectListResponse")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class MedicalSubjectListRes extends BaseResponseBody {

    @ApiModelProperty(name = "진료 과목 리스트")
    List<MedicalSubject> medicalSubjectList;

    public static MedicalSubjectListRes of(Integer status, String message, List<MedicalSubject> medicalSubjectList) {
        MedicalSubjectListRes res = new MedicalSubjectListRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicalSubjectList(medicalSubjectList);

        return res;
    }
}
