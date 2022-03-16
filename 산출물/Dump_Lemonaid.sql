CREATE TABLE `hospital` (
	`hospital_no`	number	NOT NULL,
	`opentime_no`	number	NOT NULL,
	`hospital_name`	string	NULL,
	`hospital_tel`	string	NULL,
	`hospital_total_doctor`	number	NULL,
	`hospital_x`	string	NULL,
	`hospital_y`	string	NULL,
	`hospital_code_name`	string	NULL,
	`hospital_address`	string	NULL,
	`hospital_url`	string	NULL,
	`hospital_build_code`	string	NULL,
	`hospital_emergency_day`	boolean	NULL,
	`hospital_emergency_night`	boolean	NULL
);

CREATE TABLE `pharmacy` (
	`pharmacy_no`	VARCHAR(255)	NOT NULL,
	`opentime_no`	number	NOT NULL,
	`pharmacy_name`	string	NULL,
	`pharmacy_tel`	string	NULL,
	`pharmacy_x`	string	NULL,
	`pharmacy_y`	string	NULL,
	`pharmacy_address`	string	NULL
);

CREATE TABLE `opentime` (
	`opentime_no`	number	NOT NULL,
	`opentime_sun`	number	NULL,
	`closeime_sun`	number	NULL,
	`opentime_mon`	number	NULL,
	`closetime_mon`	number	NULL,
	`opentime_tue`	number	NULL,
	`closetime_tue`	number	NULL,
	`opentime_wed`	number	NULL,
	`closetime_wed`	number	NULL,
	`opentime_thu`	number	NULL,
	`closetime_thu`	number	NULL,
	`opentime_fri`	number	NULL,
	`closetime_fri`	number	NULL,
	`opentime_sat`	number	NULL,
	`closetime_sat`	number	NULL
);

CREATE TABLE `hospital_medical_subject` (
	`hospital_medical_subject_no`	number	NOT NULL,
	`hospital_medical_subject_hospital_no`	number	NOT NULL,
	`hospital_medical_subject_medical_subject_no`	number	NOT NULL
);

CREATE TABLE `medical_subject` (
	`medical_subject_no`	number	NOT NULL,
	`medical_subject_name`	string	NULL
);

CREATE TABLE `screening_center` (
	`Key`	number	NOT NULL,
	`screening_center_name`	string	NULL,
	`screening_center_address`	string	NULL,
	`screening_center_x`	string	NULL,
	`screening_center_y`	string	NULL,
	`screening_center_week_time`	string	NULL,
	`screening_center_sat_time`	string	NULL,
	`screening_center_sun_time`	string	NULL,
	`screening_center_holiday_time`	string	NULL,
	`screening_center_tel`	string	NULL,
	`screening_center_control_center`	string	NULL,
	`screening_center_control_center_tel`	string	NULL,
	`screening_center_convenience`	string	NULL
);

CREATE TABLE `symptom` (
	`symptom_no`	number	NOT NULL,
	`symptom_name`	string	NOT NULL,
	`symptom_site`	string	NOT NULL
);

CREATE TABLE `disease` (
	`disease_no`	number	NOT NULL,
	`disease_name`	string	NOT NULL,
	`disease_definition`	string	NOT NULL,
	`disease_cause`	string	NOT NULL,
	`disease_diagnosis`	string	NOT NULL,
	`disease_treatment`	string	NOT NULL,
	`disease_caution`	string	NOT NULL,
	`disease_synonym`	string	NOT NULL
);

CREATE TABLE `related_disease` (
	`related_disease_no`	number	NOT NULL,
	`related_disease_disease_no`	number	NOT NULL,
	`related_disease_realated_disease_no`	number	NOT NULL
);

CREATE TABLE `symptom_disease` (
	`symptom_disease_no`	number	NOT NULL,
	`symptom_disease_symptom_no`	number	NOT NULL,
	`symptom_disease_disease_no`	number	NOT NULL
);

