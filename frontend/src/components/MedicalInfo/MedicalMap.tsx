import React, { useEffect, useState, useRef } from "react";
import "./MedicalMap.css";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Coord {
  x: number;
  y: number;
}

interface MedicalMapProps {
  nowCenter: Coord;
}

const content =
  '<div class="wrap">' +
  '    <div class="info">' +
  '        <div class="title">' +
  "            카카오 스페이스닷원" +
  '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
  "        </div>" +
  '        <div class="body">' +
  '            <div class="img">' +
  '                <img src="http://www.samsunghospital.com/_newmhome/ui/home/static/img/introduce/panorama.jpg" width="73" height="70">' +
  "           </div>" +
  '            <div class="desc">' +
  '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
  '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
  '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
  "            </div>" +
  "        </div>" +
  "    </div>" +
  "</div>";

export default function KakaoMap(props: MedicalMapProps) {
  const { nowCenter } = props;
  const [kakaoMap, setKakaoMap] = useState<any>(null);
  //const [markers, setMarkers] = useState([]);

  const container = useRef<HTMLDivElement>(null);

  // 현재 좌표값 변경되면 지도 다시 그리기
  useEffect(() => {
    mapContainer();
  }, [nowCenter]);

  // 지도 그리기
  const mapContainer = () => {
    let options = {
      center: new window.kakao.maps.LatLng(nowCenter.y, nowCenter.x),
      level: 4,
    };
    const map = new window.kakao.maps.Map(container.current, options);
    // setKakaoMap(map);

    // 현재 위치 마커 표시
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: options.center,
    });

    // 줌 컨트롤러
    var control = new window.kakao.maps.ZoomControl();
    map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);

    let overlay = new window.kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    window.kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);
    });
  };

  return <div id="container" ref={container} />;
}
