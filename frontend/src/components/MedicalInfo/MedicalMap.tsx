import { Map, ZoomControl } from "react-kakao-maps-sdk";
import { IHospital, ICoord } from "../../interface";
import MedicalMarkerContainer from "./MedicalMarkerContainer";
import CustomCurpos from "../../assets/medical_png/map_curpos.png";
import "./MedicalMap.css";

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
  userGeo: () => void;
  isEmergency: boolean;
  selectHospital: string;
  UpdateSelectHospital: (selectHospital: string) => void;
}

export default function KakaoMap(props: MedicalMapProps) {
  const {
    viewCenter,
    setViewCenter,
    hospitals,
    handDetailOpen,
    directionMode,
    nowCenter,
    destCoord,
    userGeo,
    isEmergency,
    selectHospital,
    UpdateSelectHospital,
  } = props;

  return (
    <>
      <Map
        center={{ lat: viewCenter.lat, lng: viewCenter.lng }}
        style={{ width: "78vw", height: "100vh", left: "7vw" }}
        level={3} // 지도의 확대 레벨
        onDragEnd={(map) =>
          setViewCenter({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          })
        }
      >
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
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
      {/* 지도 현재위치 컨트롤 div 입니다 */}
      <div className="custom-curposcontrol" onClick={userGeo}>
        <span>
          <img src={CustomCurpos} alt="현재위치" />
        </span>
      </div>
    </>
  );
}
