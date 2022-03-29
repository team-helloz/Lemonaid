import { useEffect, useState } from "react";
import "./MedicalSubject.css";

export interface MedicalSubjectProps {
  openSubject: boolean;
  UpdateSubjects: (subjectsData: number[]) => void;
}

export default function MedicalSubject(props: MedicalSubjectProps) {
  const MedicalSubjects = [
    { id: 1, subject: "내과" },
    { id: 2, subject: "소아과" },
    { id: 3, subject: "피부과" },
    { id: 4, subject: "이비인후과" },
    { id: 5, subject: "정형외과" },
    { id: 6, subject: "외과" },
    { id: 7, subject: "가정의학과" },
    { id: 8, subject: "신경외과" },
    { id: 9, subject: "마취통증과" },
    { id: 10, subject: "성형외과" },
    { id: 11, subject: "산부인과" },
    { id: 12, subject: "안과" },
    { id: 13, subject: "정신의학과" },
    { id: 14, subject: "비뇨기과" },
    { id: 15, subject: "치과" },
    { id: 16, subject: "한의원" },
    { id: 16, subject: "신경과" },
  ];

  const { openSubject, UpdateSubjects } = props;

  const [checkedState, setCheckedState] = useState(
    new Array(MedicalSubjects.length).fill(true)
  );

  useEffect(() => {
    updateData(checkedState);
  }, []);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    updateData(updatedCheckedState);
  };

  const updateData = (checkedState: boolean[]) => {
    let subjectsId = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i] === true) {
        subjectsId.push(MedicalSubjects[i].id);
      }
    }

    UpdateSubjects(subjectsId);
  };

  return (
    <>
      {openSubject === true && (
        <div className="medi-subject-menu">
          <ul className="toppings-list">
            {MedicalSubjects.map(({ subject }, index) => {
              return (
                <li key={index}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        value={subject}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>
                        {subject}
                      </label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
