// Components
import NavBar from "../components/NavBar";
import BodyPart from "../components/DiseaseInfo/BodyPart";
import Symptom from "../components/DiseaseInfo/Symptom";
import DiseaseList from "../components/DiseaseInfo/DiseaseList";
// Type
import { iconName } from "../components/DiseaseInfo/constants";

export default function DiseaseInfo() {

  type Part = {
    id: number,
    eng: iconName,
    kor: string,
  }

  const partOne: Part[] = [
    { id: 1, eng: "head", kor: "머리" },
    { id: 2, eng: "neck", kor: "목" },
    { id: 3, eng: "cest", kor: "가슴" },
    { id: 4, eng: "stomach", kor: "배" },
    { id: 5, eng: "back", kor: "등" },
    { id: 6, eng: "buttocks", kor: "엉덩이" },
    { id: 7, eng: "arm", kor: "팔" },
    { id: 8, eng: "leg", kor: "다리" },
    { id: 9, eng: "eye", kor: "눈" },
    { id: 10, eng: "ear", kor: "귀" },
  ]

  const partTwo: Part[] = [
    { id: 1, eng: "nose", kor: "코" },
    { id: 1, eng: "mouth", kor: "입" },
    { id: 1, eng: "body", kor: "전신" },
    { id: 1, eng: "skin", kor: "피부" },
    { id: 1, eng: "breast", kor: "유방" },
    { id: 1, eng: "genitals", kor: "생식기" },
    { id: 1, eng: "pelvis", kor: "골반" },
    { id: 1, eng: "hand", kor: "손" },
    { id: 1, eng: "foot", kor: "발" },
    { id: 1, eng: "etc", kor: "기타" },
  ]

  return (
    <div>
      <NavBar />
      <h1>증상/질병 조회</h1>
      <BodyPart parts={partOne}/>
      <br />
      <BodyPart parts={partTwo}/>
      <br />
      <p>증상 : </p>
      <Symptom />
      <br />
      <hr />
      <DiseaseList />
    </div>
  );
}
