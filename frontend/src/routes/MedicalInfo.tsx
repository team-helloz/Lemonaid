import { useHistory } from "react-router-dom";
import "./MedicalInfo.css";
import MedicalList from "../components/MedicalInfo/MedicalList";
import { useEffect } from "react";
import * as React from "react";
import axios from "axios";

declare global {
  interface Window {
    kakao: any;
  }
}
const nowCoor = {
  y: 36.1072226,
  x: 128.412915,
};
export default function MedicalInfo() {
  const history = useHistory();
  var center = 0;
  interface hospital {
    id: number;
    type: string;
    name: string;
    call: string;
    address: string;
  }

  const hospitalList: hospital[] = [
    {
      id: 1,
      type: "병원",
      name: "서울병원",
      call: "02-154-8756",
      address: "서울 동작구 XXX",
    },
    {
      id: 2,
      type: "약국",
      name: "대구병원",
      call: "02-154-8755",
      address: "서울 동작구 XXX",
    },
    {
      id: 3,
      type: "한의원",
      name: "구미병원",
      call: "02-154-8456",
      address: "서울 동작구 XXX",
    },
    {
      id: 4,
      type: "병원",
      name: "부산병원",
      call: "02-154-8786",
      address: "서울 동작구 XXX",
    },
    {
      id: 5,
      type: "약국",
      name: "광주병원",
      call: "02-154-8776",
      address: "서울 동작구 XXX",
    },
    {
      id: 6,
      type: "병원",
      name: "강릉병원",
      call: "02-154-8736",
      address: "서울 동작구 XXX",
    },
    {
      id: 7,
      type: "한의원",
      name: "남해병원",
      call: "02-154-5756",
      address: "서울 동작구 XXX",
    },
  ];
  function routeHome() {
    history.push("/");
  }
  const [nowCenter, setNowCenter] = React.useState(nowCoor);
  const [roadAdd, setRoadAdd] = React.useState("");
  const api = "8bfd93b5e35e8d6039d2b40188560f8b";
  const userGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
          lon = position.coords.longitude;
        setNowCenter({ y: lat, x: lon });
        xyToAdd(lon, lat);
      });
    } else {
    }
  };

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
        console.log(res.data.documents[0].road_address.address_name);
        setRoadAdd(res.data.documents[0].road_address.address_name);
      })
      .catch((e) => console.log(e));
  };

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
        const x = res.data.documents[0].road_address.x;
        const y = res.data.documents[0].road_address.y;
        if (x !== null) {
          setNowCenter({ x, y });
          setRoadAdd(res.data.documents[0].road_address.address_name);
        }
      })
      .catch((e) => console.log(e));
  };
  const mapContainer = () => {
    var container = document.getElementById("map");
    var options = {
      center: new window.kakao.maps.LatLng(nowCenter.y, nowCenter.x),
      level: 4,
    };
    let map = new window.kakao.maps.Map(container, options);
    var control = new window.kakao.maps.ZoomControl();
    map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);
  };
  useEffect(() => {
    userGeo();
    mapContainer();
  }, []);

  useEffect(() => {
    mapContainer();
  }, [nowCenter]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addToXy(e.target.value);
      setRoadAdd(e.target.value);
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
        <MedicalList hospitals={hospitalList} />
      </div>
      <div id="map"></div>
    </>
  );
}
