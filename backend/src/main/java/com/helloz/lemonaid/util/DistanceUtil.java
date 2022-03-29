package com.helloz.lemonaid.util;

public class DistanceUtil {
    public static double getDistance(double from_x, double from_y, double to_x, double to_y) {
        return (6371 * Math.acos(Math.cos(Math.toRadians(from_x) * Math.cos(Math.toRadians(to_y)) * Math.cos(Math.toRadians(to_x))
                - Math.toRadians(from_x)) + Math.sin(Math.toRadians(from_y)) * Math.sin(Math.toRadians(to_y))));
    }
}
