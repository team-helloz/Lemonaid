package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
}
