package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long>{
    @Query(
            value = "select distinct p.pharmacy_no, p.opentime_no, p.pharmacy_name, p.pharmacy_tel," +
                    "p.pharmacy_x, p.pharmacy_y, p.pharmacy_address, p.pharmacy_parking_count, " +
                    "ST_DISTANCE_SPHERE(ST_GEOMFROMTEXT(concat('POINT(', :#{#filter.lat}, ' ', :#{#filter.lng}, ')'), 4326), pharmacy_point) AS distance" +
                    " from pharmacy p" +
                    " where (:#{#filter.parking} is false or p.pharmacy_parking_count > 0)" +
                    " and (:#{#filter.keyword} = '' or p.pharmacy_name like concat('%',:#{#filter.keyword},'%'))" +
                    " having distance <= :#{#filter.radius} order by distance"

    ,nativeQuery = true)
    List<Pharmacy> searchByFilter(@Param("filter") MedicalSearchFilter filter);


}
