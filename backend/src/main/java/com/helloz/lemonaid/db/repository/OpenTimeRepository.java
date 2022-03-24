package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.OpenTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpenTimeRepository extends JpaRepository<OpenTime, Long> {
}
