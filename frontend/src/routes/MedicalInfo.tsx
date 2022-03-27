import { useHistory } from "react-router-dom";
import "./MedicalInfo.css";
import MedicalList, { Hospital } from "../components/MedicalInfo/MedicalList";
import MedicalMap from "../components/MedicalInfo/MedicalMap";
import MedicalDetail from "../components/MedicalInfo/MedicalDetail";
import { useEffect } from "react";
import * as React from "react";
import axios from "axios";

// 삼성 구미 2사업장
const nowCoor = {
  lat: 36.1072226,
  lng: 128.412915,
};

export default function MedicalInfo() {
  const history = useHistory();
  interface hospital {
    id: number;
    type: string;
    name: string;
    call: string;
    address: string;
    lat: number;
    lng: number;
  }

  const hospitalList: hospital[] = [
    {
      id: 1,
      type: "병원",
      name: "서울병원",
      call: "02-154-8756",
      address: "서울 동작구 XXX",
      lat: 35.83757,
      lng: 128.54285,
    },
    {
      id: 2,
      type: "약국",
      name: "대구약국",
      call: "02-154-8755",
      address: "서울 동작구 XXX",
      lat: 35.8186,
      lng: 128.52456,
    },
    {
      id: 3,
      type: "한의원",
      name: "구미한의원",
      call: "02-154-8456",
      address: "서울 동작구 XXX",
      lat: 35.82756,
      lng: 128.54792,
    },
    {
      id: 4,
      type: "병원",
      name: "부산병원",
      call: "02-154-8786",
      address: "서울 동작구 XXX",
      lat: 35.84732,
      lng: 128.57092,
    },
    {
      id: 5,
      type: "약국",
      name: "광주병원",
      call: "02-154-8776",
      address: "서울 동작구 XXX",
      lat: 35.8412,
      lng: 128.53419,
    },
    {
      id: 6,
      type: "병원",
      name: "강릉병원",
      call: "02-154-8736",
      address: "서울 동작구 XXX",
      lat: 35.83187,
      lng: 128.50484,
    },
    {
      id: 7,
      type: "한의원",
      name: "남해한의원",
      call: "02-154-5756",
      address: "서울 동작구 XXX",
      lat: 35.81517,
      lng: 128.54569,
    },
  ];

  const hospitalData: hospital = {
    id: 1,
    type: "병원",
    name: "서울병원",
    call: "02-154-8756",
    address: "서울 동작구 XXX",
    lat: 35.83757,
    lng: 128.54285,
  };
  function routeHome() {
    history.push("/");
  }
  // 현재 좌표
  const [nowCenter, setNowCenter] = React.useState(nowCoor);
  // 현재 도로명 주소
  const [roadAdd, setRoadAdd] = React.useState("");
  const [openDetailDlg, setOpenDetailDlg] = React.useState(false);
  const [hospitalObj, setHospitalObj] = React.useState<Hospital>(hospitalData);

  const api = "8bfd93b5e35e8d6039d2b40188560f8b";
  // 유저 위치 자동 추적
  const userGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
          lng = position.coords.longitude;
        setNowCenter({ lat: lat, lng: lng });
        xyToAdd(lng, lat);
      });
    } else {
    }
  };
  // 좌표로 주소 찾기
  const xyToAdd = (lon: any, lat: any) => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${api}`,
          },
        }
      )
      .then((res) => {
        // 좌표는 정확해서 조건문 생략
        // 주소 찾으면 현재 주소 바꾸기
        console.log(res.data.documents[0].road_address.address_name);
        setRoadAdd(res.data.documents[0].road_address.address_name);
      })
      .catch((e) => console.log(e));
  };
  // 주소로 좌표 찾기
  const addToXy = (address: any) => {
    console.log(address);
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          headers: {
            Authorization: `KakaoAK ${api}`,
          },
        }
      )
      .then((res) => {
        const lng = res.data.documents[0].road_address.x;
        const lat = res.data.documents[0].road_address.y;
        // 결과값이 있으면
        if (lng !== null && lng !== undefined) {
          // 현재 위치 옮기기
          setNowCenter({ lng, lat });
          // 현재 주소 바꾸기
          setRoadAdd(res.data.documents[0].road_address.address_name);
        }
      })
      .catch((e) => console.log(e));
  };

  // 시작 시 유저 위치 찾기
  useEffect(() => {
    userGeo();
  }, []);

  // 병원 상세보기창 닫기
  const handDetailClose = () => {
    setOpenDetailDlg(false);
  };

  // 병원 상세보기창 열기
  const handDetailOpen = (hospital: Hospital) => {
    setHospitalObj(hospital);
    setOpenDetailDlg(true);
  };

  // 주소 검색 시 좌표변환 실행
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addToXy(e.target.value);
    }
  };
  return (
    <>
      <div className="medi-left">
        <div className="medi-search"></div>
        <p>{roadAdd}</p>
        <div className="medi-home" onClick={routeHome}>
          Home
        </div>
      </div>
      <div className="medi-center1">
        <input type="text" placeholder={roadAdd} onKeyPress={handleKeyPress} />
      </div>
      <div className="medi-center2"></div>
      <div className="medi-right">
        <MedicalList
          hospitals={hospitalList}
          setNowCenter={setNowCenter}
          handDetailOpen={handDetailOpen}
        />
      </div>
      <MedicalMap
        nowCenter={nowCenter}
        hospitals={hospitalList}
        handDetailOpen={handDetailOpen}
      ></MedicalMap>
      <MedicalDetail
        open={openDetailDlg}
        onClose={handDetailClose}
        hospitalDetail={hospitalObj}
      />
    </>
  );
}
