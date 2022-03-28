package com.helloz.lemonaid.response;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medicine;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MedicineResponse")
public class MedicineRes extends BaseResponseBody {
    @ApiModelProperty(name = "의약품 정보")
    Medicine medicine;

    public static MedicineRes of(Integer status, String message, Medicine medicine) {
        MedicineRes res = new MedicineRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicine(medicine);
        return res;
    }
}
