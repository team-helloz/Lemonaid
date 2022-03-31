import { useDispatch, useSelector } from "react-redux";
import { adddisease, deldisease } from "../../redux/Disease/action";
import { RootState } from "../../redux/store";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// Style
import "./Symptom.css";

interface SetPartProps {
  nowPart: string;
  nowSymptoms: string[];
  addSymptom: (arg: string) => void;
  removeSymptom: (arg: string[]) => void;
}

interface Sysptom {
  no: number;
  name: string;
}
export default function Symptom(props: SetPartProps) {
  const [symptoms, setSymptom] = useState<Sysptom[]>([]);
  const handleLoad = () => {
    axios
      .get(`/disease/symptom?site=${nowPart}`)
      .then((res) => {
        setSymptom(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleLoad();
  }, []);
  const { nowPart, nowSymptoms, addSymptom, removeSymptom } = props;
  const dispatch = useDispatch();

  const nowList = useSelector((state: RootState) => state.diseaseReducer);
  function onClickSymptom(symptomname: string) {
    handleLoad();
    if (nowSymptoms.includes(symptomname)) {
      let newSymptoms = nowSymptoms.filter(
        (element) => element !== symptomname
      );
      removeSymptom(newSymptoms);
      dispatch(deldisease(symptomname));
    } else if (nowSymptoms.length < 6) {
      addSymptom(symptomname);
      dispatch(adddisease(nowSymptoms));
    } else {
      alert("증상은 최대 6개까지 선택 가능합니다.");
    }
  }
  useEffect(() => {
    removeSymptom(nowList.diseaseList);
  }, []);
  useEffect(() => {
    handleLoad();
  }, [nowPart]);
  useEffect(() => {
    if (nowSymptoms.length !== 0) {
      dispatch(adddisease(nowSymptoms));
    }
  }, [nowSymptoms]);
  return (
    <div className="symptom-group-box">
      {symptoms.map((symptom) => (
        <button
          key={symptom.no}
          onClick={() => onClickSymptom(symptom.name)}
          className={
            nowSymptoms.includes(symptom.name)
              ? "selected-symptom sys-btn"
              : "symptom-btn sys-btn"
          }
        >
          {symptom.name}
        </button>
      ))}
    </div>
  );
}
