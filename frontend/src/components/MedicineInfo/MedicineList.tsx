import { NavLink, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import Popup from "../../assets/popup.svg";

import "./MedicineList.css";

interface medicineInfoInterface {
  medicineInfo: {
    shape: string;
    color: string;
    fomula: string;
    divide: string;
    identifier: string;
  };
}

export default function MedicineList() {
  const location = useLocation();
  const medicineInfoInterface = location.state as medicineInfoInterface;
  const { medicineInfo } = medicineInfoInterface;

  const medicines = [
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar />
      <button onClick={scrollToTop} className="to-top">
        TOP
      </button>
      <div className="medicine-list-page">
        <div className="medicine-list-title">
          검색 항목 : 모양 {medicineInfo.shape} {" > "} 색깔
          {medicineInfo.color} {" > "} 제형 {medicineInfo.fomula} {" > "}
          분할선 {medicineInfo.divide} {" > "} 식별문자{" "}
          {medicineInfo.identifier}
          <NavLink to="/medicine">
            <button>검색조건 초기화</button>
          </NavLink>
        </div>
        <div className="medicine-list-group-box">
          <ul className="medicine-list-type">
            <li>
              <NavLink to="/medicine/list/park">
                <div className="medicine-list-item-title">
                  <span>팍스로이드</span>
                  <img
                    src={Popup}
                    alt=""
                    width={"17px"}
                    className="popup-btn"
                  />
                </div>
                <img
                  src={require("../../assets/medicine.png")}
                  width="200"
                  height="150"
                  alt=""
                  className="medicine-list-item-img"
                />
                <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
                텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.
              </NavLink>
            </li>
            <li>
              <NavLink to="/medicine/list/park">
                <div className="medicine-list-item-title">
                  <span>팍스로이드</span>
                  <img
                    src={Popup}
                    alt=""
                    width={"17px"}
                    className="popup-btn"
                  />
                </div>
                <img
                  src={require("../../assets/medicine.png")}
                  width="200"
                  height="150"
                  alt=""
                />
                <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>
                측면에 텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.
              </NavLink>
            </li>
            <li>
              <NavLink to="/medicine/list/park">
                <div className="medicine-list-item-title">
                  <span>팍스로이드</span>
                  <img
                    src={Popup}
                    alt=""
                    width={"17px"}
                    className="popup-btn"
                  />
                </div>
                <img
                  src={require("../../assets/medicine.png")}
                  width="200"
                  height="150"
                  alt=""
                />
                <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
                텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는
                이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
