-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lemonaiddb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lemonaiddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lemonaiddb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `lemonaiddb` ;

-- -----------------------------------------------------
-- Table `lemonaiddb`.`corona_age`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`corona_age` (
  `corona_age_no` INT NOT NULL AUTO_INCREMENT,
  `corona_age_date` DATE NOT NULL,
  `corona_age_0` INT NULL DEFAULT NULL,
  `corona_age_10` INT NULL DEFAULT NULL,
  `corona_age_20` INT NULL DEFAULT NULL,
  `corona_age_30` INT NULL DEFAULT NULL,
  `corona_age_40` INT NULL DEFAULT NULL,
  `corona_age_50` INT NULL DEFAULT NULL,
  `corona_age_60` INT NULL DEFAULT NULL,
  `corona_age_70` INT NULL DEFAULT NULL,
  `corona_age_80` INT NULL DEFAULT NULL,
  PRIMARY KEY (`corona_age_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`corona_count`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`corona_count` (
  `corona_count_no` INT NOT NULL AUTO_INCREMENT,
  `corona_count_date` DATE NOT NULL,
  `corona_count_region` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `corona_count_recover` INT NULL DEFAULT NULL,
  `corona_count_death` INT NULL DEFAULT NULL,
  `corona_count_isol` INT NULL DEFAULT NULL,
  `corona_count_rate` INT NULL DEFAULT NULL,
  `corona_count_count` INT NULL DEFAULT NULL,
  `corona_count_countK` INT NULL DEFAULT NULL,
  `corona_count_countF` INT NULL DEFAULT NULL,
  PRIMARY KEY (`corona_count_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`corona_gender`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`corona_gender` (
  `corona_gender_no` INT NOT NULL AUTO_INCREMENT,
  `corona_gender_date` DATE NOT NULL,
  `corona_gender_men` INT NULL DEFAULT NULL,
  `corona_gender_women` INT NULL DEFAULT NULL,
  PRIMARY KEY (`corona_gender_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`disease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`disease` (
  `disease_no` INT NOT NULL AUTO_INCREMENT,
  `disease_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_definition` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_cause` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_diagnosis` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_treatment` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_caution` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `disease_synonym` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`disease_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`medical_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`medical_subject` (
  `medical_subject_no` INT NOT NULL AUTO_INCREMENT,
  `medical_subject_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`medical_subject_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`disease_medical_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`disease_medical_subject` (
  `disease_medical_subject_no` INT NOT NULL AUTO_INCREMENT,
  `disease_medical_subject_medical_subject_no` INT NOT NULL,
  `disease_medical_subject_disease_no` INT NOT NULL,
  PRIMARY KEY (`disease_medical_subject_no`),
  INDEX `FK_disease_TO_disease_medical_subject_1` (`disease_medical_subject_disease_no` ASC) VISIBLE,
  INDEX `FK_medical_subject_TO_disease_medical_subject_1` (`disease_medical_subject_medical_subject_no` ASC) VISIBLE,
  CONSTRAINT `FK_disease_TO_disease_medical_subject_1`
    FOREIGN KEY (`disease_medical_subject_disease_no`)
    REFERENCES `lemonaiddb`.`disease` (`disease_no`),
  CONSTRAINT `FK_medical_subject_TO_disease_medical_subject_1`
    FOREIGN KEY (`disease_medical_subject_medical_subject_no`)
    REFERENCES `lemonaiddb`.`medical_subject` (`medical_subject_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`opentime`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`opentime` (
  `opentime_no` INT NOT NULL AUTO_INCREMENT,
  `opentime_sun` INT NULL DEFAULT NULL,
  `closetime_sun` INT NULL DEFAULT NULL,
  `opentime_mon` INT NULL DEFAULT NULL,
  `closetime_mon` INT NULL DEFAULT NULL,
  `opentime_tue` INT NULL DEFAULT NULL,
  `closetime_tue` INT NULL DEFAULT NULL,
  `opentime_wed` INT NULL DEFAULT NULL,
  `closetime_wed` INT NULL DEFAULT NULL,
  `opentime_thu` INT NULL DEFAULT NULL,
  `closetime_thu` INT NULL DEFAULT NULL,
  `opentime_fri` INT NULL DEFAULT NULL,
  `closetime_fri` INT NULL DEFAULT NULL,
  `opentime_sat` INT NULL DEFAULT NULL,
  `closetime_sat` INT NULL DEFAULT NULL,
  PRIMARY KEY (`opentime_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`hospital`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`hospital` (
  `hospital_no` INT NOT NULL AUTO_INCREMENT,
  `opentime_no` INT NOT NULL,
  `hospital_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_tel` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_total_doctor` INT NULL DEFAULT NULL,
  `hospital_x` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_y` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_code_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_address` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_url` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_build_code` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hospital_emergency_day` TINYINT(1) NULL DEFAULT NULL,
  `hospital_emergency_night` TINYINT(1) NULL DEFAULT NULL,
  `hospital_parking_count` INT NULL DEFAULT -1,
  PRIMARY KEY (`hospital_no`),
  INDEX `FK_opentime_TO_hospital_1_idx` (`opentime_no` ASC) VISIBLE,
  CONSTRAINT `FK_opentime_TO_hospital_1`
    FOREIGN KEY (`opentime_no`)
    REFERENCES `lemonaiddb`.`opentime` (`opentime_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`hospital_medical_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`hospital_medical_subject` (
  `hospital_medical_subject_no` INT NOT NULL AUTO_INCREMENT,
  `hospital_medical_subject_hospital_no` INT NOT NULL,
  `hospital_medical_subject_medical_subject_no` INT NOT NULL,
  PRIMARY KEY (`hospital_medical_subject_no`),
  INDEX `FK_hospital_TO_hospital_medical_subject_1` (`hospital_medical_subject_hospital_no` ASC) VISIBLE,
  INDEX `FK_medical_subject_TO_hospital_medical_subject_1` (`hospital_medical_subject_medical_subject_no` ASC) VISIBLE,
  CONSTRAINT `FK_hospital_TO_hospital_medical_subject_1`
    FOREIGN KEY (`hospital_medical_subject_hospital_no`)
    REFERENCES `lemonaiddb`.`hospital` (`hospital_no`),
  CONSTRAINT `FK_medical_subject_TO_hospital_medical_subject_1`
    FOREIGN KEY (`hospital_medical_subject_medical_subject_no`)
    REFERENCES `lemonaiddb`.`medical_subject` (`medical_subject_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`medicine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`medicine` (
  `medicine_no` INT NOT NULL AUTO_INCREMENT,
  `medicine_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_company` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_chart` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_image` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_print_front` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_print_back` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_shape` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_color_front` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_color_back` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_line_front` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_line_back` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_leng_long` DOUBLE NULL DEFAULT NULL,
  `medicine_leng_short` DOUBLE NULL DEFAULT NULL,
  `medicine_thick` DOUBLE NULL DEFAULT NULL,
  `medicine_class_no` INT NULL DEFAULT NULL,
  `medicine_class_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_etc_otc_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_form_code_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_mark_anal_front` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_mark_anal_back` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_mark_img_front` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_mark_img_back` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `medicine_eng_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`medicine_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`pharmacy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`pharmacy` (
  `pharmacy_no` INT NOT NULL AUTO_INCREMENT,
  `opentime_no` INT NOT NULL,
  `pharmacy_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `pharmacy_tel` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `pharmacy_x` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `pharmacy_y` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `pharmacy_address` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `pharmacy_parking_count` INT NULL DEFAULT -1,
  PRIMARY KEY (`pharmacy_no`),
  INDEX `FK_opentime_TO_pharmacy_1_idx` (`opentime_no` ASC) VISIBLE,
  CONSTRAINT `FK_opentime_TO_pharmacy_1`
    FOREIGN KEY (`opentime_no`)
    REFERENCES `lemonaiddb`.`opentime` (`opentime_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`related_disease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`related_disease` (
  `related_disease_no` INT NOT NULL AUTO_INCREMENT,
  `related_disease_disease_no` INT NOT NULL,
  `related_disease_related_disease_no` INT NOT NULL,
  PRIMARY KEY (`related_disease_no`),
  INDEX `FK_disease_TO_related_disease_1` (`related_disease_disease_no` ASC) VISIBLE,
  INDEX `FK_disease_TO_related_disease_2` (`related_disease_related_disease_no` ASC) VISIBLE,
  CONSTRAINT `FK_disease_TO_related_disease_1`
    FOREIGN KEY (`related_disease_disease_no`)
    REFERENCES `lemonaiddb`.`disease` (`disease_no`),
  CONSTRAINT `FK_disease_TO_related_disease_2`
    FOREIGN KEY (`related_disease_related_disease_no`)
    REFERENCES `lemonaiddb`.`disease` (`disease_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`screening_center`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`screening_center` (
  `screening_center_no` INT NOT NULL AUTO_INCREMENT,
  `screening_center_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_address` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_x` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_y` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_week_time` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_sat_time` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_sun_time` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_holiday_time` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_tel` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_control_center` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_control_center_tel` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `screening_center_convenience` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`screening_center_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`symptom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`symptom` (
  `symptom_no` INT NOT NULL AUTO_INCREMENT,
  `symptom_name` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `symptom_site` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`symptom_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `lemonaiddb`.`symptom_disease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lemonaiddb`.`symptom_disease` (
  `symptom_disease_no` INT NOT NULL AUTO_INCREMENT,
  `symptom_disease_symptom_no` INT NOT NULL,
  `symptom_disease_disease_no` INT NOT NULL,
  PRIMARY KEY (`symptom_disease_no`),
  INDEX `FK_disease_TO_symptom_disease_1` (`symptom_disease_disease_no` ASC) VISIBLE,
  INDEX `FK_symptom_TO_symptom_disease_1` (`symptom_disease_symptom_no` ASC) VISIBLE,
  CONSTRAINT `FK_disease_TO_symptom_disease_1`
    FOREIGN KEY (`symptom_disease_disease_no`)
    REFERENCES `lemonaiddb`.`disease` (`disease_no`),
  CONSTRAINT `FK_symptom_TO_symptom_disease_1`
    FOREIGN KEY (`symptom_disease_symptom_no`)
    REFERENCES `lemonaiddb`.`symptom` (`symptom_no`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
