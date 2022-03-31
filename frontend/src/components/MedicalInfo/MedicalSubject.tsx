import { useEffect, useState } from "react";
import MedicalSubjectItem from "./MedicalSubjectItem";
import "./MedicalSubject.css";

export interface MedicalSubjectProps {
  openSubject: boolean;
  UpdateSubJect: (subjectId: number, subjectName: string) => void;
  selectedSubjectName: string;
}

export default function MedicalSubject(props: MedicalSubjectProps) {
  const MedicalSubjects = [
    [
      { id: 0, name: "전체" },
      { id: 1, name: "내과" },
      { id: 2, name: "신경과" },
      { id: 3, name: "정신의학과" },
      { id: 4, name: "외과" },
      { id: 5, name: "정형외과" },
      { id: 6, name: "신경외과" },
      { id: 7, name: "흉부외과" },
    ],
    [
      { id: 8, name: "성형외과" },
      { id: 9, name: "마취통증과" },
      { id: 10, name: "산부인과" },
      { id: 11, name: "소아청소년과" },
      { id: 12, name: "안과" },
      { id: 13, name: "이비인후과" },
      { id: 14, name: "피부과" },
      { id: 15, name: "비뇨기과" },
    ],
    [
      { id: 16, name: "영상의학과" },
      { id: 17, name: "방사선과" },
      { id: 18, name: "병리과" },
      { id: 19, name: "진단의학과" },
      { id: 20, name: "결핵과" },
      { id: 21, name: "재활의학과" },
      { id: 22, name: "핵의학과" },
      { id: 23, name: "가정의학과" },
    ],
    [
      { id: 24, name: "응급의학과" },
      { id: 25, name: "직업환경과" },
      { id: 26, name: "예방의학과" },
      { id: 49, name: "치과" },
      { id: 80, name: "한의과" },
    ],
  ];

  const { openSubject, UpdateSubJect, selectedSubjectName } = props;

  const onClickSubject = (subject: any) => () => {
    UpdateSubJect(subject.id, subject.name);
  };

  return (
    <>
      {openSubject === true && (
        <div className="medical-subject-menu">
          <div className="medical-subject-group-box">
            <ul className="medical-subject-group">
              {MedicalSubjects[0].map((subject, i: number) => (
                <li onClick={onClickSubject(subject)} key={i}>
                  <MedicalSubjectItem
                    itemName={subject.name}
                    selectedSubjectName={selectedSubjectName}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="medical-subject-group-box">
            <ul className="medical-subject-group">
              {MedicalSubjects[1].map((subject, i: number) => (
                <li onClick={onClickSubject(subject)} key={i}>
                  <MedicalSubjectItem
                    itemName={subject.name}
                    selectedSubjectName={selectedSubjectName}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="medical-subject-group-box">
            <ul className="medical-subject-group">
              {MedicalSubjects[2].map((subject, i: number) => (
                <li onClick={onClickSubject(subject)} key={i}>
                  <MedicalSubjectItem
                    itemName={subject.name}
                    selectedSubjectName={selectedSubjectName}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="medical-subject-group-box">
            <ul className="medical-subject-group">
              {MedicalSubjects[3].map((subject, i: number) => (
                <li onClick={onClickSubject(subject)} key={i}>
                  <MedicalSubjectItem
                    itemName={subject.name}
                    selectedSubjectName={selectedSubjectName}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
