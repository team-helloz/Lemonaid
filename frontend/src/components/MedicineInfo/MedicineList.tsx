import { NavLink, useLocation } from "react-router-dom";
import NavBar from "../NavBar";

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

  return (
    <>
      <NavBar></NavBar>
      <h2>의약품 검색 결과</h2>
      <h3>
        검색조건 : {medicineInfo.shape} {" > "} {medicineInfo.color} {" > "}{" "}
        {medicineInfo.fomula} {" > "}
        {medicineInfo.divide} {" > "} {medicineInfo.identifier}
      </h3>
      <NavLink to="/medicine">
        <button>검색조건 초기화</button>
      </NavLink>
      <div className="medicine-list-group-box">
        <ul className="medicine-list-type">
          <li>
            <NavLink to="/medicine/list/park">
              <img
                src={require("../../assets/medicine.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/medicine/list/park">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </NavLink>
          </li>
          <li>
            <NavLink to="/medicine/list/park">
              <img
                src={require("../../assets/medicine.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/medicine/list/park">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </NavLink>
          </li>
          <li>
            <NavLink to="/medicine/list/park">
              <img
                src={require("../../assets/medicine.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/medicine/list/park">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
