import { useState } from "react";
import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import { IHospital, ICoord } from "../../interface";
import MedicalMarkerContainer from "./MedicalMarkerContainer";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MedicalMapProps {
  viewCenter: ICoord;
  setViewCenter: (coord: ICoord) => void;
  hospitals: IHospital[];
  handDetailOpen: (hospital: IHospital) => void;
  directionMode: boolean;
  nowCenter: ICoord;
  destCoord: ICoord;
}

const spriteSize = { width: 36, height: 60 };
const spriteMargin = { x: 20, y: 65 };

export default function KakaoMap(props: MedicalMapProps) {
  const {
    nowCenter,
    viewCenter,
    setViewCenter,
    hospitals,
    handDetailOpen,
    directionMode,
  } = props;

  return (
    <>
      <Map
        center={{ lat: viewCenter.lat, lng: viewCenter.lng }}
        style={{ width: "78vw", height: "100vh", left: "7vw" }}
        level={4} // 지도의 확대 레벨
        onDragEnd={(map) =>
          setViewCenter({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          })
        }
      >
        {hospitals.map((hospital, _index) => (
          <MedicalMarkerContainer
            hospital={hospital}
            handDetailOpen={handDetailOpen}
            key={hospital.no}
            directionMode={directionMode}
          />
        ))}
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  );
}
