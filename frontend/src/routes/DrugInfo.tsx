import NavBar from "../components/NavBar";
import DrugShape from "../components/drug/DrugShape";
import DrugColor from "../components/drug/DrugColor";
import DrugFomula from "../components/drug/DrugFomula";
import DrugDivide from "../components/drug/DrugDivide";
import DrugIdentifier from "../components/drug/DrugIdentifier";
import DrugList from "../components/drug/DrugList";
import { useState } from "react";

interface Drug {
  name: string;
  description: string;
  pictureURL: string;
}

export default function DrugInfo() {
  const [page, setPage] = useState<number>(1);
  const [shape, setShape] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [fomula, setFomula] = useState<string>("");
  const [divide, setDivide] = useState<string>("");
  const [identifier, setIdentifier] = useState<string>("");

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

  const updateIdentifier = (identifier: string): void => {
    setIdentifier(identifier);
  };

  return (
    <div>
      <NavBar />
      <h1>의약품 조회</h1>
      <h3>
        STEP {page}, {shape}, {color}, {fomula}, {divide}, {identifier}
      </h3>

      {page === 1 && (
        <DrugShape
          page={page}
          updatePage={updatePage}
          updateShape={updateShape}
        ></DrugShape>
      )}
      {page === 2 && (
        <DrugColor
          page={page}
          updatePage={updatePage}
          updateColor={updateColor}
        ></DrugColor>
      )}
      {page === 3 && (
        <DrugFomula
          page={page}
          updatePage={updatePage}
          updateFomula={updateFomula}
        ></DrugFomula>
      )}
      {page === 4 && (
        <DrugDivide
          page={page}
          updatePage={updatePage}
          updateDivide={updateDivide}
        ></DrugDivide>
      )}
      {page === 5 && (
        <DrugIdentifier
          page={page}
          updatePage={updatePage}
          updateIdentifier={updateIdentifier}
        ></DrugIdentifier>
      )}
      {page === 6 && <DrugList></DrugList>}
    </div>
  );
}
