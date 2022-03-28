import { Map, ZoomControl } from "react-kakao-maps-sdk";
import MedicalMarkerContainer from "./MedicalMarkerContainer";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Coord {
  lat: number;
  lng: number;
}

interface Hospital {
  id: number;
  type: string;
  name: string;
  call: string;
  address: string;
  lat: number;
  lng: number;
}

interface MedicalMapProps {
  nowCenter: Coord;
  hospitals: Hospital[];
  handDetailOpen: (hospital: Hospital) => void;
}

export default function KakaoMap(props: MedicalMapProps) {
  const { nowCenter, hospitals, handDetailOpen } = props;

  return (
    <>
      <Map
        center={{ lat: nowCenter.lat, lng: nowCenter.lng }}
        style={{ width: "78vw", height: "100vh", left: "7vw" }}
        level={4} // 지도의 확대 레벨
      >
        {hospitals.map((hospital, _index) => (
          <MedicalMarkerContainer
            hospital={hospital}
            handDetailOpen={handDetailOpen}
            key={hospital.id}
          />
        ))}
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  );
}
