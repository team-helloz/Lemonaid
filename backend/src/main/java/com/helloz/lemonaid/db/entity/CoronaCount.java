package com.helloz.lemonaid.db.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Table(name = "CORONA_COUNT")
public class CoronaCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "corona_people_no")
    private long no;

    @Column(name = "corona_count_date")
    private Date countDate;

    @Column(name = "corona_count_total")
    private int countTotal;

    @Column(name = "corona_count_seoul")
    private int countSeoul;

    @Column(name = "corona_count_busan")
    private int countBusan;

    @Column(name = "corona_count_daegu")
    private int countDaegu;

    @Column(name = "corona_count_incheon")
    private int countIncheon;

    @Column(name = "corona_count_gwangju")
    private int countGwangju;

    @Column(name = "corona_count_daejeon")
    private int countDaejeon;

    @Column(name = "corona_count_ulsan")
    private int countUlsan;

    @Column(name = "corona_count_sejong")
    private int countSejong;

    @Column(name = "corona_count_gyeonggi")
    private int countGyeonggi;

    @Column(name = "corona_count_gangwon")
    private int countGangwon;

    @Column(name = "corona_count_chungn")
    private int countChungn;

    @Column(name = "corona_count_chungs")
    private int countChungs;

    @Column(name = "corona_count_jeonn")
    private int countJeonn;

    @Column(name = "corona_count_jeons")
    private int countJeons;

    @Column(name = "corona_count_gyeongn")
    private int countGyeongn;

    @Column(name = "corona_count_gyeongs")
    private int countGyeongs;

    @Column(name = "corona_count_jeju")
    private int countJeju;

    @Column(name = "corona_count_gita")
    private int countGita;
}
