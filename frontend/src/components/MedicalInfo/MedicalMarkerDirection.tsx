import { MapMarker, useMap } from "react-kakao-maps-sdk";
import { IHospital } from "../../interface";

import MarkerImgHospital from "../../assets/medical_png/marker_hospital.png";
import MarkerImgMedicine from "../../assets/medical_png/marker_medicine.png";
import "./MedicalMarkerContainer.css";

interface MarkerProps {
  hospital: IHospital;
  handDetailOpen: (hospital: IHospital) => void;
  directionMode: boolean;
}

// const imageSize = { width: 100, height: 137 };
const spriteSize = { width: 36, height: 60 };
const spriteMargin = { x: 20, y: 65 };

export default function EventMarkerContainer(props: MarkerProps) {
  const { hospital, handDetailOpen, directionMode } = props;

  //   const [start, setStart] = useState(startImage);
  //   const [end, setEnd] = useState(endImage);

  const map = useMap();

  return (
    <>
      {/* <MapMarker // 마커를 생성하고 지도에 표시합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: nowCenter.lat,
            lng: nowCenter.lng,
          }}
          image={{
            src: MarkerImgHospital,
            size: MarkerImgHospital,
            options: {
              spriteSize: spriteSize,
              spriteOrigin: spriteMargin,
            },
          }}
          draggable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onDragStart={() => setStart(startDragImage)} // 마커가 이동하면 이미지를 변경합니다
          onDragEnd={() => setStart(startImage)} // 마커가 이동하면 이미지를 변경합니다
        />
        <MapMarker // 마커를 생성하고 지도에 표시합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.572667,
          }}
          image={end}
          draggable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onDragStart={() => setEnd(endDragImage)} // 마커가 이동하면 이미지를 변경합니다
          onDragEnd={() => setEnd(endImage)} // 마커가 이동하면 이미지를 변경합니다
        /> */}
    </>
  );
}
