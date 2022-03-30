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
