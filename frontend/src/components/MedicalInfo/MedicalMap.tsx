import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MedicalMap() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(35.850701, 128.570667), // 중심 좌표
      level: 4, // 확대 정도
    };

    let map = new window.kakao.maps.Map(container, options);
    var position = map.getCenter();
    var control = new window.kakao.maps.ZoomControl();
    map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);
    console.log(position);
  }, []);
  return <div id="map"></div>;
}
