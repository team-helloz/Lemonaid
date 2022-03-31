// React
import { useState } from "react";
// Components
import NavBar from "../components/NavBar";
import MedicineStepOne from "../components/MedicineInfo/MedicineStepOne";
import MedicineShape from "../components/MedicineInfo/MedicineShape";
import MedicineColor from "../components/MedicineInfo/MedicineColor";
import MedicineFomula from "../components/MedicineInfo/MedicineFomula";
import MedicineDivide from "../components/MedicineInfo/MedicineDivide";
import MedicineIdentifier from "../components/MedicineInfo/MedicineIdentifier";
import MedicineList from "../components/MedicineInfo/MedicineList";
// Style
import "./MedicineInfo.css";

export default function MedicineInfo() {

  const [page, setPage] = useState<number>(0);
  const [shape, setShape] = useState<string>("STEP1");
  const [color, setColor] = useState<string>("STEP2");
  const [fomula, setFomula] = useState<string>("STEP3");
  const [divide, setDivide] = useState<string>("STEP4");
  const [identifier, setIdentifier] = useState<string>("STEP5");
  const [medicineName, setMedicine] = useState("");
  const [isSearch, setSearch] = useState<boolean>(false);

  const updatePage = (page: number): void => {
    setPage(page);
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
    }
  };

  function setMedicineName(value: string) {
    setMedicine(value);
  }

  function updateSearchState(value: boolean) {
    setSearch(value);
  }

  const initCondition = (): void => {
    updatePage(0);
    setShape("STEP1");
    setColor("STEP2");
    setFomula("STEP3");
    setDivide("STEP4");
    setIdentifier("STEP5");
    setMedicine("");
    setSearch(false);
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
          <div>
            {isSearch && (
              <div className="medicine-info-step">
                <p className="medicine-step">검색어 : " {medicineName} "</p>
              </div>
            )}
            {!isSearch && (
              <div className="medicine-info-step">
                <p className="medicine-step">SEARCH</p>
                <p className="medicine-progress">
                  [ (모양) {shape} {"/"} (색상) {color} {"/"} (제형) {fomula} {"/"} (분할선) {divide} {"/"} (식별문자) {identifier} ]
                </p>
              </div>
            )}
          </div>
        )}

        {page === 0 && (
          <MedicineStepOne
            page={page}
            updatePage={updatePage}
            medicineName={medicineName}
            setMedicineName={setMedicineName}
            isSearch={isSearch}
            updateSearchState={updateSearchState}
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
            isSearch={isSearch}
            updatePage={updatePage}
            updateCondition={updateCondition}
          ></MedicineIdentifier>
        )}
      </div>
      {(identifier !== "STEP5" || isSearch) && (
        <MedicineList
          shape={shape}
          color={color}
          form={fomula}
          line={divide}
          sign={identifier}
          medicineName={medicineName}
        />
      )}
    </>
  );
}
