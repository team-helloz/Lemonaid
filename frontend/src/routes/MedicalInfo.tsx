import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import MedicalList from "../components/MedicalInfo/MedicalList";
import MedicalMap from "../components/MedicalInfo/MedicalMap";
import MedicalDetail from "../components/MedicalInfo/MedicalDetail";
import MedicalSubject from "../components/MedicalInfo/MedicalSubject";
import { IHospital } from "../interface";
import axios from "axios";
import "./MedicalInfo.css";

import SymbolHospital from "../assets/medical_png/symbol_hospital.png";
import SymbolPharmacy from "../assets/medical_png/symbol_pharmacy.png";
import SymbolOriental from "../assets/medical_png/symbol_oriental.png";
import SymbolEmergency from "../assets/medical_png/symbol_emergency.png";
import MenuOpen from "../assets/medical_png/menu_open.png";
import MenuClose from "../assets/medical_png/menu_close.png";

// 삼성 구미 2사업장
const nowCoor = {
  lat: 36.1072226,
  lng: 128.412915,
};

export default function MedicalInfo() {
  const history = useHistory();

  function routeHome() {
    history.push("/");
  }
  const [nowCenter, setNowCenter] = useState(nowCoor);
  const [roadAdd, setRoadAdd] = useState("");
  const [openDetailDlg, setOpenDetailDlg] = useState(false);
  const [openSubject, setOpenSubject] = useState(false);
  const [hospitalObj, setHospitalObj] = useState<IHospital>();
  const [viewHospital, setViewHospital] = useState(false);
  const [viewPharmacy, setViewPharmacy] = useState(false);
  const [subjects, setSubjects] = useState<number[]>([]);
  const [hospitalList, setHospitalList] = useState<IHospital[]>([]);

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
    const api = "8bfd93b5e35e8d6039d2b40188560f8b";
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
        if (res.data.documents[0].road_address !== null)
          setRoadAdd(res.data.documents[0].road_address.address_name);
      })
      .catch((e) => console.log(e));
  };
  // 주소로 좌표 찾기
  const addToXy = (address: any) => {
    const api = "8bfd93b5e35e8d6039d2b40188560f8b";
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

  const getMedicalList = () => {
    axios
      .get("/medical", {
        params: {
          search_type: "all",
          lat: nowCenter.lat,
          lng: nowCenter.lng,
          radius: 5000,
          // subjects: subjects.join(","),
        },
      })
      .then((res) => {
        const { medical_list } = res.data;
        setHospitalList(medical_list);

        console.log(medical_list);
      })
      .catch((e) => console.log(e));
  };

  // 시작 시 유저 위치 찾기
  useEffect(() => {
    userGeo();
  }, []);

  useEffect(() => {
    // console.log(subjects);
  }, [subjects]);

  useEffect(() => {
    getMedicalList();
  }, [viewHospital]);

  // 병원 상세보기창 닫기
  const handDetailClose = () => {
    setOpenDetailDlg(false);
  };

  // 병원 상세보기창 열기
  const handDetailOpen = (hospital: IHospital) => {
    setHospitalObj(hospital);
    setOpenDetailDlg(true);
  };

  // 주소 검색 시 좌표변환 실행
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addToXy(e.target.value);
    }
  };

  const UpdateSubjects = (subjectsData: number[]) => {
    setSubjects(subjectsData);
  };

  return (
    <>
      <div className="medi-left">
        <div className="medi-search"></div>
        {/* <p>{roadAdd}</p> */}
        <div className="medi-home" onClick={routeHome}>
          Home
        </div>
      </div>
      {/* <div className="medi-center1">
        <input type="text" placeholder={roadAdd} onKeyPress={handleKeyPress} />
      </div> */}
      <div className="medi-bottom">
        <div className="medi-bottom-menu-first-item">전체 조회</div>
        <div
          className="medi-bottom-menu-item"
          onClick={() => setViewHospital(!viewHospital)}
        >
          <img src={SymbolHospital} alt="" width={"17px"} />
          병원 조회
        </div>
        <div className="medi-bottom-menu-item">
          <img src={SymbolPharmacy} alt="" width={"17px"} />
          약국 조회
        </div>
        <div className="medi-bottom-menu-item">
          <img src={SymbolOriental} alt="" width={"17px"} />
          한의원 조회
        </div>
        <div className="medi-bottom-menu-item">
          <img src={SymbolEmergency} alt="" width={"17px"} />
          응급실 조회
        </div>
        <div
          className="medi-bottom-menu-last-item"
          onClick={() => setOpenSubject(!openSubject)}
        >
          진료 과목
          <img src={openSubject ? MenuClose : MenuOpen} alt="" width={"17px"} />
        </div>
      </div>
      <div className="medi-right">
        <MedicalList
          hospitals={hospitalList}
          setNowCenter={setNowCenter}
          handDetailOpen={handDetailOpen}
        />
      </div>
      <MedicalMap
        nowCenter={nowCenter}
        setNowCenter={setNowCenter}
        hospitals={hospitalList}
        handDetailOpen={handDetailOpen}
      ></MedicalMap>
      <MedicalDetail
        open={openDetailDlg}
        onClose={handDetailClose}
        hospitalDetail={hospitalObj}
      />
      <MedicalSubject
        openSubject={openSubject}
        UpdateSubjects={UpdateSubjects}
      ></MedicalSubject>
    </>
  );
}
