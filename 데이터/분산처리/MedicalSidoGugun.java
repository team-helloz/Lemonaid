package com.helloz.lemonaid;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.MultipleOutputs;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class MedicalSidoGugun {

    public static class MedicalSidoGugunMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

        private Text Sido = new Text();
        private Text Gugun = new Text();
        private IntWritable one = new IntWritable(1);

        public void map(LongWritable key, Text value, Mapper.Context context) throws IOException, InterruptedException {

            if (key.get() > 0) {
                String[] line = value.toString().split(",");
                String sido = line[6];
                String gugun = line[8];
                try {
                    Integer.parseInt(sido); // 병원명에 ,가 들어간 것을 걸러내기 위해 추가
                    sido = line[7];
                    gugun = line[9];
                } catch (Exception e) {

                } finally {
                    Sido.set("sido," + sido);
                    Gugun.set("gugun," + gugun);

                    context.write(Sido, one);
                    context.write(Gugun, one);
                }
            }
        }
    }

    public static class MedicalSidoGugunReducer extends Reducer<Text, IntWritable, Text, IntWritable> {

        private Text result = new Text();
        private IntWritable cnt = new IntWritable(0);
        private MultipleOutputs<Text, IntWritable> multiOut;

        @Override
        protected void setup(Reducer<Text, IntWritable, Text, IntWritable>.Context context) throws IOException, InterruptedException {
            multiOut = new MultipleOutputs<>(context);
        }

        @Override
        protected void cleanup(Reducer<Text, IntWritable, Text, IntWritable>.Context context) throws IOException, InterruptedException {
            multiOut.close();
        }

        @Override
        protected void reduce(Text key, Iterable<IntWritable> values, Reducer<Text, IntWritable, Text, IntWritable>.Context context) throws IOException, InterruptedException {
            String[] keyArr = key.toString().split(",");
            if (keyArr.length != 2) {
                return;
            }
//            result.set(keyArr[1]);

            int sum = 0;
            for (IntWritable val : values) {
                sum += val.get();
            }
//            cnt.set(sum);
            result.set(keyArr[1] + "," + sum);

            if (keyArr[0].equals("sido")) {
                multiOut.write("sido", result, null);
            }
            else if (keyArr[0].equals("gugun")) {
                multiOut.write("gugun", result, null);
            }
        }
    }


    public static void main(String[] args) throws Exception {
        Configuration conf = new Configuration();
        String[] otherArgs = new GenericOptionsParser(conf, args).getRemainingArgs();
        if ( otherArgs.length != 2 ) {
            System.err.println("Usage: <in> <out>");
            System.exit(2);
        }

        FileSystem hdfs = FileSystem.get(conf);
        Path output = new Path(otherArgs[1]);
        if (hdfs.exists(output))
            hdfs.delete(output, true);

        Job job = new Job(conf,"medical sidogugun");

        job.setJarByClass(MedicalSidoGugun.class);
        job.setMapperClass(MedicalSidoGugunMapper.class);
        job.setReducerClass(MedicalSidoGugunReducer.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        FileInputFormat.addInputPath(job, new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job, new Path(otherArgs[1]));

        MultipleOutputs.addNamedOutput(job, "sido", TextOutputFormat.class, Text.class, IntWritable.class);
        MultipleOutputs.addNamedOutput(job, "gugun", TextOutputFormat.class, Text.class, IntWritable.class);
        job.waitForCompletion(true);

        System.exit(job.waitForCompletion(true) ? 0 : 1 );
    }
}
