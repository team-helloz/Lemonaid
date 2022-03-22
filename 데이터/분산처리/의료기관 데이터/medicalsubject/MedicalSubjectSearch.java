package com.helloz.lemonaid.medicalsubject;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;

public class MedicalSubjectSearch {
    public static void main(String[] args) throws Exception{
        Configuration conf = new Configuration();
        if (args.length != 2){
            System.err.println("Usage: WordCount <input> <output>");
            System.exit(2);
        }

        // Deprecate Warning hadoop-mapreduce-client-core 버전3이상은 안씀 (무시해도 됨)
        Job job = new Job(conf, "WordClass");

        job.setJarByClass(MedicalSubjectSearch.class);
        job.setMapperClass(MedicalSubjectSearchMapper.class);
        job.setReducerClass(MedicalSubjectSearchReducer.class);

        job.setInputFormatClass(TextInputFormat.class);
        job.setOutputFormatClass(TextOutputFormat.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);

        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        job.waitForCompletion(true);
    }
}
