package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long>{
    @Query(
            value = "select distinct p.medical_no, p.opentime_no, p.medical_name, p.medical_tel," +
                    "p.medical_x, p.medical_y, p.medical_address, p.medical_parking_count, " +
                    "ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.lat}, ' ', :#{#filter.lng}, ')'), 4326), p.medical_point) AS distance" +
                    " from medical p" +
                    " where p.medical_type ='P'" +
                    " and (:#{#filter.parking} is false or p.medical_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.medical_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having distance <= :#{#filter.radius} order by distance"

    ,nativeQuery = true)
    List<Pharmacy> searchByFilter(@Param("filter") MedicalSearchFilter filter, Pageable pageable);

}
