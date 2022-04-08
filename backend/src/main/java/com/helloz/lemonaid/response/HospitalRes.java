package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.db.entity.HospitalMedicalSubject;
import com.helloz.lemonaid.db.entity.MedicalSubject;
import com.helloz.lemonaid.db.entity.MedicalType;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class HospitalRes extends MedicalRes {
    private int code;

    private String codeName;

    private String url;

    private String emergencyDay;

    private String emergencyNight;

    private List<MedicalSubject> medicalSubjectList;

    public static HospitalRes of(Hospital hospital){
        HospitalRes res = new HospitalRes();
        res.setNo(hospital.getNo());
        res.setType(MedicalType.hospital);
        res.setOpentime(hospital.getOpentime());
        res.setName(hospital.getName());
        res.setTel(hospital.getTel());
        res.setLat(hospital.getLat());
        res.setLng(hospital.getLng());
        res.setAddress(hospital.getAddress());
        res.setParkingCount(hospital.getParkingCount());
        res.setDistance(hospital.getDistance());
        res.setCode(hospital.getCode());
        res.setCodeName(hospital.getCodeName());
        res.setUrl(hospital.getUrl());
        res.setEmergencyDay(hospital.getEmergencyDay());
        res.setEmergencyNight(hospital.getEmergencyNight());
        res.setMedicalSubjectList(hospital.getHospitalMedicalSubjects().stream().map(HospitalMedicalSubject::getMedicalSubject).collect(Collectors.toList()));
        return res;
    }
}
