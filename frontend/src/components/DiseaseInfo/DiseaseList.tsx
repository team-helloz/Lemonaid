import "./BodyPart.css";


export default function DiseaseList() {

  const diseases = [
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "img",
    },
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "img",
    },
    {
      name: "감기",
      symptoms: ["기침", "콧물"],
      related: ["폐렴"],
      courses: ["내과"],
      sames: ["가암기"],
      image: "img",
    },
  ]

  return (
    <div className="disease-group-box">
      {diseases.map((disease, i: number) => (
        <div key={i}>
          <div>
            <h3>{disease.name}</h3>

            <p>증상</p>
            <ul className="body-part-group">
            {disease.symptoms.map((symptom, j: number) => (
              <li key={j}>
                {symptom}
              </li>
            ))}
            </ul>
            <br />

            <p>관련 질환</p>
            <ul className="body-part-group">
            {disease.related.map((relate, j: number) => (
              <li key={j}>
                {relate}
              </li>
            ))}
            </ul>
            <br />

            <p>진료 과목</p>
            <ul className="body-part-group">
            {disease.courses.map((course, j: number) => (
              <li key={j}>
                {course}
              </li>
            ))}
            </ul>
            <br />
            
            <p>동의어</p>
            <ul className="body-part-group">
            {disease.sames.map((same, j: number) => (
              <li key={j}>
                {same}
              </li>
            ))}
            </ul>
            <br />
          </div>
          <div>{disease.image}</div>
        </div>
      ))}
    </div>
  );
}