package com.helloz.lemonaid.db.repository;

import com.helloz.lemonaid.db.entity.Medicine;
import com.helloz.lemonaid.request.MedicineSearchFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Tuple;
import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

//    @Query("select m from Medicine m where" +
////            " (:#{#filter.name} = '' or m.name like '%:#{#filter.name}%')" +
////            " and (:#{#filter.company} = '' or m.company like '%:#{#filter.company}%')" +
//            " (:#{#filter.shape} is null or m.shape = :#{#filter.shape})" +
//            " and (:#{#filter.color} is null or (m.colorF = :#{#filter.color} or m.colorB = :#{#filter.color}))" +
//            " and (:#{#filter.form} is null or m.formCodeName = :#{#filter.form})" +
////            " and (:#{#filter.line} = '' or (m.lineF = :#{#filter.line} or m.lineB = :#{#filter.line}))" +
////            " and (:#{#filter.mark} = '' or (m.markImgFront = :#{#filter.mark} or m.markImgBack = :#{#filter.mark}))" +
//            " and (:#{#filter.sign} is null or (m.markAnalFront = :#{#filter.sign} or m.markAnalBack = :#{#filter.sign}))"
//    )
//    List<Medicine> searchByFilter(@Param("filter") MedicineSearchFilter filter);

    @Query(nativeQuery = true, value = "select medicine_no, medicine_num, medicine_name, medicine_company, medicine_chart, medicine_image, medicine_print_front, " +
            "medicine_print_back, medicine_shape, medicine_color_front, medicine_color_back, medicine_line_front, medicine_line_back, medicine_leng_long, medicine_leng_short, " +
            "medicine_thick, medicine_class_no, medicine_class_name, medicine_etc_otc_name, medicine_form_code_name, medicine_mark_anal_front, medicine_mark_anal_back, " +
            "medicine_mark_img_front, medicine_mark_img_back, medicine_eng_name, medicine_material, medicine_efficacy, medicine_usage, medicine_caution, medicine_hit from medicine" +
            " where (:shape = '전체' or medicine_shape = :shape)" +
            " and (:color = '전체' or (medicine_color_front like concat('%', :color, '%') or medicine_color_back like concat('%', :color, '%')))" +
            " and (:form = '전체' or medicine_form_code_name = :form)" +
            " and (:line = '전체' or (medicine_line_front like concat('%', :line, '%') or medicine_line_back like concat('%', :line, '%')))" +
            " and (:sign = '전체' or (medicine_mark_anal_front like concat('%', :sign, '%') or medicine_mark_anal_front like concat('%', :sign, '%')))" +
            " and (:name = '전체' or medicine_name like concat('%', :name, '%'))" +
            " limit 100")
    List<Medicine> searchByFilter(@Param("name") String name, @Param("shape") String shape, @Param("color") String color,
            @Param("form") String form, @Param("line") String line, @Param("sign") String sign);

    Medicine findByNo(Long no);

    @Modifying
    @Query("update Medicine m set m.hit = m.hit+1 where m.no = :#{#no}")
    void updateHit(Long no);

    @Query(nativeQuery = true, value = "select medicine_no, medicine_name, medicine_image from medicine order by medicine_hit desc limit 5")
    List<Tuple> findTopMedicines();
}