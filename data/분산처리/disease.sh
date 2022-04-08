#!/bin/bash

for var in `seq 1 1 1273`
do
    hdfs dfs -rm -r disease_nouns_output_$var
    hdfs dfs -rm disease_nouns_$var
    hdfs dfs -put ./disease_data/disease_nouns_$var.csv disease_nouns_$var
    hadoop jar ssafy.jar wordcount disease_nouns_$var disease_nouns_output_$var
    hdfs dfs -getmerge disease_nouns_output_$var disease_output/$var
done