CREATE TABLE `medicine` (
	`medicine_no`	number	NOT NULL,
	`medicine_name`	string	NULL,
	`medicine_company`	string	NULL,
	`medicine_chart`	string	NULL,
	`medicine_image`	string	NULL,
	`medicine_print_front`	string	NULL,
	`medicine_print_back`	string	NULL,
	`medicine_shape`	string	NULL,
	`medicine_color_front`	string	NULL,
	`medicine_color_back`	string	NULL,
	`medicine_line_front`	string	NULL,
	`medicine_line_back`	string	NULL,
	`medicine_leng_long`	double	NULL,
	`medicine_leng_short`	double	NULL,
	`medicine_thick`	double	NULL,
	`medicine_class_no`	number	NULL,
	`medicine_class_name`	string	NULL,
	`medicine_etc_otc_name`	string	NULL,
	`medicine_form_code_name`	string	NULL,
	`medicine_mark_anal_front`	string	NULL,
	`medicine_mark_anal_back`	string	NULL,
	`medicine_mark_img_front`	string	NULL,
	`medicine_mark_img_back`	string	NULL,
	`medicine_eng_name`	string	NULL
);

CREATE TABLE `corona_count` (
	`corona_people_no`	number	NOT NULL,
	`corona_count_date`	date	NOT NULL,
	`corona_count_region`	string	NOT NULL,
	`corona_count_recover`	number	NULL,
	`corona_count_death`	number	NULL,
	`corona_count_isol`	number	NULL,
	`corona_count_rate`	number	NULL,
	`corona_count_count`	number	NULL,
	`corona_count_countK`	number	NULL,
	`corona_count_countF`	number	NULL
);

CREATE TABLE `corona_age` (
	`corona_age_no`	number	NOT NULL,
	`corona_age_date`	date	NOT NULL,
	`corona_age_0`	number	NULL,
	`corona_age_10`	number	NULL,
	`corona_age_20`	number	NULL,
	`corona_age_30`	number	NULL,
	`corona_age_40`	number	NULL,
	`corona_age_50`	number	NULL,
	`corona_age_60`	number	NULL,
	`corona_age_70`	number	NULL,
	`corona_age_80`	number	NULL
);

CREATE TABLE `corona_gender` (
	`corona_gender_no`	number	NOT NULL,
	`corona_gender_date`	date	NOT NULL,
	`corona_gender_men`	number	NULL,
	`corona_gender_women`	number	NULL
);

CREATE TABLE `disease_medical_subject` (
	`disease_medial_subject_no`	number	NOT NULL,
	`disease_medical_subject_medical_subject_no`	number	NOT NULL,
	`disease_medical_subject_disease_no`	VARCHAR(255)	NOT NULL
);

ALTER TABLE `hospital` ADD CONSTRAINT `PK_HOSPITAL` PRIMARY KEY (
	`hospital_no`,
	`opentime_no`
);

ALTER TABLE `pharmacy` ADD CONSTRAINT `PK_PHARMACY` PRIMARY KEY (
	`pharmacy_no`,
	`opentime_no`
);

ALTER TABLE `opentime` ADD CONSTRAINT `PK_OPENTIME` PRIMARY KEY (
	`opentime_no`
);

ALTER TABLE `hospital_medical_subject` ADD CONSTRAINT `PK_HOSPITAL_MEDICAL_SUBJECT` PRIMARY KEY (
	`hospital_medical_subject_no`,
	`hospital_medical_subject_hospital_no`,
	`hospital_medical_subject_medical_subject_no`
);

ALTER TABLE `medical_subject` ADD CONSTRAINT `PK_MEDICAL_SUBJECT` PRIMARY KEY (
	`medical_subject_no`
);

ALTER TABLE `screening_center` ADD CONSTRAINT `PK_SCREENING_CENTER` PRIMARY KEY (
	`Key`
);

