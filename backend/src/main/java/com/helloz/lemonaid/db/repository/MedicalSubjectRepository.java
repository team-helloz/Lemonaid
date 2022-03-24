package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.MedicalSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalSubjectRepository extends JpaRepository<MedicalSubject, Long> {

}
