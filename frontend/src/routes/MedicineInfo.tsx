import { useState } from "react";
import { useHistory } from "react-router";

import NavBar from "../components/NavBar";
import MedicineShape from "../components/MedicineInfo/MedicineShape";
import MedicineColor from "../components/MedicineInfo/MedicineColor";
import MedicineFomula from "../components/MedicineInfo/MedicineFomula";
import MedicineDivide from "../components/MedicineInfo/MedicineDivide";
import MedicineIdentifier from "../components/MedicineInfo/MedicineIdentifier";

export default function MedicineInfo() {
  const history = useHistory();

  const [page, setPage] = useState<number>(1);
  const [shape, setShape] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [fomula, setFomula] = useState<string>("");
  const [divide, setDivide] = useState<string>("");

  const updatePage = (page: number): void => {
    setPage(page);
  };

  const updateShape = (shape: string): void => {
    setShape(shape);
  };

  const updateColor = (color: string): void => {
    setColor(color);
  };

  const updateFomula = (fomula: string): void => {
    setFomula(fomula);
  };

  const updateDivide = (divide: string): void => {
    setDivide(divide);
  };

  const moveMedicineList = (identifier: string): void => {
    const medicineInfo = {
      shape: shape,
      color: color,
      fomula: fomula,
      divide: divide,
      identifier: identifier,
    };

    console.log(medicineInfo);

    history.push({
      pathname: "/medicine/list",
      state: { medicineInfo: medicineInfo },
    });
  };

  return (
    <div>
      <NavBar />
      <h1>의약품 조회</h1>
      <h3>
        STEP {page}, {shape}, {color}, {fomula}, {divide}
      </h3>

      {page === 1 && (
        <MedicineShape
          page={page}
          updatePage={updatePage}
          updateShape={updateShape}
        ></MedicineShape>
      )}
      {page === 2 && (
        <MedicineColor
          page={page}
          updatePage={updatePage}
          updateColor={updateColor}
        ></MedicineColor>
      )}
      {page === 3 && (
        <MedicineFomula
          page={page}
          updatePage={updatePage}
          updateFomula={updateFomula}
        ></MedicineFomula>
      )}
      {page === 4 && (
        <MedicineDivide
          page={page}
          updatePage={updatePage}
          updateDivide={updateDivide}
        ></MedicineDivide>
      )}
      {page === 5 && (
        <MedicineIdentifier
          page={page}
          updatePage={updatePage}
          moveMedicineList={moveMedicineList}
        ></MedicineIdentifier>
      )}
    </div>
  );
}
