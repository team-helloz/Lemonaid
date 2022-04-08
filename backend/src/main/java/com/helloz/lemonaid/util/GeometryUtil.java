package com.helloz.lemonaid.util;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class GeometryUtil {
    public static double getDistance(double lat1, double lng1, double lat2, double lng2) {
        double theta = lng1 - lng2;
        double distance = Math.sin(toRadian(lat1)) * Math.sin(toRadian(lat2)) + Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.cos(toRadian(theta));
        distance = Math.acos(distance);
        distance = toDegree(distance);
        distance = distance * 60 * 1.1515 * 1609.344;
        return distance;
    }

    public static Location getLocation(Double baseLatitude, Double baseLongitude, Double distance, Double bearing) {
        Double radianLatitude = toRadian(baseLatitude);
        Double radianLongitude = toRadian(baseLongitude);
        Double radianAngle = toRadian(bearing);
        Double distanceRadius = distance / 6371.01;

        Double latitude = Math.asin(sin(radianLatitude) * cos(distanceRadius) +
                cos(radianLatitude) * sin(distanceRadius) * cos(radianAngle));
        Double longitude = radianLongitude + Math.atan2(sin(radianAngle) * sin(distanceRadius) *
                cos(radianLatitude), cos(distanceRadius) - sin(radianLatitude) * sin(latitude));

        longitude = normalizeLongitude(longitude);
        return new Location(toDegree(latitude), toDegree(longitude));
    }

    private static Double toRadian(Double coordinate) {
        return coordinate * Math.PI / 180.0;
    }

    private static Double toDegree(Double coordinate) {
        return coordinate * 180.0 / Math.PI;
    }

    private static Double sin(Double coordinate) {
        return Math.sin(coordinate);
    }

    private static Double cos(Double coordinate) {
        return Math.cos(coordinate);
    }

    private static Double normalizeLongitude(Double longitude) {
        return (longitude + 540) % 360 - 180;
    }
}
