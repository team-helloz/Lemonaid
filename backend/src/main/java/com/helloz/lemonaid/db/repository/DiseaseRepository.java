package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Disease;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
    @Query(value = "select * from disease d where d.disease_no in" +
            " (select sd.symptom_disease_disease_no" +
            " from symptom_disease sd inner join symptom s" +
            " on sd.symptom_disease_symptom_no = s.symptom_no" +
            " where s.symptom_name in :symptoms" +
            " group by symptom_disease_disease_no" +
            " having count(distinct s.symptom_name) >= :symptomSize)", nativeQuery = true)
    Page<Disease> findAllBySymptoms(List<String> symptoms, long symptomSize, Pageable pageable);

}
