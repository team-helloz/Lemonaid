package com.helloz.lemonaid.response;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medicine;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MedicineHitRes extends BaseResponseBody {
    List<Medicine> medicines;

    public static MedicineHitRes of(Integer status, String message, List<Medicine> medicines) {
        MedicineHitRes res = new MedicineHitRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicines(medicines);
        return res;
    }
}
