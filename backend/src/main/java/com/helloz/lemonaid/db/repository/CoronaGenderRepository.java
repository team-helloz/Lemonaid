package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.CoronaGender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface CoronaGenderRepository extends JpaRepository<CoronaGender, Long> {

    @Query(value = "select sum(cg.corona_gender_men) from corona_gender cg", nativeQuery = true)
    long countGroupByGenderMen();

    @Query(value = "select sum(cg.corona_gender_women) from corona_gender cg", nativeQuery = true)
    long countGroupByGenderWomen();
}
