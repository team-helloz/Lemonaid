// Components
import NavBar from "../NavBar";
// Router
import { useHistory } from "react-router-dom"
// Style
import "./DiseaseDetail.css";

export default function DiseaseDetail() {

  const history = useHistory();

  function routeMedical() {
    history.push("/medical")
  }

  const diseaseDetailInfo = {
    name: "감기",
    symptoms: [
      "머리 증상 2", "코 증상 1", "입 증상 2", "목 증상 1"
    ],
    related: [
      "폐렴", "코로나", "독감"
    ],
    courses: [
      "내과", "이비인후과"
    ],
    sames: [
      "가암기"
    ],
    definition: "감기란 무엇인가?",
    cause: "어째서 감기에 걸리는가?",
    diagnosis: "감기라고 어찌 판단하는가?",
    therapy: "감기는 어떻게 치료하는가?",
    pass: "감기는 어떤 순서로 진행되는가?",
    notandum: "감기는 무엇을 주의해야 하는가?"
  }

  return (
    <div>
      <NavBar />

      <div className="d-detail-page">
        <div className="d-detail-content">
          <div className="d-detail-title">
            <p className="d-detail-name">{diseaseDetailInfo.name}</p>
            <button
              onClick={routeMedical}
              className="d-medical-btn"
            >
              병원 찾기
            </button>
          </div>

          <div className="d-item-box">
            <div className="d-item-blue"></div>
            <p className="d-item-mini-title">증상</p>
          </div>
          <div className="d-detail-list">
            {diseaseDetailInfo.symptoms.map((symptom, i: number) => (
              <p key={i}>
                {symptom}
              </p>
            ))}
          </div>

          <div className="d-item-box">
            <div className="d-item-blue"></div>
            <p className="d-item-mini-title">관련질환</p>
          </div>
          <div className="d-detail-list">
            {diseaseDetailInfo.related.map((relate, i: number) => (
              <p key={i}>
                {relate}
              </p>
            ))}
          </div>

          <div className="d-item-box">
            <div className="d-item-blue"></div>
            <p className="d-item-mini-title">진료과목</p>
          </div>
          <div className="d-detail-list">
            {diseaseDetailInfo.courses.map((course, i: number) => (
              <p key={i}>
                {course}
              </p>
            ))}
          </div>

          <div className="d-item-box">
            <div className="d-item-blue"></div>
            <p className="d-item-mini-title">동의어</p>
          </div>
          <div className="d-detail-list">
            {diseaseDetailInfo.sames.map((same, i: number) => (
              <p key={i}>
                {same}
              </p>
            ))}
          </div>

          <p>정의</p>
          <p>{diseaseDetailInfo.definition}</p>
          <p>원인</p>
          <p>{diseaseDetailInfo.cause}</p>
          <p>진단</p>
          <p>{diseaseDetailInfo.diagnosis}</p>
          <p>치료</p>
          <p>{diseaseDetailInfo.therapy}</p>
          <p>경과</p>
          <p>{diseaseDetailInfo.pass}</p>
          <p>주의사항</p>
          <p>{diseaseDetailInfo.notandum}</p>
        </div>
      </div>
    </div>
  );
}