import { useDispatch, useSelector } from "react-redux";
import { adddisease, deldisease } from "../../redux/Disease/action";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
// Style
import "./Symptom.css";

interface SetPartProps {
  nowPart: number;
  nowSymptoms: string[];
  addSymptom: (arg: string) => void;
  removeSymptom: (arg: string[]) => void;
}

export default function Symptom(props: SetPartProps) {
  const { nowPart, nowSymptoms, addSymptom, removeSymptom } = props;
  const dispatch = useDispatch();
  const symptoms = [
    ["머리 증상 1", "머리 증상 2", "머리 증상 3", "머리 증상 4", "머리 증상 5"],
    ["목 증상 1", "목 증상 2", "목 증상 3", "목 증상 4", "목 증상 5"],
    ["가슴 증상 1", "가슴 증상 2", "가슴 증상 3", "가슴 증상 4", "가슴 증상 5"],
    ["배 증상 1", "배 증상 2", "배 증상 3", "배 증상 4", "배 증상 5"],
    ["등 증상 1", "등 증상 2", "등 증상 3", "등 증상 4", "등 증상 5"],
    [
      "엉덩이 증상 1",
      "엉덩이 증상 2",
      "엉덩이 증상 3",
      "엉덩이 증상 4",
      "엉덩이 증상 5",
    ],
    ["팔 증상 1", "팔 증상 2", "팔 증상 3", "팔 증상 4", "팔 증상 5"],
    ["다리 증상 1", "다리 증상 2", "다리 증상 3", "다리 증상 4", "다리 증상 5"],
    ["눈 증상 1", "눈 증상 2", "눈 증상 3", "눈 증상 4", "눈 증상 5"],
    ["귀 증상 1", "귀 증상 2", "귀 증상 3", "귀 증상 4", "귀 증상 5"],
    ["코 증상 1", "코 증상 2", "코 증상 3", "코 증상 4", "코 증상 5"],
    ["입 증상 1", "입 증상 2", "입 증상 3", "입 증상 4", "입 증상 5"],
    ["전신 증상 1", "전신 증상 2", "전신 증상 3", "전신 증상 4", "전신 증상 5"],
    ["피부 증상 1", "피부 증상 2", "피부 증상 3", "피부 증상 4", "피부 증상 5"],
    ["유방 증상 1", "유방 증상 2", "유방 증상 3", "유방 증상 4", "유방 증상 5"],
    [
      "생식기 증상 1",
      "생식기 증상 2",
      "생식기 증상 3",
      "생식기 증상 4",
      "생식기 증상 5",
    ],
    ["골반 증상 1", "골반 증상 2", "골반 증상 3", "골반 증상 4", "골반 증상 5"],
    ["손 증상 1", "손 증상 2", "손 증상 3", "손 증상 4", "손 증상 5"],
    ["발 증상 1", "발 증상 2", "발 증상 3", "발 증상 4", "발 증상 5"],
    ["기타 증상 1", "기타 증상 2", "기타 증상 3", "기타 증상 4", "기타 증상 5"],
  ];
  const nowList = useSelector((state: RootState) => state.diseaseReducer);
  function onClickSymptom(symptomname: string) {
    if (nowSymptoms.includes(symptomname)) {
      let newSymptoms = nowSymptoms.filter(
        (element) => element !== symptomname
      );
      removeSymptom(newSymptoms);
      setTimeout(function () {}, 100);
      dispatch(deldisease(symptomname));
    } else {
      addSymptom(symptomname);
      setTimeout(function () {}, 100);
      dispatch(adddisease(nowSymptoms));
    }
  }
  useEffect(() => {
    removeSymptom(nowList.diseaseList);
    window.setTimeout(function () {}, 100);
  }, []);
  useEffect(() => {
    if (nowSymptoms.length !== 0) {
      dispatch(adddisease(nowSymptoms));
      setTimeout(function () {}, 100);
    }
  }, [nowSymptoms]);
  return (
    <div className="symptom-group-box">
      {symptoms[nowPart].map((symptom, i: number) => (
        <button
          key={i}
          onClick={() => onClickSymptom(symptom)}
          className={
            nowSymptoms.includes(symptom)
              ? "selected-symptom sys-btn"
              : "symptom-btn sys-btn"
          }
        >
          {symptom}
        </button>
      ))}
    </div>
  );
}
