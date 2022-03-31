import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MedicalList from "../components/MedicalInfo/MedicalList";
import MedicalMap from "../components/MedicalInfo/MedicalMap";
import MedicalDetail from "../components/MedicalInfo/MedicalDetail";
import MedicalSubject from "../components/MedicalInfo/MedicalSubject";
import { IHospital, ICoord } from "../interface";
import axios from "axios";
import "./MedicalInfo.css";

import RefreshIcon from "../assets/refresh-icon.png";
import SymbolHospital from "../assets/medical_png/symbol_hospital.png";
import SymbolPharmacy from "../assets/medical_png/symbol_pharmacy.png";
import SymbolEmergency from "../assets/medical_png/symbol_emergency.png";
import MenuOpen from "../assets/medical_png/menu_open.png";
import MenuClose from "../assets/medical_png/menu_close.png";

export default function MedicalInfo() {
  const history = useHistory();

  function routeHome() {
    history.push("/");
  }
  const [nowCenter, setNowCenter] = useState<ICoord>({
    lat: 36.1072226,
    lng: 128.412915,
  });
  const [viewCenter, setViewCenter] = useState<ICoord>({
    lat: 36.1072226,
    lng: 128.412915,
  });
  const [destCoord, setDestCoord] = useState<ICoord>({
    lat: 36.1072226,
    lng: 128.412915,
  });
  const [roadAdd, setRoadAdd] = useState("");
  const [openDetailDlg, setOpenDetailDlg] = useState(false);
  const [openSubject, setOpenSubject] = useState(false);
  const [hospitalObj, setHospitalObj] = useState<IHospital>();
  const [viewHospital, setViewHospital] = useState(true);
  const [viewPharmacy, setViewPharmacy] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  //const [subjects, setSubjects] = useState<number[]>([]);
  const [hospitalList, setHospitalList] = useState<IHospital[]>([]);
  const [directionMode, setDirectionMode] = useState(false);

  const [subjectId, setSubjectId] = useState(0);
  const [subjectName, setSubjectName] = useState("전체");

  const isLoading = useRef(false);

  // 유저 위치 자동 추적
  const userGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
          lng = position.coords.longitude;
        setNowCenter({ lat: lat, lng: lng });
        setViewCenter({ lat: lat, lng: lng });
      });
    }
  };

  // 좌표로 주소 찾기
  const xyToAdd = (lat: number, lng: number) => {
    const api = "8bfd93b5e35e8d6039d2b40188560f8b";
    let addr = "";
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${api}`,
          },
        }
      )
      .then((res) => {
        // 좌표는 정확해서 조건문 생략
        // 주소 찾으면 현재 주소 바꾸기
        if (res.data.documents[0].address.address_name !== "") {
          addr = res.data.documents[0].address.address_name;
          setRoadAdd(addr);
        }
        isLoading.current = true;
      })
      .catch((e) => console.log(e));
  };
  // 주소로 좌표 찾기
  const addToXy = (address: any) => {
    const api = "8bfd93b5e35e8d6039d2b40188560f8b";
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
          setNowCenter({ lat: lng, lng: lat });
          // 현재 주소 바꾸기
          setRoadAdd(res.data.documents[0].road_address.address_name);
        }
      })
      .catch((e) => console.log(e));
  };

  const getMedicalList = (isNowCenter: boolean) => {
    if (isLoading.current === false) return;

    let serachType = "all";
    if (viewHospital === true && viewPharmacy === true) {
      serachType = "all";
    } else if (viewHospital === true) {
      serachType = "hospital";
    } else if (viewPharmacy === true) {
      serachType = "pharmacy";
    } else {
      setHospitalList([]);
      return;
    }

    let lat = viewCenter.lat;
    let lng = viewCenter.lng;
    if (isNowCenter === true) {
      lat = nowCenter.lat;
      lng = nowCenter.lng;
    }

    let subjects: number[] = [];
    if (subjectId > 0) {
      subjects.push(subjectId);
    }

    axios
      .get("/medical", {
        params: {
          search_type: serachType,
          subjects: subjects.join(","),
          emergency: isEmergency,
          lat: lat,
          lng: lng,
          radius: 1000,
        },
      })
      .then((res) => {
        const { data: medical_list } = res.data;
        setHospitalList(medical_list);
      })
      .catch((e) => console.log(e));
  };

  // 시작 시 유저 위치 찾기
  useEffect(() => {
    userGeo();
  }, []);

  useEffect(() => {
    xyToAdd(nowCenter.lat, nowCenter.lng);
    getMedicalList(true);
  }, [nowCenter]);

  useEffect(() => {
    getMedicalList(false);
  }, [viewHospital, viewPharmacy, isEmergency, subjectId]);

  // 병원 상세보기창 닫기
  const handDetailClose = () => {
    setOpenDetailDlg(false);
  };

  // 병원 상세보기창 열기
  const handDetailOpen = (hospital: IHospital) => {
    setHospitalObj(hospital);
    setOpenDetailDlg(true);
  };

  const UpdateSubJect = (subjectId: number, subjectName: string) => {
    setSubjectId(subjectId);
    setSubjectName(subjectName);
    setOpenSubject(false);
  };

  const SetDirectionMode = (destCoord: ICoord) => {
    setDestCoord(destCoord);
    setDirectionMode(true);
    setOpenDetailDlg(false);
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
        <div
          className="medi-bottom-menu-item"
          onClick={() => getMedicalList(false)}
        >
          <img src={RefreshIcon} alt="" width={"17px"} />현 위치에서 검색
        </div>
        <div
          className={
            "medi-bottom-menu-item" + (viewHospital ? "-selected" : "")
          }
          onClick={() => setViewHospital(!viewHospital)}
        >
          <img src={SymbolHospital} alt="" width={"17px"} />
          병원 조회
        </div>
        <div
          className={
            "medi-bottom-menu-item" + (viewPharmacy ? "-selected" : "")
          }
          onClick={() => setViewPharmacy(!viewPharmacy)}
        >
          <img src={SymbolPharmacy} alt="" width={"17px"} />
          약국 조회
        </div>
        <div
          className={"medi-bottom-menu-item" + (isEmergency ? "-selected" : "")}
          onClick={() => setIsEmergency(!isEmergency)}
        >
          <img src={SymbolEmergency} alt="" width={"17px"} />
          응급실 조회
        </div>
        <div className="medi-bottom-menu-item-type">
          종목 코드
          <img src={MenuOpen} alt="" width={"17px"} />
        </div>
        <div
          className="medi-bottom-menu-item-subject"
          onClick={() => setOpenSubject(!openSubject)}
        >
          {subjectName === "전체" ? "진료 과목" : subjectName}
          <img src={openSubject ? MenuClose : MenuOpen} alt="" width={"17px"} />
        </div>
      </div>
      <div className="medi-curpos"></div>
      <div className="medi-right">
        <MedicalList
          hospitals={hospitalList}
          setViewCenter={setViewCenter}
          handDetailOpen={handDetailOpen}
        />
      </div>
      <MedicalMap
        viewCenter={viewCenter}
        setViewCenter={setViewCenter}
        hospitals={hospitalList}
        handDetailOpen={handDetailOpen}
        directionMode={directionMode}
        nowCenter={nowCenter}
        destCoord={destCoord}
        userGeo={userGeo}
        isEmergency={isEmergency}
      ></MedicalMap>
      <MedicalDetail
        open={openDetailDlg}
        onClose={handDetailClose}
        hospitalDetail={hospitalObj}
        roadAdd={roadAdd}
        SetDirectionMode={SetDirectionMode}
      />
      <MedicalSubject
        openSubject={openSubject}
        UpdateSubJect={UpdateSubJect}
        selectedSubjectName={subjectName}
      ></MedicalSubject>
    </>
  );
}
