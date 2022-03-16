CREATE DATABASE  IF NOT EXISTS `lemonaiddb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lemonaiddb`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: j6d108.p.ssafy.io    Database: lemonaiddb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `corona_age`
--

DROP TABLE IF EXISTS `corona_age`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corona_age` (
  `corona_age_no` int NOT NULL AUTO_INCREMENT,
  `corona_age_date` date NOT NULL,
  `corona_age_0` int DEFAULT NULL,
  `corona_age_10` int DEFAULT NULL,
  `corona_age_20` int DEFAULT NULL,
  `corona_age_30` int DEFAULT NULL,
  `corona_age_40` int DEFAULT NULL,
  `corona_age_50` int DEFAULT NULL,
  `corona_age_60` int DEFAULT NULL,
  `corona_age_70` int DEFAULT NULL,
  `corona_age_80` int DEFAULT NULL,
  PRIMARY KEY (`corona_age_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corona_age`
--

LOCK TABLES `corona_age` WRITE;
/*!40000 ALTER TABLE `corona_age` DISABLE KEYS */;
/*!40000 ALTER TABLE `corona_age` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corona_count`
--

DROP TABLE IF EXISTS `corona_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corona_count` (
  `corona_count_no` int NOT NULL AUTO_INCREMENT,
  `corona_count_date` date NOT NULL,
  `corona_count_region` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `corona_count_recover` int DEFAULT NULL,
  `corona_count_death` int DEFAULT NULL,
  `corona_count_isol` int DEFAULT NULL,
  `corona_count_rate` int DEFAULT NULL,
  `corona_count_count` int DEFAULT NULL,
  `corona_count_countK` int DEFAULT NULL,
  `corona_count_countF` int DEFAULT NULL,
  PRIMARY KEY (`corona_count_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corona_count`
--

LOCK TABLES `corona_count` WRITE;
/*!40000 ALTER TABLE `corona_count` DISABLE KEYS */;
/*!40000 ALTER TABLE `corona_count` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corona_gender`
--

DROP TABLE IF EXISTS `corona_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corona_gender` (
  `corona_gender_no` int NOT NULL AUTO_INCREMENT,
  `corona_gender_date` date NOT NULL,
  `corona_gender_men` int DEFAULT NULL,
  `corona_gender_women` int DEFAULT NULL,
  PRIMARY KEY (`corona_gender_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corona_gender`
--

LOCK TABLES `corona_gender` WRITE;
/*!40000 ALTER TABLE `corona_gender` DISABLE KEYS */;
/*!40000 ALTER TABLE `corona_gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disease`
--

DROP TABLE IF EXISTS `disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disease` (
  `disease_no` int NOT NULL AUTO_INCREMENT,
  `disease_name` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_definition` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_cause` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_diagnosis` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_treatment` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_caution` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease_synonym` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`disease_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disease`
--

LOCK TABLES `disease` WRITE;
/*!40000 ALTER TABLE `disease` DISABLE KEYS */;
/*!40000 ALTER TABLE `disease` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disease_medical_subject`
--

DROP TABLE IF EXISTS `disease_medical_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disease_medical_subject` (
  `disease_medical_subject_no` int NOT NULL AUTO_INCREMENT,
  `disease_medical_subject_medical_subject_no` int NOT NULL,
  `disease_medical_subject_disease_no` int NOT NULL,
  PRIMARY KEY (`disease_medical_subject_no`),
  KEY `FK_disease_TO_disease_medical_subject_1_idx` (`disease_medical_subject_disease_no`),
  KEY `FK_medical_subject_TO_disease_medical_subject_1_idx` (`disease_medical_subject_medical_subject_no`),
  CONSTRAINT `FK_disease_TO_disease_medical_subject_1` FOREIGN KEY (`disease_medical_subject_disease_no`) REFERENCES `disease` (`disease_no`),
  CONSTRAINT `FK_medical_subject_TO_disease_medical_subject_1` FOREIGN KEY (`disease_medical_subject_medical_subject_no`) REFERENCES `medical_subject` (`medical_subject_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disease_medical_subject`
--

LOCK TABLES `disease_medical_subject` WRITE;
/*!40000 ALTER TABLE `disease_medical_subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `disease_medical_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `hospital_no` int NOT NULL AUTO_INCREMENT,
  `opentime_no` int NOT NULL,
  `hospital_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_tel` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_total_doctor` int DEFAULT NULL,
  `hospital_x` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_y` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_code_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_address` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_url` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_build_code` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hospital_emergency_day` tinyint(1) DEFAULT NULL,
  `hospital_emergency_night` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`hospital_no`),
  KEY `FK_opentime_TO_hospital_1_idx` (`opentime_no`),
  CONSTRAINT `FK_opentime_TO_hospital_1` FOREIGN KEY (`opentime_no`) REFERENCES `opentime` (`opentime_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital_medical_subject`
--

DROP TABLE IF EXISTS `hospital_medical_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital_medical_subject` (
  `hospital_medical_subject_no` int NOT NULL AUTO_INCREMENT,
  `hospital_medical_subject_hospital_no` int NOT NULL,
  `hospital_medical_subject_medical_subject_no` int NOT NULL,
  PRIMARY KEY (`hospital_medical_subject_no`),
  KEY `FK_hospital_TO_hospital_medical_subject_1_idx` (`hospital_medical_subject_hospital_no`),
  KEY `FK_medical_subject_TO_hospital_medical_subject_1_idx` (`hospital_medical_subject_medical_subject_no`),
  CONSTRAINT `FK_hospital_TO_hospital_medical_subject_1` FOREIGN KEY (`hospital_medical_subject_hospital_no`) REFERENCES `hospital` (`hospital_no`),
  CONSTRAINT `FK_medical_subject_TO_hospital_medical_subject_1` FOREIGN KEY (`hospital_medical_subject_medical_subject_no`) REFERENCES `medical_subject` (`medical_subject_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital_medical_subject`
--

LOCK TABLES `hospital_medical_subject` WRITE;
/*!40000 ALTER TABLE `hospital_medical_subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `hospital_medical_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_subject`
--

DROP TABLE IF EXISTS `medical_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_subject` (
  `medical_subject_no` int NOT NULL AUTO_INCREMENT,
  `medical_subject_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`medical_subject_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_subject`
--

LOCK TABLES `medical_subject` WRITE;
/*!40000 ALTER TABLE `medical_subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `medicine_no` int NOT NULL AUTO_INCREMENT,
  `medicine_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_company` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_chart` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_image` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_print_front` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_print_back` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_shape` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_color_front` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_color_back` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_line_front` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_line_back` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_leng_long` double DEFAULT NULL,
  `medicine_leng_short` double DEFAULT NULL,
  `medicine_thick` double DEFAULT NULL,
  `medicine_class_no` int DEFAULT NULL,
  `medicine_class_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_etc_otc_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_form_code_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_mark_anal_front` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_mark_anal_back` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_mark_img_front` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_mark_img_back` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_eng_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`medicine_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opentime`
--

DROP TABLE IF EXISTS `opentime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opentime` (
  `opentime_no` int NOT NULL AUTO_INCREMENT,
  `opentime_sun` int DEFAULT NULL,
  `closetime_sun` int DEFAULT NULL,
  `opentime_mon` int DEFAULT NULL,
  `closetime_mon` int DEFAULT NULL,
  `opentime_tue` int DEFAULT NULL,
  `closetime_tue` int DEFAULT NULL,
  `opentime_wed` int DEFAULT NULL,
  `closetime_wed` int DEFAULT NULL,
  `opentime_thu` int DEFAULT NULL,
  `closetime_thu` int DEFAULT NULL,
  `opentime_fri` int DEFAULT NULL,
  `closetime_fri` int DEFAULT NULL,
  `opentime_sat` int DEFAULT NULL,
  `closetime_sat` int DEFAULT NULL,
  PRIMARY KEY (`opentime_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opentime`
--

LOCK TABLES `opentime` WRITE;
/*!40000 ALTER TABLE `opentime` DISABLE KEYS */;
/*!40000 ALTER TABLE `opentime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacy`
--

DROP TABLE IF EXISTS `pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy` (
  `pharmacy_no` int NOT NULL AUTO_INCREMENT,
  `opentime_no` int NOT NULL,
  `pharmacy_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacy_tel` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacy_x` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacy_y` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacy_address` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`pharmacy_no`),
  KEY `FK_opentime_TO_pharmacy_1_idx` (`opentime_no`),
  CONSTRAINT `FK_opentime_TO_pharmacy_1` FOREIGN KEY (`opentime_no`) REFERENCES `opentime` (`opentime_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
/*!40000 ALTER TABLE `pharmacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `related_disease`
--

DROP TABLE IF EXISTS `related_disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `related_disease` (
  `related_disease_no` int NOT NULL AUTO_INCREMENT,
  `related_disease_disease_no` int NOT NULL,
  `related_disease_related_disease_no` int NOT NULL,
  PRIMARY KEY (`related_disease_no`),
  KEY `FK_disease_TO_related_disease_1` (`related_disease_related_disease_no`,`related_disease_disease_no`),
  KEY `FK_disease_TO_related_disease_1_idx` (`related_disease_disease_no`),
  CONSTRAINT `FK_disease_TO_related_disease_1` FOREIGN KEY (`related_disease_disease_no`) REFERENCES `disease` (`disease_no`),
  CONSTRAINT `FK_disease_TO_related_disease_2` FOREIGN KEY (`related_disease_related_disease_no`) REFERENCES `disease` (`disease_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `related_disease`
--

LOCK TABLES `related_disease` WRITE;
/*!40000 ALTER TABLE `related_disease` DISABLE KEYS */;
/*!40000 ALTER TABLE `related_disease` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screening_center`
--

DROP TABLE IF EXISTS `screening_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screening_center` (
  `screening_center_no` int NOT NULL AUTO_INCREMENT,
  `screening_center_name` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_address` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_x` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_y` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_week_time` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_sat_time` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_sun_time` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_holiday_time` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_tel` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_control_center` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_control_center_tel` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `screening_center_convenience` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`screening_center_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screening_center`
--

LOCK TABLES `screening_center` WRITE;
/*!40000 ALTER TABLE `screening_center` DISABLE KEYS */;
/*!40000 ALTER TABLE `screening_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `symptom`
--

DROP TABLE IF EXISTS `symptom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptom` (
  `symptom_no` int NOT NULL AUTO_INCREMENT,
  `symptom_name` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symptom_site` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`symptom_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptom`
--

LOCK TABLES `symptom` WRITE;
/*!40000 ALTER TABLE `symptom` DISABLE KEYS */;
/*!40000 ALTER TABLE `symptom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `symptom_disease`
--

DROP TABLE IF EXISTS `symptom_disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptom_disease` (
  `symptom_disease_no` int NOT NULL AUTO_INCREMENT,
  `symptom_disease_symptom_no` int NOT NULL,
  `symptom_disease_disease_no` int NOT NULL,
  PRIMARY KEY (`symptom_disease_no`),
  KEY `FK_symptom_TO_symptom_disease_1_idx` (`symptom_disease_symptom_no`),
  KEY `FK_disease_TO_symptom_disease_1_idx` (`symptom_disease_disease_no`),
  CONSTRAINT `FK_disease_TO_symptom_disease_1` FOREIGN KEY (`symptom_disease_disease_no`) REFERENCES `disease` (`disease_no`),
  CONSTRAINT `FK_symptom_TO_symptom_disease_1` FOREIGN KEY (`symptom_disease_symptom_no`) REFERENCES `symptom` (`symptom_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptom_disease`
--

LOCK TABLES `symptom_disease` WRITE;
/*!40000 ALTER TABLE `symptom_disease` DISABLE KEYS */;
/*!40000 ALTER TABLE `symptom_disease` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-16 16:47:28
