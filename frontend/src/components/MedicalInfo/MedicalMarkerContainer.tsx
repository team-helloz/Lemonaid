import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";
import { IHospital } from "../../interface";

import MarkerImgHospital from "../../assets/medical_png/marker_hospital.png";
import MarkerImgMedicine from "../../assets/medical_png/marker_medicine.png";
import MarkerImgHospitalSelect from "../../assets/medical_png/marker_hospital_select.png";
import MarkerImgMedicineSelect from "../../assets/medical_png/marker_medicine_select.png";
import "./MedicalMarkerContainer.css";

interface MarkerProps {
  hospital: IHospital;
  handDetailOpen: (hospital: IHospital) => void;
  directionMode: boolean;
  isEmergency: boolean;
  selectHospital: string;
  UpdateSelectHospital: (selectHospital: string) => void;
}

// const imageSize = { width: 100, height: 137 };
const spriteSize = { width: 36, height: 60 };
const spriteMargin = { x: 20, y: 65 };

export default function EventMarkerContainer(props: MarkerProps) {
  const {
    hospital,
    handDetailOpen,
    directionMode,
    isEmergency,
    selectHospital,
    UpdateSelectHospital,
  } = props;
  const hoverEvent = (hospital: IHospital) => {};
  const map = useMap();
  // const [isVisible, setIsVisible] = useState(false);
  // const content = <div style={{ color: "#000" }}>{hospital.name}</div>;

  const onClickMarker = (hospital: IHospital) => {
    //console.log(hospital.name);
    handDetailOpen(hospital);
    // setNowCenter({ lat: hospital.lat, lng: hospital.lng });
    // handDetailOpen(hospital);
  };

  return (
    <>
      {hospital.type === "hospital" && hospital.name !== selectHospital && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            map.panTo(marker.getPosition());
          }}
          onMouseOver={() => UpdateSelectHospital(hospital.name)}
          onMouseOut={() => UpdateSelectHospital("")}
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
      {hospital.type === "hospital" && hospital.name === selectHospital && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            //console.log(marker);
            map.panTo(marker.getPosition());
          }}
          onMouseOver={() => UpdateSelectHospital(hospital.name)}
          onMouseOut={() => UpdateSelectHospital("")}
          image={{
            src: MarkerImgHospitalSelect,
            size: MarkerImgHospitalSelect,
            options: {
              spriteSize: spriteSize,
              spriteOrigin: spriteMargin,
            },
          }}
        />
      )}
      {hospital.type === "pharmacy" && hospital.name !== selectHospital && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            map.panTo(marker.getPosition());
          }}
          onMouseOver={() => UpdateSelectHospital(hospital.name)}
          onMouseOut={() => UpdateSelectHospital("")}
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
      {hospital.type === "pharmacy" && hospital.name === selectHospital && (
        <MapMarker
          position={{ lat: hospital.lat, lng: hospital.lng }} // 마커를 표시할 위치
          onClick={(marker) => {
            map.panTo(marker.getPosition());
          }}
          onMouseOver={() => UpdateSelectHospital(hospital.name)}
          onMouseOut={() => UpdateSelectHospital("")}
          image={{
            src: MarkerImgMedicineSelect,
            size: MarkerImgMedicineSelect,
            options: {
              spriteSize: spriteSize,
              spriteOrigin: spriteMargin,
            },
          }}
        />
      )}
      {/* {directionMode === false && ( */}
      <CustomOverlayMap
        position={{ lat: hospital.lat, lng: hospital.lng }}
        yAnchor={1}
      >
        <div
          className="customoverlay"
          onClick={() => onClickMarker(hospital)}
          onMouseEnter={() => UpdateSelectHospital(hospital.name)}
          onMouseLeave={() => UpdateSelectHospital("")}
        >
          <a
            //href="https://map.kakao.com/link/map/11394059"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">{hospital.name}</span>
          </a>
        </div>
      </CustomOverlayMap>
      {/* )} */}
    </>
  );
}
