package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long>{
    @Query(
            value =
                    "select distinct p.*,"+
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), p.medical_point) AS mapDistance" +
                    " from medical p" +
                    " where p.medical_type ='P'" +
                    " and MBRContains(ST_LINESTRINGFROMTEXT(concat('LINESTRING(',:#{#filter.x1}, ' ', :#{#filter.y1}, ',', :#{#filter.x2},' ',:#{#filter.y2},')'), 4326), p.medical_point)"+
                    " and (:#{#filter.parking} is false or p.medical_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " order by mapDistance"
            , countQuery =
                    "select distinct p.*,"+
                    " ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.mapLat}, ' ', :#{#filter.mapLng}, ')'), 4326), p.medical_point) AS mapDistance" +
                    " from medical p" +
                    " where p.medical_type ='P'" +
                    " and MBRContains(ST_LINESTRINGFROMTEXT(concat('LINESTRING(',:#{#filter.x1}, ' ', :#{#filter.y1}, ',', :#{#filter.x2},' ',:#{#filter.y2},')'), 4326), p.medical_point)"+
                    " and (:#{#filter.parking} is false or p.medical_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " order by mapDistance"
            ,nativeQuery = true)
    Page<Pharmacy> searchByFilter(@Param("filter") MedicalSearchFilter filter, Pageable pageable);

}
