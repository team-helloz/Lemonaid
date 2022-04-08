package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomDiseaseRepository extends JpaRepository<Symptom, Long> {
}
