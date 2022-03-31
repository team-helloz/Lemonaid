package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long>{
        @Query("select distinct code, name from Hospital")
        List<Hospital> findCodeAll();

    @Query(
            value = "select distinct h.hospital_no, h.opentime_no, h.hospital_name, h.hospital_tel," +
                    "h.hospital_x, h.hospital_y, h.hospital_address, h.hospital_url, h.hospital_emergency_day," +
                    "h.hospital_emergency_night, h.hospital_parking_count, h.hospital_code, h.hospital_code_name ," +
                    "ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.lat}, ' ', :#{#filter.lng}, ')'), 4326), hospital_point) AS distance " +
                    "from hospital h join hospital_medical_subject hms " +
                    " on h.hospital_no = hms.hospital_medical_subject_hospital_no"+
                    " where (:#{#filter.subjects} is null or hms.hospital_medical_subject_medical_subject_no in :#{#filter.subjects})" +
                    " and (:#{#filter.code} = 0 or h.hospital_code = :#{#filter.code})" +
                    " and (:#{#filter.emergency} is false or h.hospital_emergency_day = 'Y' or h.hospital_emergency_night ='Y')" +
                    " and (:#{#filter.parking} is false or h.hospital_parking_count  >= 0)" +
                    " and (:#{#filter.keyword} = '' or :#{#filter.keyword} is null or h.hospital_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having distance <= :#{#filter.radius} order by distance"

    , nativeQuery = true)
    List<Hospital> searchByFilter(@Param("filter") MedicalSearchFilter filter);
}
