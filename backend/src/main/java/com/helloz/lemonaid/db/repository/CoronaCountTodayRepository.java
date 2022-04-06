package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.CoronaCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoronaCountTodayRepository extends JpaRepository<CoronaCount, Long> {

    @Query(value = "select * from corona_count cc order by cc.corona_count_date desc limit 1", nativeQuery = true)
    List<CoronaCount> findByRecentDate();
}
