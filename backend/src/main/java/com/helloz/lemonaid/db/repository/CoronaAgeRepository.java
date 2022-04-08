package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.CoronaAge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoronaAgeRepository extends JpaRepository<CoronaAge, Long> {


    @Query(value = "select sum(ca.corona_age_0) from corona_age ca", nativeQuery = true)
    long countGroupByAge0();

    @Query(value = "select sum(ca.corona_age_10) from corona_age ca", nativeQuery = true)
    long countGroupByAge10();

    @Query(value = "select sum(ca.corona_age_20) from corona_age ca", nativeQuery = true)
    long countGroupByAge20();

    @Query(value = "select sum(ca.corona_age_30) from corona_age ca", nativeQuery = true)
    long countGroupByAge30();

    @Query(value = "select sum(ca.corona_age_40) from corona_age ca", nativeQuery = true)
    long countGroupByAge40();

    @Query(value = "select sum(ca.corona_age_50) from corona_age ca", nativeQuery = true)
    long countGroupByAge50();

    @Query(value = "select sum(ca.corona_age_60) from corona_age ca", nativeQuery = true)
    long countGroupByAge60();

    @Query(value = "select sum(ca.corona_age_70) from corona_age ca", nativeQuery = true)
    long countGroupByAge70();

    @Query(value = "select sum(ca.corona_age_80) from corona_age ca", nativeQuery = true)
    long countGroupByAge80();

    @Query(value = "select * from corona_age ca order by ca.corona_age_date desc limit 1", nativeQuery = true)
    List<CoronaAge> findByRecentDate();
}
