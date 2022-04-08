#!/bin/bash

hdfs dfs -rm medical_data/hospitol.csv
hdfs dfs -put hospital_count_data/hospitol.csv medical_data
hadoop jar myjar/lemonaid.jar medicalsidogugun medical_data/hospitol.csv sidogugun_output
sqoop export -jt local -libjars /tmp/sqoop-j6d108/compile/ac29bfdd11b51d0e1c6336e5af555f69/hospital_count_sido.jar \
--connect jdbc:mysql://j6d108.p.ssafy.io/lemonaiddb \
--username root \
--table hospital_count_sido \
--export-dir sidogugun_output/sido-r-00000 \
--update-key sido \
--update-mode allowinsert
sqoop export -jt local -libjars /tmp/sqoop-j6d108/compile/03bb0726291fcca2fd5f7ffa198a3ba2/hospital_count_gugun.jar \
--connect jdbc:mysql://j6d108.p.ssafy.io/lemonaiddb \
--username root \
--table hospital_count_gugun \
--export-dir sidogugun_output/gugun-r-00000 \
--update-key gugun \
--update-mode allowinsert
