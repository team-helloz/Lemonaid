package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long>{
        @Query("select distinct new com.helloz.lemonaid.response.MedicalCode(code, codeName) from Hospital")
        List<MedicalCode> findCodeAll();

    @Query(
            value = "select distinct h.medical_no, h.opentime_no, h.medical_name, h.medical_tel," +
                    "h.medical_x, h.medical_y, h.medical_address, h.hospital_url, h.hospital_emergency_day," +
                    "h.hospital_emergency_night, h.medical_parking_count, h.hospital_code, h.hospital_code_name ," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), h.medical_point) AS mapDistance" +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.nowLat}, ' ', :#{#filter.nowLng}, ')'), 4326), h.medical_point) AS nowDistance" +
                    "from medical h inner join hospital_medical_subject hms " +
                    " on h.medical_no = hms.hospital_medical_subject_hospital_no"+
                    " where h.medical_type = 'H'" +
                    " and (:subjectsSize = 0 or hms.hospital_medical_subject_medical_subject_no in :#{#filter.subjects})" +
                    " and (:#{#filter.code} = 0 or h.hospital_code = :#{#filter.code})" +
                    " and (:#{#filter.emergency} is false or h.hospital_emergency_day = 'Y' or h.hospital_emergency_night ='Y')" +
                    " and (:#{#filter.parking} is false or h.medical_parking_count  >= 0)" +
                    " and (:#{#filter.keyword} = '' or :#{#filter.keyword} is null or h.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having mapDistance <= :#{#filter.radius} order by nowDistance"

    , nativeQuery = true)
    List<Hospital> searchByFilter(@Param("filter") MedicalSearchFilter filter, int subjectsSize, Pageable pageable);
}