ALTER TABLE `symptom` ADD CONSTRAINT `PK_SYMPTOM` PRIMARY KEY (
	`symptom_no`
);

ALTER TABLE `disease` ADD CONSTRAINT `PK_DISEASE` PRIMARY KEY (
	`disease_no`
);

ALTER TABLE `related_disease` ADD CONSTRAINT `PK_RELATED_DISEASE` PRIMARY KEY (
	`related_disease_no`,
	`related_disease_disease_no`,
	`related_disease_realated_disease_no`
);

ALTER TABLE `symptom_disease` ADD CONSTRAINT `PK_SYMPTOM_DISEASE` PRIMARY KEY (
	`symptom_disease_no`,
	`symptom_disease_symptom_no`,
	`symptom_disease_disease_no`
);

ALTER TABLE `medicine` ADD CONSTRAINT `PK_MEDICINE` PRIMARY KEY (
	`medicine_no`
);

ALTER TABLE `corona_count` ADD CONSTRAINT `PK_CORONA_COUNT` PRIMARY KEY (
	`corona_people_no`
);

ALTER TABLE `corona_age` ADD CONSTRAINT `PK_CORONA_AGE` PRIMARY KEY (
	`corona_age_no`
);

ALTER TABLE `corona_gender` ADD CONSTRAINT `PK_CORONA_GENDER` PRIMARY KEY (
	`corona_gender_no`
);

ALTER TABLE `disease_medical_subject` ADD CONSTRAINT `PK_DISEASE_MEDICAL_SUBJECT` PRIMARY KEY (
	`disease_medial_subject_no`,
	`disease_medical_subject_medical_subject_no`,
	`disease_medical_subject_disease_no`
);

ALTER TABLE `hospital` ADD CONSTRAINT `FK_opentime_TO_hospital_1` FOREIGN KEY (
	`opentime_no`
)
REFERENCES `opentime` (
	`opentime_no`
);

ALTER TABLE `pharmacy` ADD CONSTRAINT `FK_opentime_TO_pharmacy_1` FOREIGN KEY (
	`opentime_no`
)
REFERENCES `opentime` (
	`opentime_no`
);

ALTER TABLE `hospital_medical_subject` ADD CONSTRAINT `FK_hospital_TO_hospital_medical_subject_1` FOREIGN KEY (
	`hospital_medical_subject_hospital_no`
)
REFERENCES `hospital` (
	`hospital_no`
);

ALTER TABLE `hospital_medical_subject` ADD CONSTRAINT `FK_medical_subject_TO_hospital_medical_subject_1` FOREIGN KEY (
	`hospital_medical_subject_medical_subject_no`
)
REFERENCES `medical_subject` (
	`medical_subject_no`
);

ALTER TABLE `related_disease` ADD CONSTRAINT `FK_disease_TO_related_disease_1` FOREIGN KEY (
	`related_disease_realated_disease_no`
)
REFERENCES `disease` (
	`disease_no`
);

ALTER TABLE `symptom_disease` ADD CONSTRAINT `FK_symptom_TO_symptom_disease_1` FOREIGN KEY (
	`symptom_disease_symptom_no`
)
REFERENCES `symptom` (
	`symptom_no`
);

ALTER TABLE `symptom_disease` ADD CONSTRAINT `FK_disease_TO_symptom_disease_1` FOREIGN KEY (
	`symptom_disease_disease_no`
)
REFERENCES `disease` (
	`disease_no`
);

ALTER TABLE `disease_medical_subject` ADD CONSTRAINT `FK_medical_subject_TO_disease_medical_subject_1` FOREIGN KEY (
	`disease_medical_subject_medical_subject_no`
)
REFERENCES `medical_subject` (
	`medical_subject_no`
);

ALTER TABLE `disease_medical_subject` ADD CONSTRAINT `FK_disease_TO_disease_medical_subject_1` FOREIGN KEY (
	`disease_medical_subject_disease_no`
)
REFERENCES `disease` (
	`disease_no`
);

