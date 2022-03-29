import { useState } from "react";
import { useHistory } from "react-router";
// Components
import NavBar from "../components/NavBar";
import MedicineStepOne from "../components/MedicineInfo/MedicineStepOne";
import MedicineShape from "../components/MedicineInfo/MedicineShape";
import MedicineColor from "../components/MedicineInfo/MedicineColor";
import MedicineFomula from "../components/MedicineInfo/MedicineFomula";
import MedicineDivide from "../components/MedicineInfo/MedicineDivide";
import MedicineIdentifier from "../components/MedicineInfo/MedicineIdentifier";

import "./MedicineInfo.css";

export default function MedicineInfo() {
  const history = useHistory();

  const [page, setPage] = useState<number>(0);
  const [shape, setShape] = useState<string>("STEP1");
  const [color, setColor] = useState<string>("STEP2");
  const [fomula, setFomula] = useState<string>("STEP3");
  const [divide, setDivide] = useState<string>("STEP4");
  const [identifier, setIdentifier] = useState<string>("STEP5");

  const updatePage = (page: number): void => {
    setPage(page);
    console.log(page)
  };

  const updateCondition = (name: string, value: string): void => {
    if (name === "shape") {
      setShape(value);
    } else if (name === "color") {
      setColor(value);
    } else if (name === "fomula") {
      setFomula(value);
    } else if (name === "divide") {
      setDivide(value);
    } else if (name === "identifier") {
      setIdentifier(value);
      moveMedicineList(value);
    }
  };

  const moveMedicineList = (identifier: string): void => {
    const medicineInfo = {
      shape: shape,
      color: color,
      fomula: fomula,
      divide: divide,
      identifier: identifier,
    };

    history.push({
      pathname: "/medicine/list",
      state: { medicineInfo: medicineInfo },
    });
  };

  const initCondition = (): void => {
    updatePage(0);
    setShape("STEP1");
    setColor("STEP2");
    setFomula("STEP3");
    setDivide("STEP4");
    setIdentifier("STEP5");
  };

  return (
    <>
      <NavBar />
      <div className="medicine-info-page">
        <div className="medicine-info-title">
          <div className="p-flex">
            <div className="p-flex">
              <div className="medicine-info-c r"></div>
              <div className="medicine-info-c o"></div>
              <div className="medicine-info-c g"></div>
            </div>
            <p className="medicine-title">Lemonaid 의약품 검색</p>
          </div>
          {page > 0 && (
            <div>
              <div className="medicine-info-reset">
                <p>초기화</p>
                <img
                  className="refresh-icon"
                  src={require("../assets/refresh-icon.png")}
                  onClick={initCondition}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>

        {page > 0 && (
          <div className="medicine-info-step">
            <p className="medicine-step">STEP {page}</p>
            <p className="medicine-progress">
              [ {shape} {"/"} {color} {"/"} {fomula} {"/"} {divide} {"/"} {" "} {identifier} ]
            </p>
          </div>
        )}

        {page === 0 && (
          <MedicineStepOne
            page={page}
            updatePage={updatePage}
          ></MedicineStepOne>
        )}
        {page === 1 && (
          <MedicineShape
            page={page}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineShape>
        )}
        {page === 2 && (
          <MedicineColor
            page={page}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineColor>
        )}
        {page === 3 && (
          <MedicineFomula
            page={page}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineFomula>
        )}
        {page === 4 && (
          <MedicineDivide
            page={page}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineDivide>
        )}
        {page === 5 && (
          <MedicineIdentifier
            page={page}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineIdentifier>
        )}
      </div>
    </>
  );
}
