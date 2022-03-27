// Components
import { iconName } from "./constants";
import PartIcon from "./PartIcon";
// Style
import "./BodyPart.css";

interface SetPartProps {
  nowPart: number;
  updatePart: (arg: number) => void;
}

export default function BodyPart(props: SetPartProps) {
  const { nowPart, updatePart } = props;

  type Part = {
    id: number;
    eng: iconName;
    kor: string;
  };

  const partOne: Part[] = [
    { id: 0, eng: "head", kor: "머리" },
    { id: 1, eng: "neck", kor: "목" },
    { id: 2, eng: "cest", kor: "가슴" },
    { id: 3, eng: "stomach", kor: "배" },
    { id: 4, eng: "back", kor: "등" },
    { id: 5, eng: "buttocks", kor: "엉덩이" },
    { id: 6, eng: "arm", kor: "팔" },
    { id: 7, eng: "leg", kor: "다리" },
    { id: 8, eng: "eye", kor: "눈" },
    { id: 9, eng: "ear", kor: "귀" },
  ];

  const partTwo: Part[] = [
    { id: 10, eng: "nose", kor: "코" },
    { id: 11, eng: "mouth", kor: "입" },
    { id: 12, eng: "body", kor: "전신" },
    { id: 13, eng: "skin", kor: "피부" },
    { id: 14, eng: "breast", kor: "유방" },
    { id: 15, eng: "genitals", kor: "생식기" },
    { id: 16, eng: "pelvis", kor: "골반" },
    { id: 17, eng: "hand", kor: "손" },
    { id: 18, eng: "foot", kor: "발" },
    { id: 19, eng: "etc", kor: "기타" },
  ];

  function onClickPart(partname: number) {
    updatePart(partname);
  }

  return (
    <div className="bodypart-container">
      <div>
        <div className="body-part-group">
          {partOne.map((part, i: number) => (
            <li key={i}>
              <button
                onClick={() => onClickPart(part.id)}
                className={
                  nowPart === part.id ? "selected-part part-btn" : "part-btn"
                }
              >
                <PartIcon h={20} w={20} color={"#FFFFFF"} icon={part.eng} />
                <p>{part.kor}</p>
              </button>
            </li>
          ))}
        </div>
      </div>
      <div>
        <ul className="body-part-group">
          {partTwo.map((part, i: number) => (
            <li key={i}>
              <button
                onClick={() => onClickPart(part.id)}
                className={
                  nowPart === part.id ? "selected-part part-btn" : "part-btn"
                }
              >
                <PartIcon h={20} w={20} color={"#FFFFFF"} icon={part.eng} />
                <p>{part.kor}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
