package com.helloz.lemonaid.response;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medical;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("MedicalListResponse")
public class MedicalListRes extends BaseResponseBody {

    @ApiModelProperty(name = "요양기관 리스트")
    List<Medical> medicalList;

    public static MedicalListRes of(Integer status, String message, List<Medical> medicalList) {
        MedicalListRes res = new MedicalListRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicalList(medicalList);

        return res;
    }

}
