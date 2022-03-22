package com.helloz.lemonaid.medicalsubject;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import java.io.IOException;

public class MedicalSubjectSearchReducer extends Reducer<Text, Text, Text, Text> {
    private Text result = new Text();

    public void reduce(Text key, Iterable<Text> values, Reducer.Context context) throws IOException, InterruptedException {
        for (Text val : values)
            result.set(val);
        context.write(key, result);
    }
}
