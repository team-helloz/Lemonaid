package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.CoronaGender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoronaGenderRepository extends JpaRepository<CoronaGender, Long> {
    long countByGenderMen();

    long countByGenderWomen();
}
