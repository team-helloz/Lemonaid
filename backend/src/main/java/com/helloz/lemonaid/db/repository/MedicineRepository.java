package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    @Query("select m from Medicine m" +
            " where (:#{#filter.name} = '' or m.name like '%:#{#filter.name}%')" +
            " and (:#{#filter.company} = '' or m.company like '%:#{#filter.company}%')" +
            " and (:#{#filter.shape} = '' or m.shape = :#{#filter.shape})" +
            " and (:#{#filter.color} = '' or (m.colorF = :#{#filter.color} or m.colorB = :#{#filter.color}))" +
            " and (:#{#filter.form} = '' or m.formCodeName = :#{#filter.form})" +
            " and (:#{#filter.line} = '' or (m.lineF = :#{#filter.line} or m.lineB = :#{#filter.line}))" +
            " and (:#{#filter.mark} = '' or (m.markImgFront = :#{#filter.mark} or m.markImgBack = :#{#filter.mark}))" +
            " and (:#{#filter.sign} = '' or (m.markAnalFront = :#{#filter.sign} or m.markAnalBack = :#{#filter.sign}))")
    List<Medicine> searchByFilter(@Param("filter")  MedicineSearchFilter filter);

    Medicine findByNo(Long no);
}
