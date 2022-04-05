package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Medical;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long> {

    @Query(
            value = "((select distinct h.*," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), h.medical_point) AS mapDistance," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.nowLat}, ' ', :#{#filter.nowLng}, ')'), 4326), h.medical_point) AS nowDistance" +
                    " from medical h inner join hospital_medical_subject hms " +
                    " on h.medical_no = hms.hospital_medical_subject_hospital_no"+
                    " where h.medical_type = 'H'" +
                    " and (:subjectSize = 0 or hms.hospital_medical_subject_medical_subject_no in :#{#filter.subjects})" +
                    " and (:#{#filter.code} = 0 or h.hospital_code = :#{#filter.code})" +
                    " and (:#{#filter.emergency} is false or h.hospital_emergency_day = 'Y' or h.hospital_emergency_night ='Y')" +
                    " and (:#{#filter.parking} is false or h.medical_parking_count  >= 0)" +
                    " and (:#{#filter.keyword} = '' or :#{#filter.keyword} is null or h.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having mapDistance <= :#{#filter.radius}) " +
                    "union (" +
                    " select distinct p.*," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), p.medical_point) AS mapDistance," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.nowLat}, ' ', :#{#filter.nowLng}, ')'), 4326), p.medical_point) AS nowDistance" +
                    " from medical p" +
                    " where p.medical_type ='P'" +
                    " and (:#{#filter.parking} is false or p.medical_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having mapDistance <= :#{#filter.radius}))" +
                    " order by mapDistance"
            , countQuery = "((select distinct h.*," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), h.medical_point) AS mapDistance," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.nowLat}, ' ', :#{#filter.nowLng}, ')'), 4326), h.medical_point) AS nowDistance" +
                    " from medical h inner join hospital_medical_subject hms " +
                    " on h.medical_no = hms.hospital_medical_subject_hospital_no"+
                    " where h.medical_type = 'H'" +
                    " and (:subjectSize = 0 or hms.hospital_medical_subject_medical_subject_no in :#{#filter.subjects})" +
                    " and (:#{#filter.code} = 0 or h.hospital_code = :#{#filter.code})" +
                    " and (:#{#filter.emergency} is false or h.hospital_emergency_day = 'Y' or h.hospital_emergency_night ='Y')" +
                    " and (:#{#filter.parking} is false or h.medical_parking_count  >= 0)" +
                    " and (:#{#filter.keyword} = '' or :#{#filter.keyword} is null or h.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having mapDistance <= :#{#filter.radius}) " +
                    "union (" +
                    " select distinct p.*," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), p.medical_point) AS mapDistance," +
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.nowLat}, ' ', :#{#filter.nowLng}, ')'), 4326), p.medical_point) AS nowDistance" +
                    " from medical p" +
                    " where p.medical_type ='P'" +
                    " and (:#{#filter.parking} is false or p.medical_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having mapDistance <= :#{#filter.radius}))" +
                    " order by mapDistance"
        , nativeQuery = true)
    Page<? extends Medical> searchByFilter(MedicalSearchFilter filter, int subjectSize, Pageable pageable);
}
