// Components
import NavBar from "../NavBar";
// Style
import "./BodyPart.css";

export default function DiseaseDetail() {

  return (
    <div>
      <NavBar />
      <h1>질병 상세조회</h1>
      
      <div>
        <p>질병 이름</p>
        <p>증상:</p>
        <p>관련질환:</p>
        <p>진료과:</p>
        <p>동의어:</p>
      </div>
      <p>정의</p>
      <p>원인</p>
      <p>진단</p>
      <p>진단</p>
      <p>치료</p>
      <p>경과</p>
    </div>
  );
}