// Router
import { useHistory } from "react-router-dom"
// Style
import "./DiseaseList.css";


export default function DiseaseList() {

  const history = useHistory();

  function routeDetail(diseasename: string) {
    history.push(`/disease/${diseasename}`)
  }

  const diseases = [
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

  return (
    <div className="disease-list">
      {diseases.map((disease, i: number) => (
        <div
          key={i}
          className="disease-item"
        >
          <div>
            <h3 onClick={() => routeDetail(disease.name)}>{disease.name}</h3>
            
            <p className="list-title">증상</p>
            <hr className="list-line" />
            <div className="detail-list">
              {disease.symptoms.map((symptom, j: number) => (
                <p key={j}>
                  {symptom}
                </p>
              ))}
            </div>

            <p className="list-title">관련 질환</p>
            <hr className="list-line" />
            <div className="detail-list">
              {disease.related.map((relate, j: number) => (
                <p key={j}>
                  {relate}
                </p>
              ))}
            </div>

            <p className="list-title">진료 과목</p>
            <hr className="list-line" />
            <div className="detail-list">
              {disease.courses.map((course, j: number) => (
                <p key={j}>
                  {course}
                </p>
              ))}
            </div>

            <p className="list-title">동의어</p>
            <hr className="list-line" />
            <div className="detail-list">
              {disease.sames.map((same, j: number) => (
                <p key={j}>
                  {same}
                </p>
              ))}
            </div>
          </div>
          <div className="disease-img">{disease.image}</div>
        </div>
      ))}
    </div>
  );
}