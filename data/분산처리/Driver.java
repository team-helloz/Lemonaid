package com.helloz.lemonaid;

import org.apache.hadoop.util.ProgramDriver;

public class Driver {
    public static void main(String[] args) {
        int exitCode = -1;
        ProgramDriver pgd = new ProgramDriver();
        try {
            pgd.addClass("wordcount", Wordcount.class, "A map/reduce program");
            pgd.addClass("medicalsubjectsearch", MedicalSubjectSearch.class, "");
            pgd.addClass("medicalsidogugun", MedicalSidoGugun.class, "시도, 구군 별로 갯수 카운트");

            pgd.driver(args);
            exitCode = 0;
        }
        catch(Throwable e) {
            e.printStackTrace();
        }

        System.exit(exitCode);
    }
}