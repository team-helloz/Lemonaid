package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Pharmacy;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long>, PharmacyCustomRepository{

//    @Query(
//            "select p from Pharmacy p" +
//                    " where (:#{#filter.parking} is false or p.parkingCount > 0)" +
//                    " and (:#{#filter.keyword} = '' or p.name like concat('%',:#{#filter.keyword},'%'))"
//    )
//    List<Pharmacy> searchByFilter(@Param("filter") MedicalSearchFilter filter);


}
