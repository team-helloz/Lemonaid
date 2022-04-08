package com.helloz.lemonaid.response;

import com.helloz.lemonaid.common.model.response.BaseResponseBody;
import com.helloz.lemonaid.db.entity.Medicine;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("MedicineListResponse")
public class MedicineListRes extends BaseResponseBody {
    @ApiModelProperty(name = "의약품 리스트 정보")
    List<Medicine> medicineList;
    int resultCnt;

    public static MedicineListRes of(Integer status, String message, List<Medicine> medicineList, int resultCnt) {
        MedicineListRes res = new MedicineListRes();
        res.setStatus(status);
        res.setMessage(message);
        res.setMedicineList(medicineList);
        res.setResultCnt(resultCnt);
        return res;
    }
}
