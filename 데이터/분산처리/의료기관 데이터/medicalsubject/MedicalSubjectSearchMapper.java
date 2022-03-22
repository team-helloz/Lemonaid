package com.helloz.lemonaid.medicalsubject;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;

public class MedicalSubjectSearchMapper extends Mapper<LongWritable, Text, Text, Text> {
    private Text medicalSubject = new Text();
    private Text hospital = new Text();

    public void map(LongWritable key, Text value, Mapper.Context context) throws IOException, InterruptedException {
        String line = value.toString();
        String[] pieces = line.split(",");

        if (pieces.length >= 2) {
            medicalSubject.set(pieces[4]);
            hospital.set(pieces[2]);

            context.write(medicalSubject, hospital);
        }
    }
}
