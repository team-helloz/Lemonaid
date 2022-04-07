package com.helloz.lemonaid;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import java.io.IOException;

public class MedicalSubjectSearch {
    public static class MedicalSubjectSearchMapper
            extends Mapper<Object, Text, Text, Text> {

        private Text medicalSubject = new Text();
        private Text hospital = new Text();

        public void map(Object key, Text value, Mapper.Context context) throws IOException, InterruptedException {
            String line = value.toString();
            String[] pieces = line.split(",");

            if (pieces.length >= 2) {
                medicalSubject.set(pieces[4]);
                hospital.set(pieces[2]);

                context.write(medicalSubject, hospital);
            }
        }
    }

    public static class MedicalSubjectSearchReducer
            extends Reducer<Text, Text, Text, Text> {

        private Text result = new Text();

        public void reduce(Text key, Iterable<Text> values, Reducer.Context context) throws IOException, InterruptedException {
            for (Text val : values)
                result.set(val);
            context.write(key, result);
        }
    }


    public static void main(String[] args) throws Exception {
        Configuration conf = new Configuration();
        String[] otherArgs = new GenericOptionsParser(conf, args).getRemainingArgs();
        if ( otherArgs.length != 2 ) {
            System.err.println("Usage: <in> <out>");
            System.exit(2);
        }

//        FileSystem hdfs = FileSystem.get(conf);
//        Path output = new Path(otherArgs[2]);
//        if (hdfs.exists(output))
//            hdfs.delete(output, true);

        Job job = new Job(conf,"medical subject search");
        Configuration config = job.getConfiguration();
//        config.set("Matrix1name", otherArgs[0]);
//        config.set("Matrix2name", otherArgs[1]);
//        config.setInt("n",Integer.parseInt(otherArgs[2]));
//        config.setInt("l",Integer.parseInt(otherArgs[3]));
//        config.setInt("m",Integer.parseInt(otherArgs[4]));

        job.setJarByClass(MedicalSubjectSearch.class);
        job.setMapperClass(MedicalSubjectSearchMapper.class);
        job.setReducerClass(MedicalSubjectSearchReducer.class);

//        job.setMapOutputKeyClass(Text.class);
//        job.setMapOutputValueClass(Text.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);

        job.setNumReduceTasks(2);

        FileInputFormat.addInputPath(job, new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job, new Path(otherArgs[1]));
        System.exit(job.waitForCompletion(true) ? 0 : 1 );
    }
}
