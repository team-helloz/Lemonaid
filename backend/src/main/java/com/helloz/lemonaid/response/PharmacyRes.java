package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.MedicalType;
import com.helloz.lemonaid.db.entity.Pharmacy;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class PharmacyRes extends MedicalRes {

    public static PharmacyRes of(Pharmacy pharmacy) {
        PharmacyRes res = new PharmacyRes();
        res.setNo(pharmacy.getNo());
        res.setType(MedicalType.pharmacy);
        res.setOpentime(pharmacy.getOpentime());
        res.setName(pharmacy.getName());
        res.setTel(pharmacy.getTel());
        res.setLat(pharmacy.getLat());
        res.setLng(pharmacy.getLng());
        res.setAddress(pharmacy.getAddress());
        res.setParkingCount(pharmacy.getParkingCount());
        res.setDistance(pharmacy.getDistance());
        return res;
    }
}
