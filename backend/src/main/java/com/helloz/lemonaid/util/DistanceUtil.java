package com.helloz.lemonaid.util;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DistanceUtil {
    public static double getDistance(double lat1, double lng1, double lat2, double lng2) {
        double theta = lng1 - lng2;
        double distance = Math.sin(deg2rad(lat1))* Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.cos(deg2rad(theta));
        distance = Math.acos(distance);
        distance = rad2deg(distance);
        distance = distance * 60*1.1515*1609.344;
        return distance;
    }
    private static double deg2rad(double deg){
        return (deg * Math.PI/180.0);
    }
    //radian(라디안)을 10진수로 변환
    private static double rad2deg(double rad){
        return (rad * 180 / Math.PI);
    }
}
