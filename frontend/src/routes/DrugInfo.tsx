import NavBar from "../components/NavBar";
import DrugShape from "../components/drug/DrugShape";
import DrugColor from "../components/drug/DrugColor";
import { useState } from "react";

export default function DrugInfo() {
  const [page, setPage] = useState<number>(0);
  const [shape, setShape] = useState<string>("모양전체");
  const [color, setColor] = useState<string>("색깔전체");

  const updatePage = (page: number): void => {
    setPage(page);
  };

  const updateShape = (shape: string): void => {
    setShape(shape);
  };

  const updateColor = (color: string): void => {
    setColor(color);
  };

  return (
    <div>
      <NavBar />
      <h1>의약품 조회</h1>
      <h3>
        STEP {page}, {shape}, {color}
      </h3>

      {page === 0 && (
        <DrugShape
          page={page}
          updatePage={updatePage}
          updateShape={updateShape}
        ></DrugShape>
      )}
      {page === 1 && (
        <DrugColor
          page={page}
          updatePage={updatePage}
          updateColor={updateColor}
        ></DrugColor>
      )}
    </div>
  );
}
