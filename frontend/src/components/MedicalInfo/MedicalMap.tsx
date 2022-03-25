import { useEffect } from "react";
import * as React from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
const nowCoor = {
  y: 35.850701,
  x: 128.570667,
};
export default function MedicalMap() {
  const [nowCenter, setNowCenter] = React.useState(nowCoor);

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        setNowCenter({ y: lat, x: lon });
        console.log(nowCenter);
      });
    } else {
    }
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(nowCenter.y, nowCenter.x), // 중심 좌표

      level: 4, // 확대 정도
    };
    console.log(options);
    let map = new window.kakao.maps.Map(container, options);

    var control = new window.kakao.maps.ZoomControl();
    map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);
  }, []);

  return <div id="map"></div>;
}
