import { Map, MapMarker, useMap, ZoomControl } from "react-kakao-maps-sdk";
import { IHospital, ICoord } from "../../interface";
import MedicalMarkerContainer from "./MedicalMarkerContainer";
import CustomCurpos from "../../assets/medical_png/map_curpos.png";
import "./MedicalMap.css";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MedicalMapProps {
  setViewCenter: (coord: ICoord) => void;
  hospitals: IHospital[];
  handDetailOpen: (hospital: IHospital) => void;
  directionMode: boolean;
  nowCenter: ICoord;
  userGeo: () => void;
  isEmergency: boolean;
  selectHospital: string;
  UpdateSelectHospital: (
    selectedHospital: string,
    selectedLat: number,
    selectedLng: number
  ) => void;
  setMapZoomLevel: (mapZoomLevel: number) => void;
  setKakaoMap: (map: kakao.maps.Map | null) => void;
}

export default function KakaoMap(props: MedicalMapProps) {
  const {
    setViewCenter,
    hospitals,
    handDetailOpen,
    directionMode,
    nowCenter,
    userGeo,
    isEmergency,
    selectHospital,
    UpdateSelectHospital,
    setMapZoomLevel,
    setKakaoMap,
  } = props;

  return (
    <>
      <Map
        center={{ lat: nowCenter.lat, lng: nowCenter.lng }}
        style={{ width: "100vw", height: "100vh" }}
        level={4} // 지도의 확대 레벨
        onCenterChanged={(map) =>
          setViewCenter({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          })
        }
        onZoomChanged={(map) => setMapZoomLevel(map.getLevel())}
        onCreate={(map) => setKakaoMap(map)}
      >
        <MapMarker
          position={{ lat: nowCenter.lat, lng: nowCenter.lng }} // 마커를 표시할 위치
          image={{
            src: CustomCurpos,
            size: CustomCurpos,
            options: {
              spriteSize: { width: 36, height: 36 },
              spriteOrigin: { x: 20, y: 65 },
            },
          }}
        />
        {hospitals &&
          hospitals.map((hospital, _index) => (
            <MedicalMarkerContainer
              hospital={hospital}
              handDetailOpen={handDetailOpen}
              key={hospital.no}
              directionMode={directionMode}
              isEmergency={isEmergency}
              selectHospital={selectHospital}
              UpdateSelectHospital={UpdateSelectHospital}
            />
          ))}
        {/* <ZoomControl position={kakao.maps.ControlPosition.TOP} /> */}
      </Map>
      {/* 지도 현재위치 컨트롤 div 입니다 */}
      {/* <div className="custom-curposcontrol" onClick={userGeo}>
        <span>
          <img src={CustomCurpos} alt="현재위치" />
        </span>
      </div> */}
    </>
  );
}
