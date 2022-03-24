package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.HospitalMedicalSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalMedicalSubjectRepository extends JpaRepository<HospitalMedicalSubject, Long> {

}
