// Router
import { useHistory } from "react-router-dom"
// Style
import "./DiseaseList.css";
// SVG
import Popup from "../../assets/popup.svg"

interface SymptomProps {
  nowSymptoms: string[];
}

export default function DiseaseList(props: SymptomProps) {
  
  const { nowSymptoms } = props

  const history = useHistory();

  function routeDetail(diseasename: string) {
    history.push(`/disease/${diseasename}`)
  }

  const headDiseases = [
    {
      name: "뚝배기 깨짐",
      symptoms: ["머리 증상 1", "두통"],
      related: ["뇌진탕"],
      courses: ["외과"],
      sames: ["머리 깨짐"],
      image: "이미지",
    },
    {
      name: "머리 질병 1",
      symptoms: ["머리 증상 1", "치통"],
      related: ["머리 질병 2"],
      courses: ["내과"],
      sames: ["머리머리"],
      image: "이미지",
    },
    {
      name: "머리 질병 3",
      symptoms: ["머리 증상 1", "건망증"],
      related: ["머리 질병 4"],
      courses: ["내과"],
      sames: ["머어리"],
      image: "이미지",
    }
  ]

  const elseDiseases = [
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "이미지",
    },
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "이미지",
    },
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "이미지",
    },
  ]

  let diseases = []

  if (nowSymptoms.includes("머리 증상 1")) {
    diseases = headDiseases
  } else if (nowSymptoms.length > 0) {
    diseases = elseDiseases
  } else {
    diseases = elseDiseases
  }

  return (
    <div className="disease-list">
      {diseases.map((disease, i: number) => (
        <div
          key={i}
          className="disease-item disease-box"
        >
          <div>
            <div className="detail-list">
              <p
                onClick={() => routeDetail(disease.name)}
                className="disease-name"
              >{disease.name}</p>
              <img src={Popup} alt="" width={"18px"} onClick={() => routeDetail(disease.name)} className="popup-btn" />
            </div>
            
            <div className="list-title-box">
              <div className="item-title-blue"></div>
              <p className="list-title">증상</p>
            </div>
            <div className="detail-item-list">
              {disease.symptoms.map((symptom, j: number) => (
                <p key={j}>
                  {symptom}
                </p>
              ))}
            </div>

            <div className="list-title-box">
              <div className="item-title-blue"></div>
              <p className="list-title">관련 질환</p>
            </div>
            <div className="detail-item-list">
              {disease.related.map((relate, j: number) => (
                <p
                  key={j}
                  onClick={() => routeDetail(relate)}
                  className="related-disease"
                >
                  {relate}
                </p>
              ))}
            </div>

            <div className="list-title-box">
              <div className="item-title-blue"></div>
              <p className="list-title">진료 과목</p>
            </div>
            <div className="detail-item-list">
              {disease.courses.map((course, j: number) => (
                <p key={j}>
                  {course}
                </p>
              ))}
            </div>

            <div className="list-title-box">
              <div className="item-title-blue"></div>
              <p className="list-title">동의어</p>
            </div>
            <div className="detail-item-list">
              {disease.sames.map((same, j: number) => (
                <p key={j}>
                  {same}
                </p>
              ))}
            </div>
          </div>
          <div
            onClick={() => routeDetail(disease.name)}
            className="disease-img"
          >{disease.image}</div>
        </div>
      ))}
    </div>
  );
}