package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Hospital;
import com.helloz.lemonaid.request.MedicalSearchFilter;
import com.helloz.lemonaid.response.MedicalCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {

    @Query("select distinct code, name from Hospital")
    List<MedicalCode> findCodeAll();

    @Query(
            "select h from Hospital h, HospitalMedicalSubject hms"+
                    " where (:subjectsLength = 0 or hms.medicalSubject.no in :#{#filter.subjects})"+
                    " and (:#{#filter.code} = 0 or h.code = :#{#filter.code})" +
                    " and (:#{#filter.emergency} is false or h.emergencyDay = 'Y' or h.emergencyNight ='Y')" +
                    " and (:#{#filter.parking} is false or h.parkingCount > 0)" +
                    " and (:#{#filter.keyword} = '' or :#{#filter.keyword} is null or h.name like concat('%',:#{#filter.keyword},'%'))"
    )
    List<Hospital> searchByFilter(@Param("filter") MedicalSearchFilter filter, @Param("subjectsLength") int subjectsLength);
}
