import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import MedicalList from "../components/MedicalInfo/MedicalList";
import MedicalMap from "../components/MedicalInfo/MedicalMap";
import MedicalDetail from "../components/MedicalInfo/MedicalDetail";
import MedicalCode from "../components/MedicalInfo/MedicalCode";
import MedicalSubject from "../components/MedicalInfo/MedicalSubject";
import { IHospital, ICoord } from "../interface";
import axios from "axios";
import "./MedicalInfo.css";

import SearchGlass from "../assets/searchglass.png";
import RefreshIcon from "../assets/refresh-icon.png";
import SymbolHospital from "../assets/medical_png/symbol_hospital.png";
import SymbolPharmacy from "../assets/medical_png/symbol_pharmacy.png";
import SymbolEmergency from "../assets/medical_png/symbol_emergency.png";
import MenuOpen from "../assets/medical_png/menu_open.png";
import MenuClose from "../assets/medical_png/menu_close.png";

const radiusLevel = [
  0, 260, 460, 600, 1300, 3000, 6300, 13000, 24400, 56300, 100000, 174670,
];

const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

interface stateType {
  subjectId: number;
  subjectName: string;
}

export default function MedicalInfo() {
  const history = useHistory();
  const { state } = useLocation<stateType>();

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
  const [hospitalObj, setHospitalObj] = useState<IHospital>();
  const [viewHospital, setViewHospital] = useState(true);
  const [viewPharmacy, setViewPharmacy] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [directionMode, setDirectionMode] = useState(false);
  const [selectHospital, setSelectHospital] = useState("");
  const [keyword, setKeyword] = useState("");

  const [hospitalList, setHospitalList] = useState<IHospital[]>([]);

  const [openSerach, setOpenSerach] = useState(false);

  const [openAddress, setOpenAddress] = useState(false);

  const [openCode, setOpenCode] = useState(false);
  const [codeId, setCodeId] = useState(0);
  const [codeName, setCodeName] = useState("전체");

  const [openSubject, setOpenSubject] = useState(false);
  const [subjectId, setSubjectId] = useState(0);
  const [subjectName, setSubjectName] = useState("전체");

  const [mapZoomLevel, setMapZoomLevel] = useState(4);

  const [nowPage, setNowPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const postcodeRef = useRef<HTMLDivElement | null>(null);

  // 유저 위치 자동 추적
  const userGeo = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude,
            lng = position.coords.longitude;
          setNowCenter({ lat: lat, lng: lng });
          setViewCenter({ lat: lat, lng: lng });
          setIsLoading(true);
        },
        function () {
          setIsLoading(true);
        }
      );
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
          setNowCenter({ lat: lat, lng: lng });
          setViewCenter({ lat: lat, lng: lng });
        }
      })
      .catch((e) => console.log(e));
  };

  const getMedicalList = (isNowCenter: boolean) => {
    if (isLoading === false) return;

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

    let maplat = viewCenter.lat;
    let maplng = viewCenter.lng;
    if (isNowCenter === true) {
      maplat = nowCenter.lat;
      maplng = nowCenter.lng;
    }

    let subjects: number[] = [];
    if (subjectId > 0) {
      subjects.push(subjectId);
    }

    let radius = radiusLevel[mapZoomLevel];
    // if (radius > 3000) {
    //   radius = 3000;
    // }

    axios
      .get("/medical", {
        params: {
          search_type: serachType,
          code: codeId,
          subjects: subjects.join(","),
          emergency: isEmergency,
          keyword: keyword,
          map_lat: maplat,
          map_lng: maplng,
          now_lat: nowCenter.lat,
          now_lng: nowCenter.lng,
          radius: radius,
          page: nowPage - 1,
          size: 10,
        },
      })
      .then((res) => {
        const { data: medical_list } = res.data;

        let mediList: IHospital[] = medical_list.content;
        mediList = addOpentimeValid(mediList);
        mediList = addOpenOrNot(mediList);
        mediList = addOpenDays(mediList);

        setHospitalList(mediList);
        setSelectHospital("");

        let totalPages: number = medical_list.totalPages;
        setTotalPage(totalPages);
      })
      .catch((e) => console.log(e));
  };

  const addOpentimeValid = (medicalList: IHospital[]): IHospital[] => {
    medicalList.forEach(function (element: IHospital) {
      if (
        element.opentime.opentime_sun === -1 &&
        element.opentime.closetime_sun === -1 &&
        element.opentime.opentime_mon === -1 &&
        element.opentime.closetime_mon === -1 &&
        element.opentime.opentime_tue === -1 &&
        element.opentime.closetime_tue === -1 &&
        element.opentime.opentime_thu === -1 &&
        element.opentime.closetime_thu === -1 &&
        element.opentime.opentime_fri === -1 &&
        element.opentime.closetime_fri === -1 &&
        element.opentime.opentime_sat === -1 &&
        element.opentime.closetime_sat === -1
      ) {
        element.opentime.opentime_valid = "N";
      } else {
        element.opentime.opentime_valid = "Y";
      }
    });
    return medicalList;
  };

  const addOpenOrNot = (medicalList: IHospital[]): IHospital[] => {
    let today = new Date();
    let day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let curTime = hours * 100 + minutes;

    medicalList.forEach(function (element: IHospital) {
      let openTime = -1;
      let closeTime = -1;

      if (element.opentime.opentime_valid === "Y") {
        if (day === 0) {
          openTime = element.opentime.opentime_sun;
          closeTime = element.opentime.closetime_sun;
        } else if (day === 1) {
          openTime = element.opentime.opentime_mon;
          closeTime = element.opentime.closetime_mon;
        } else if (day === 2) {
          openTime = element.opentime.opentime_tue;
          closeTime = element.opentime.closetime_tue;
        } else if (day === 3) {
          openTime = element.opentime.opentime_wed;
          closeTime = element.opentime.closetime_wed;
        } else if (day === 4) {
          openTime = element.opentime.opentime_thu;
          closeTime = element.opentime.closetime_thu;
        } else if (day === 5) {
          openTime = element.opentime.opentime_fri;
          closeTime = element.opentime.closetime_fri;
        } else if (day === 6) {
          openTime = element.opentime.opentime_sat;
          closeTime = element.opentime.closetime_sat;
        }

        if (openTime > 0 || closeTime > 0) {
          let openornot = "";
          if (curTime < openTime) {
            openornot = "영업전";
          } else if (curTime < closeTime) {
            openornot = "영업중";
          } else {
            openornot = "영업종료";
          }
          element.openornot = openornot;
        } else {
          element.openornot = "영업종료";
        }
      }
    });
    return medicalList;
  };

  const addOpenDays = (medicalList: IHospital[]): any => {
    medicalList.forEach(function (element: IHospital) {
      if (element.opentime.opentime_valid === "Y") {
        let opendays = "";
        if (
          element.opentime.opentime_mon > 0 &&
          element.opentime.closetime_mon > 0
        ) {
          let opentime_mon_str = element.opentime.opentime_mon.toString();
          if (opentime_mon_str.length === 3) {
            opentime_mon_str =
              opentime_mon_str.slice(0, 1) + ":" + opentime_mon_str.slice(1, 3);
          } else if (opentime_mon_str.length === 4) {
            opentime_mon_str =
              opentime_mon_str.slice(0, 2) + ":" + opentime_mon_str.slice(2, 4);
          }
          element.opentime.opentime_mon_str = opentime_mon_str;
          let closetime_mon_str = element.opentime.closetime_mon.toString();
          if (closetime_mon_str.length === 3) {
            closetime_mon_str =
              closetime_mon_str.slice(0, 1) +
              ":" +
              closetime_mon_str.slice(1, 3);
          } else if (closetime_mon_str.length === 4) {
            closetime_mon_str =
              closetime_mon_str.slice(0, 2) +
              ":" +
              closetime_mon_str.slice(2, 4);
          }
          element.opentime.closetime_mon_str = closetime_mon_str;
          opendays = opendays.concat("월 ");
        }
        if (
          element.opentime.opentime_tue > 0 &&
          element.opentime.closetime_tue > 0
        ) {
          let opentime_tue_str = element.opentime.opentime_tue.toString();
          if (opentime_tue_str.length === 3) {
            opentime_tue_str =
              opentime_tue_str.slice(0, 1) + ":" + opentime_tue_str.slice(1, 3);
          } else if (opentime_tue_str.length === 4) {
            opentime_tue_str =
              opentime_tue_str.slice(0, 2) + ":" + opentime_tue_str.slice(2, 4);
          }
          element.opentime.opentime_tue_str = opentime_tue_str;
          let closetime_tue_str = element.opentime.closetime_tue.toString();
          if (closetime_tue_str.length === 3) {
            closetime_tue_str =
              closetime_tue_str.slice(0, 1) +
              ":" +
              closetime_tue_str.slice(1, 3);
          } else if (closetime_tue_str.length === 4) {
            closetime_tue_str =
              closetime_tue_str.slice(0, 2) +
              ":" +
              closetime_tue_str.slice(2, 4);
          }
          element.opentime.closetime_tue_str = closetime_tue_str;
          opendays = opendays.concat("화 ");
        }
        if (
          element.opentime.opentime_wed > 0 &&
          element.opentime.closetime_wed > 0
        ) {
          let opentime_wed_str = element.opentime.opentime_wed.toString();
          if (opentime_wed_str.length === 3) {
            opentime_wed_str =
              opentime_wed_str.slice(0, 1) + ":" + opentime_wed_str.slice(1, 3);
          } else if (opentime_wed_str.length === 4) {
            opentime_wed_str =
              opentime_wed_str.slice(0, 2) + ":" + opentime_wed_str.slice(2, 4);
          }
          element.opentime.opentime_wed_str = opentime_wed_str;
          let closetime_wed_str = element.opentime.closetime_wed.toString();
          if (closetime_wed_str.length === 3) {
            closetime_wed_str =
              closetime_wed_str.slice(0, 1) +
              ":" +
              closetime_wed_str.slice(1, 3);
          } else if (closetime_wed_str.length === 4) {
            closetime_wed_str =
              closetime_wed_str.slice(0, 2) +
              ":" +
              closetime_wed_str.slice(2, 4);
          }
          element.opentime.closetime_wed_str = closetime_wed_str;
          opendays = opendays.concat("수 ");
        }
        if (
          element.opentime.opentime_thu > 0 &&
          element.opentime.closetime_thu > 0
        ) {
          let opentime_thu_str = element.opentime.opentime_thu.toString();
          if (opentime_thu_str.length === 3) {
            opentime_thu_str =
              opentime_thu_str.slice(0, 1) + ":" + opentime_thu_str.slice(1, 3);
          } else if (opentime_thu_str.length === 4) {
            opentime_thu_str =
              opentime_thu_str.slice(0, 2) + ":" + opentime_thu_str.slice(2, 4);
          }
          element.opentime.opentime_thu_str = opentime_thu_str;
          let closetime_thu_str = element.opentime.closetime_thu.toString();
          if (closetime_thu_str.length === 3) {
            closetime_thu_str =
              closetime_thu_str.slice(0, 1) +
              ":" +
              closetime_thu_str.slice(1, 3);
          } else if (closetime_thu_str.length === 4) {
            closetime_thu_str =
              closetime_thu_str.slice(0, 2) +
              ":" +
              closetime_thu_str.slice(2, 4);
          }
          element.opentime.closetime_thu_str = closetime_thu_str;
          opendays = opendays.concat("목 ");
        }
        if (
          element.opentime.opentime_fri > 0 &&
          element.opentime.closetime_fri > 0
        ) {
          let opentime_fri_str = element.opentime.opentime_fri.toString();
          if (opentime_fri_str.length === 3) {
            opentime_fri_str =
              opentime_fri_str.slice(0, 1) + ":" + opentime_fri_str.slice(1, 3);
          } else if (opentime_fri_str.length === 4) {
            opentime_fri_str =
              opentime_fri_str.slice(0, 2) + ":" + opentime_fri_str.slice(2, 4);
          }
          element.opentime.opentime_fri_str = opentime_fri_str;
          let closetime_fri_str = element.opentime.closetime_fri.toString();
          if (closetime_fri_str.length === 3) {
            closetime_fri_str =
              closetime_fri_str.slice(0, 1) +
              ":" +
              closetime_fri_str.slice(1, 3);
          } else if (closetime_fri_str.length === 4) {
            closetime_fri_str =
              closetime_fri_str.slice(0, 2) +
              ":" +
              closetime_fri_str.slice(2, 4);
          }
          element.opentime.closetime_fri_str = closetime_fri_str;
          opendays = opendays.concat("금 ");
        }
        if (
          element.opentime.opentime_sat > 0 &&
          element.opentime.closetime_sat > 0
        ) {
          let opentime_sat_str = element.opentime.opentime_sat.toString();
          if (opentime_sat_str.length === 3) {
            opentime_sat_str =
              opentime_sat_str.slice(0, 1) + ":" + opentime_sat_str.slice(1, 3);
          } else if (opentime_sat_str.length === 4) {
            opentime_sat_str =
              opentime_sat_str.slice(0, 2) + ":" + opentime_sat_str.slice(2, 4);
          }
          element.opentime.opentime_sat_str = opentime_sat_str;
          let closetime_sat_str = element.opentime.closetime_sat.toString();
          if (closetime_sat_str.length === 3) {
            closetime_sat_str =
              closetime_sat_str.slice(0, 1) +
              ":" +
              closetime_sat_str.slice(1, 3);
          } else if (closetime_sat_str.length === 4) {
            closetime_sat_str =
              closetime_sat_str.slice(0, 2) +
              ":" +
              closetime_sat_str.slice(2, 4);
          }
          element.opentime.closetime_sat_str = closetime_sat_str;
          opendays = opendays.concat("토 ");
        }
        if (
          element.opentime.opentime_sun > 0 &&
          element.opentime.closetime_sun > 0
        ) {
          let opentime_sun_str = element.opentime.opentime_sun.toString();
          if (opentime_sun_str.length === 3) {
            opentime_sun_str =
              opentime_sun_str.slice(0, 1) + ":" + opentime_sun_str.slice(1, 3);
          } else if (opentime_sun_str.length === 4) {
            opentime_sun_str =
              opentime_sun_str.slice(0, 2) + ":" + opentime_sun_str.slice(2, 4);
          }
          element.opentime.opentime_sun_str = opentime_sun_str;
          let closetime_sun_str = element.opentime.closetime_sun.toString();
          if (closetime_sun_str.length === 3) {
            closetime_sun_str =
              closetime_sun_str.slice(0, 1) +
              ":" +
              closetime_sun_str.slice(1, 3);
          } else if (closetime_sun_str.length === 4) {
            closetime_sun_str =
              closetime_sun_str.slice(0, 2) +
              ":" +
              closetime_sun_str.slice(2, 4);
          }
          element.opentime.closetime_sun_str = closetime_sun_str;
          opendays = opendays.concat("일 ");
        }

        element.opendays = opendays;
      }
    });

    return medicalList;
  };

  // 시작 시 유저 위치 찾기
  useEffect(() => {
    if (state !== undefined && state !== null) {
      setSubjectId(state.subjectId);
      setSubjectName(state.subjectName);
    }

    userGeo();

    const isAlready = document.getElementById(id);

    if (!isAlready) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      document.body.append(script);
    }
  }, []);

  useEffect(() => {
    xyToAdd(nowCenter.lat, nowCenter.lng);
    getMedicalList(true);
  }, [nowCenter]);

  useEffect(() => {
    setNowPage(0);
    getMedicalList(false);
  }, [keyword, viewHospital, viewPharmacy, isEmergency, codeId, subjectId]);

  useEffect(() => {
    getMedicalList(false);
  }, [nowPage]);

  useEffect(() => {
    if (isLoading === true) {
      getMedicalList(true);
    }
  }, [isLoading]);

  // 병원 상세보기창 닫기
  const handDetailClose = () => {
    setOpenDetailDlg(false);
  };

  // 병원 상세보기창 열기
  const handDetailOpen = (hospital: IHospital) => {
    setHospitalObj(hospital);
    setOpenDetailDlg(true);
  };

  const UpdateCode = (codeId: number, codeName: string) => {
    setCodeId(codeId);
    setCodeName(codeName);
    setOpenCode(false);
  };

  const UpdateSelectHospital = (selectedHospital: string) => {
    setSelectHospital(selectedHospital);
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

  const handleKeyPressSearch = (e: any) => {
    if (e.key === "Enter") {
      setKeyword(e.target.value);
    }
  };
  function routeMedicine() {
    history.push("/medicine");
  }
  function routeDisease() {
    history.push("/disease");
  }
  function routeCovid() {
    history.push("/covid");
  }
  const loadLayout = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          setRoadAdd(data.address);
          addToXy(data.roadAddress);
          getMedicalList(true);
        },
      });
      postcode.open();
    });
  };

  const openCodeEvent = () => {
    if (openCode === false) {
      setOpenCode(true);
      setOpenSubject(false);
    } else {
      setOpenCode(false);
    }
  };

  const openSubjectEvent = () => {
    if (openSubject === false) {
      setOpenSubject(true);
      setOpenCode(false);
    } else {
      setOpenSubject(false);
    }
  };

  return (
    <>
      <div className="mi-container">
        <div className="medi-address-detail">
          {roadAdd}
          <button onClick={loadLayout}>변경</button>
        </div>
        <div className="custom-curposcontrol" onClick={userGeo}>
          <img src="/map_curpos.png" alt="" />
        </div>
      </div>
      <div className="medi-left">
        <div className="medi-home" onClick={routeHome}>
          <img src="/Lemonaid.png" alt="" />
        </div>
        <div className="medi-search" onClick={() => setOpenSerach(!openSerach)}>
          이름 검색
        </div>
        <div onClick={routeMedicine} className="medi-nav medi-nav1">
          의약품 조회
        </div>
        <div onClick={routeDisease} className="medi-nav">
          질병 조회
        </div>
        <div onClick={routeCovid} className="medi-nav">
          COVID
        </div>
      </div>

      {openSerach === true && (
        <div className="medi-serach-detail">
          SEARCH
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            onKeyPress={handleKeyPressSearch}
          />
        </div>
      )}
      <div className="medi-bottom">
        <div
          className="medi-bottom-menu-item"
          onClick={() => getMedicalList(false)}
        >
          <img src={RefreshIcon} alt="" width={"17px"} />현 지도에서 검색
        </div>
        <div
          className={
            "medi-bottom-menu-item" + (viewHospital ? "-selected" : "")
          }
          onClick={() => setViewHospital(!viewHospital)}
        >
          <img src={SymbolHospital} alt="" width={"17px"} />
          병원 검색
        </div>
        <div
          className={
            "medi-bottom-menu-item" + (viewPharmacy ? "-selected" : "")
          }
          onClick={() => setViewPharmacy(!viewPharmacy)}
        >
          <img src={SymbolPharmacy} alt="" width={"17px"} />
          약국 검색
        </div>
        <div
          className={
            "emer-text medi-bottom-menu-item" +
            (isEmergency ? "-selected emer2" : "")
          }
          onClick={() => setIsEmergency(!isEmergency)}
        >
          <img src={SymbolEmergency} alt="" width={"17px"} />
          응급 진료
        </div>
        <div
          className={
            "medi-bottom-menu-item-code" +
            (codeName !== "전체" ? "-selected" : "")
          }
          onClick={openCodeEvent}
        >
          {codeName === "전체" ? "병원 종류" : codeName}
          <img src={openCode ? MenuClose : MenuOpen} alt="" width={"17px"} />
        </div>
        <div
          className={
            "medi-bottom-menu-item-subject" +
            (subjectName !== "전체" ? "-selected" : "")
          }
          onClick={openSubjectEvent}
        >
          {subjectName === "전체" ? "진료 과목" : subjectName}
          <img src={openSubject ? MenuClose : MenuOpen} alt="" width={"17px"} />
        </div>
      </div>
      <div className="medi-right">
        <MedicalList
          hospitals={hospitalList}
          setViewCenter={setViewCenter}
          handDetailOpen={handDetailOpen}
          selectHospital={selectHospital}
          UpdateSelectHospital={UpdateSelectHospital}
          nowPage={nowPage}
          totalPage={totalPage}
          setNowPage={setNowPage}
        />
      </div>
      <MedicalMap
        setViewCenter={setViewCenter}
        hospitals={hospitalList}
        handDetailOpen={handDetailOpen}
        directionMode={directionMode}
        nowCenter={nowCenter}
        userGeo={userGeo}
        isEmergency={isEmergency}
        selectHospital={selectHospital}
        UpdateSelectHospital={UpdateSelectHospital}
        setMapZoomLevel={setMapZoomLevel}
      ></MedicalMap>
      <MedicalDetail
        open={openDetailDlg}
        onClose={handDetailClose}
        hospitalDetail={hospitalObj}
        roadAdd={roadAdd}
        SetDirectionMode={SetDirectionMode}
      />
      <MedicalCode
        openCode={openCode}
        UpdateCode={UpdateCode}
        selectedCodeName={codeName}
      ></MedicalCode>
      <MedicalSubject
        openSubject={openSubject}
        UpdateSubJect={UpdateSubJect}
        selectedSubjectName={subjectName}
      ></MedicalSubject>
      <div ref={postcodeRef}></div>
    </>
  );
}
