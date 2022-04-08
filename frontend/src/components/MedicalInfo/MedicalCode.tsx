import { useEffect, useState } from "react";
import MedicalCodeItem from "./MedicalCodeItem";
import "./MedicalCode.css";

export interface MedicalCodeProps {
  openCode: boolean;
  UpdateCode: (codeId: number, codeName: string) => void;
  selectedCodeName: string;
}

export default function MedicalCode(props: MedicalCodeProps) {
  const MedicalCodes = [
    [
      { id: 0, name: "전체" },
      { id: 1, name: "상급종합" },
      { id: 11, name: "종합병원" },
      { id: 21, name: "병원" },
      { id: 28, name: "요양병원" },
      { id: 29, name: "정신병원" },
      { id: 31, name: "의원" },
      { id: 41, name: "치과병원" },
    ],
    [
      { id: 51, name: "치과의원" },
      { id: 61, name: "조산원" },
      { id: 71, name: "보건소" },
      { id: 72, name: "보건지소" },
      { id: 73, name: "보건진료소" },
      { id: 75, name: "보건의료원" },
      { id: 92, name: "한방병원" },
      { id: 93, name: "한의원" },
    ],
  ];

  const { openCode, UpdateCode, selectedCodeName } = props;

  const onClickCode = (Code: { id: number; name: string }) => () => {
    UpdateCode(Code.id, Code.name);
  };

  return (
    <>
      {openCode === true && (
        <div className="medical-code-menu">
          <div className="medical-code-group-box">
            {MedicalCodes[0].map((Code, i: number) => (
              <div
                className="medi-code-container"
                onClick={onClickCode(Code)}
                key={i}
              >
                <MedicalCodeItem
                  itemName={Code.name}
                  selectedCodeName={selectedCodeName}
                />
              </div>
            ))}
          </div>
          <div className="medical-code-group-box">
            {MedicalCodes[1].map((Code, i: number) => (
              <div
                className="medi-code-container"
                onClick={onClickCode(Code)}
                key={i}
              >
                <MedicalCodeItem
                  itemName={Code.name}
                  selectedCodeName={selectedCodeName}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
