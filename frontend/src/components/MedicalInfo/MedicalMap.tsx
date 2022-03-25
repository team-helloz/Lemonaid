import { useEffect } from "react";
import * as React from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
const nowCoor = {
  y: 36.1072226,
  x: 128.412915,
};
export default function MedicalMap() {
  const [nowCenter, setNowCenter] = React.useState(nowCoor);

  const userGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
          lon = position.coords.longitude;
        setNowCenter({ y: lat, x: lon });
      });
    } else {
    }
    console.log(nowCenter);
  };

  const mapContainer = () => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(nowCenter.y, nowCenter.x),
      level: 4,
    };
    console.log(options);
    let map = new window.kakao.maps.Map(container, options);

    var control = new window.kakao.maps.ZoomControl();
    map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);
  };
  useEffect(() => {
    userGeo();
    mapContainer();
  }, []);

  useEffect(() => {
    mapContainer();
  }, [nowCenter]);

  return <div id="map"></div>;
}
