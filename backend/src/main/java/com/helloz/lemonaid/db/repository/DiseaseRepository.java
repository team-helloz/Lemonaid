package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Disease;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
    @Query("select d from Disease d join SymptomDisease sd" +
            " on d = sd.disease"+
            " where sd.symptom.name in :symptoms")
    Page<Disease> findAllBySymptoms(List<String> symptoms, Pageable pageable);

}
