package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {
    List<Symptom> findAllBySite(String site);

    @Query("select distinct s.site from Symptom s")
    List<String> findDistinctSite();
}
