import { NavLink, useLocation } from "react-router-dom";
import NavBar from "../NavBar";

import "./DrugList.css";

interface drugInfoInterface {
  drugInfo: {
    shape: string;
    color: string;
    fomula: string;
    divide: string;
    identifier: string;
  };
}

export default function DrugList() {
  const location = useLocation();
  const drugInfoInterface = location.state as drugInfoInterface;
  const { drugInfo } = drugInfoInterface;

  const drugs = [
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
        검색조건 : {drugInfo.shape} {" > "} {drugInfo.color} {" > "}{" "}
        {drugInfo.fomula} {" > "}
        {drugInfo.divide} {" > "} {drugInfo.identifier}
      </h3>
      <div className="drug-list-group-box">
        <ul className="drug-list-type">
          <li>
            <NavLink to="/drug/list/park">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/drug/list/park">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </NavLink>
          </li>
          <li>
            <NavLink to="/drug/list/park">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/drug/list/park">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </NavLink>
          </li>
          <li>
            <NavLink to="/drug/list/park">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </NavLink>
            <NavLink to="/drug/list/park">
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
