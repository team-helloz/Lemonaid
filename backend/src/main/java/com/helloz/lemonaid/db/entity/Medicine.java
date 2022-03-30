package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Table(name = "MEDICINE")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medicine_no")
    private long no;

    @Column(name = "medicine_num")
    private long num;

    @Column(name = "medicine_name")
    private String name;

    @Column(name = "medicine_company")
    private String company;

    @Column(name = "medicine_chart")
    private String chart;

    @Column(name = "medicine_image")
    private String image;

    @Column(name = "medicine_print_front")
    private String printF;

    @Column(name = "medicine_print_back")
    private String printB;

    @Column(name = "medicine_shape")
    private String shape;

    @Column(name = "medicine_color_front")
    private String colorF;

    @Column(name = "medicine_color_back")
    private String colorB;

    @Column(name = "medicine_line_front")
    private String lineF;

    @Column(name = "medicine_line_back")
    private String lineB;

    @Column(name = "medicine_leng_long")
    private double lengL;

    @Column(name = "medicine_leng_short")
    private double lengS;

    @Column(name = "medicine_thick")
    private double thick;

    @Column(name = "medicine_class_no")
    private int classNo;

    @Column(name = "medicine_class_name ")
    private String className;

    @Column(name = "medicine_etc_otc_name")
    private String etcOtcName;

    @Column(name = "medicine_form_code_name")
    private String formCodeName;

    @Column(name = "medicine_mark_anal_front")
    private String markAnalFront;

    @Column(name = "medicine_mark_anal_back")
    private String markAnalBack;

    @Column(name = "medicine_mark_img_front")
    private String markImgFront;

    @Column(name = "medicine_mark_img_back")
    private String markImgBack;

    @Column(name = "medicine_eng_name")
    private String engName;

    @Column(name = "medicine_material")
    private String material;

    @Column(name = "medicine_efficacy")
    private String efficacy;

    @Column(name = "medicine_usage")
    private String usage;

    @Column(name = "medicine_caution")
    private String caution;

    @Column(name = "medicine_hit")
    private int hit;
}
