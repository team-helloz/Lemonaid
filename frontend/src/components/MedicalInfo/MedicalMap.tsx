import { Map, ZoomControl } from "react-kakao-maps-sdk";
import MedicalMarkerContainer from "./MedicalMarkerContainer";
import { IHospital } from "../../interface";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Coord {
  lat: number;
  lng: number;
}

interface MedicalMapProps {
  nowCenter: Coord;
  setNowCenter: (coord: Coord) => void;
  hospitals: IHospital[];
  handDetailOpen: (hospital: IHospital) => void;
}

export default function KakaoMap(props: MedicalMapProps) {
  const { nowCenter, setNowCenter, hospitals, handDetailOpen } = props;

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
            key={hospital.no}
          />
        ))}
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </>
  );
}
