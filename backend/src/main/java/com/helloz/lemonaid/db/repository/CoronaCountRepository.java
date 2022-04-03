package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.CoronaCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CoronaCountRepository extends JpaRepository<CoronaCount, Long> {

}
