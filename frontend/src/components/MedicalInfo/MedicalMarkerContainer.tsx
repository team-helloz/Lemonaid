import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";

import MarkerImgHospital from "../../assets/medical_png/marker_hospital.png";
import MarkerImgMedicine from "../../assets/medical_png/marker_medicine.png";
import "./MedicalMarkerContainer.css";

interface Hospital {
  id: number;
  type: string;
  name: string;
  call: string;
  address: string;
  lat: number;
  lng: number;
}

interface MarkerProps {
  hospital: Hospital;
  handDetailOpen: (hospital: Hospital) => void;
}

// const imageSize = { width: 100, height: 137 };
const spriteSize = { width: 36, height: 60 };
const spriteMargin = { x: 20, y: 65 };

export default function EventMarkerContainer(props: MarkerProps) {
  const { hospital, handDetailOpen } = props;

  const map = useMap();
  // const [isVisible, setIsVisible] = useState(false);
  // const content = <div style={{ color: "#000" }}>{hospital.name}</div>;

  const onClickMarker = (hospital: Hospital) => {
    //console.log(hospital.name);
    handDetailOpen(hospital);
    // setNowCenter({ lat: hospital.lat, lng: hospital.lng });
    // handDetailOpen(hospital);
  };

  return (
    <>
      {hospital.type === "병원" && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            //console.log(marker);
            map.panTo(marker.getPosition());
          }}
          image={{
            src: MarkerImgHospital,
            size: MarkerImgHospital,
            options: {
              spriteSize: spriteSize,
              spriteOrigin: spriteMargin,
            },
          }}
        />
      )}
      {hospital.type === "약국" && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            //console.log(marker);
            map.panTo(marker.getPosition());
          }}
          image={{
            src: MarkerImgMedicine,
            size: MarkerImgMedicine,
            options: {
              spriteSize: spriteSize,
              spriteOrigin: spriteMargin,
            },
          }}
        />
      )}
      <CustomOverlayMap
        position={{ lat: hospital.lat, lng: hospital.lng }}
        yAnchor={1}
      >
        <div className="customoverlay" onClick={() => onClickMarker(hospital)}>
          <a
            //href="https://map.kakao.com/link/map/11394059"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">{hospital.name}</span>
          </a>
        </div>
      </CustomOverlayMap>
    </>
  );
}