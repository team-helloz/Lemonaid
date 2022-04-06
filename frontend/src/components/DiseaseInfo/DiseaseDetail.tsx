// Components
import NavBar from "../NavBar";
// Router
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// Style
import "./DiseaseDetail.css";

interface Sysptom {
  no: number;
  name: string;
}

interface Subject {
  no: number;
  name: string;
}

interface relatedDisease {
  no: number;
  name: string;
}

interface Disease {
  no: number;
  name: string;
  treatment: string;
  symptom_description: string;
  cause: string;
  caution: string;
  definition: string;
  subjects: Subject[];
  related_disease: relatedDisease[];
  symptoms: Sysptom[];
  synonym: string;
  keyword: [];
}

const MedicalSubjects: Subject[] = [
  { no: 0, name: "전체" },
  { no: 1, name: "내과" },
  { no: 2, name: "신경과" },
  { no: 3, name: "정신의학과" },
  { no: 4, name: "외과" },
  { no: 5, name: "정형외과" },
  { no: 6, name: "신경외과" },
  { no: 7, name: "흉부외과" },
  { no: 8, name: "성형외과" },
  { no: 9, name: "마취통증과" },
  { no: 10, name: "산부인과" },
  { no: 11, name: "소아청소년과" },
  { no: 12, name: "안과" },
  { no: 13, name: "이비인후과" },
  { no: 14, name: "피부과" },
  { no: 15, name: "비뇨기과" },
  { no: 16, name: "영상의학과" },
  { no: 17, name: "방사선과" },
  { no: 18, name: "병리과" },
  { no: 19, name: "진단의학과" },
  { no: 20, name: "결핵과" },
  { no: 21, name: "재활의학과" },
  { no: 22, name: "핵의학과" },
  { no: 23, name: "가정의학과" },
  { no: 24, name: "응급의학과" },
  { no: 25, name: "직업환경과" },
  { no: 26, name: "예방의학과" },
  { no: 49, name: "치과" },
  { no: 80, name: "한의과" },
];

export default function DiseaseDetail(Params: any) {
  const [disease, setDisease] = useState<Disease>(Params);
  const history = useHistory();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  function routeDetail(diseaseno: number) {
    history.push(`/disease/${diseaseno}`);
  }

  const handleLoad = () => {
    const disNo = Params.match.params.diseaseno;
    axios
      .get(`/disease/${disNo}`)
      .then((res) => {
        console.log(res.data.data);
        setDisease(res.data.data);
        console.log(disease);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    handleLoad();
  }, [Params.match.params.diseaseno]);

  function routeMedical(subjects: Subject[]) {
    let subjectId = 0;
    let subjectName = "전체";
    if (subjects.length > 0) {
      let subjectNo = subjects[0].no;
      let subject = MedicalSubjects.find((subject) => subject.no === subjectNo);
      if (subject !== undefined) {
        subjectId = subject.no;
        subjectName = subject.name;
      }
    }

    history.push({
      pathname: "/medical",
      state: {
        subjectId: subjectId,
        subjectName: subjectName,
      },
    });
  }

  return (
    <div>
      <NavBar />
      <div className="d-detail-page">
        <div className="d-detail-content">
          <div className="d-detail-title">
            <div className="dd-name-title">
              <p>질병명</p>
            </div>
            <div className="dd-main-title">
              <p className="d-detail-name">{disease.name}</p>
              <button className="d-medical-btn">
                <img
                  onClick={() => routeMedical(disease.subjects)}
                  src="/map.png"
                  alt="map"
                />
              </button>
            </div>
            <div className="title-small">
              <p>진료과목</p>
              {disease.symptoms !== undefined && (
                <>
                  {disease.subjects.map((subject, i: number) => (
                    <p className="title-sub" key={i}>
                      {subject.name}
                    </p>
                  ))}
                </>
              )}
            </div>
            {disease.keyword !== undefined && (
              <div className="title-small">
                <p>키워드</p>
                {disease.keyword.map((keyw, i: number) => (
                  <p className="title-sub2" key={i}>
                    #{keyw}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="dd-2-box">
            <div className="d-item-box">
              <p className="d-item-mini-title">증상</p>
              {disease.symptoms !== undefined ? (
                <div className="d-detail-list">
                  {disease.symptoms.map((symptom, i: number) => (
                    <>
                      {i < disease.symptoms.length - 1 && (
                        <span key={i}>{symptom.name}, </span>
                      )}
                      {i === disease.symptoms.length - 1 && (
                        <span key={i}>{symptom.name}</span>
                      )}
                    </>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">관련 질병</p>
              {disease.symptoms !== undefined ? (
                <div className="d-detail-list">
                  {disease.related_disease.map((relate, i: number) => (
                    <span
                      onClick={() => routeDetail(relate.no)}
                      className="dd-hash-tag"
                      key={i}
                    >
                      {relate.name}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="d-item-box">
              <p className="d-item-mini-title">동의어</p>
              <div className="d-detail-list">
                {disease.synonym !== "" ? <p>{disease.synonym}</p> : <p>-</p>}
              </div>
            </div>
            <div className="d-item-img-box">
              <img
                src={`https://j6d108.p.ssafy.io/images/disease/${disease.no}.jpg`}
                alt=""
              />
            </div>
          </div>
          <div className="dd-content">
            <div className="dd-content-title">
              <span>정의</span>
            </div>
            <div className="dd-content-content">
              {disease.definition !== "" ? (
                <p>{disease.definition}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>원인</span>
            </div>
            <div className="dd-content-content">
              {disease.cause !== "" ? <p>{disease.cause}</p> : <p>없음</p>}
            </div>
            <div className="dd-content-title">
              <span>진단</span>
            </div>
            <div className="dd-content-content">
              {disease.symptom_description !== "" ? (
                <p>{disease.symptom_description}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>치료</span>
            </div>
            <div className="dd-content-content">
              {disease.treatment !== "" ? (
                <p>{disease.treatment}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>주의사항</span>
            </div>
            <div className="dd-content-content">
              {disease.caution !== "" ? <p>{disease.caution}</p> : <p>없음</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
