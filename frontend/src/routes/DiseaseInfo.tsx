import NavBar from "../components/NavBar";
import BodyPart1 from "../components/DiseaseInfo/BodyPart1";
import BodyPart2 from "../components/DiseaseInfo/BodyPart2";

export default function DiseaseInfo() {
  return (
    <div>
      <NavBar />
      <h1>증상/질병 조회</h1>
      <BodyPart1 />
      <br />
      <BodyPart2 />
    </div>
  );
}
