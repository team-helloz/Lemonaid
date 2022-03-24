import { useState } from "react";
import { useHistory } from "react-router";

import NavBar from "../components/NavBar";
import MedicineShape from "../components/MedicineInfo/MedicineShape";
import MedicineColor from "../components/MedicineInfo/MedicineColor";
import MedicineFomula from "../components/MedicineInfo/MedicineFomula";
import MedicineDivide from "../components/MedicineInfo/MedicineDivide";
import MedicineIdentifier from "../components/MedicineInfo/MedicineIdentifier";

import "./MedicineInfo.css";

export default function MedicineInfo() {
  const history = useHistory();

  const [page, setPage] = useState<number>(1);
  const [shape, setShape] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [fomula, setFomula] = useState<string>("");
  const [divide, setDivide] = useState<string>("");
  const [identifier, setIdentifier] = useState<string>("");

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

  return (
    <>
      <NavBar />
      <div className="medicine-info-page">
        <div className="medicine-info-title">
          <img src={require("../assets/medicinebottle.png")}></img>
          <p>의약품 검색</p>
        </div>
        <h3>
          STEP {page}, {shape}, {color}, {fomula}, {divide}, {identifier}
        </h3>

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
