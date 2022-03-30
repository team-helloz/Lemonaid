// React
import { useEffect, useState } from "react";
import { KeyboardEvent } from "react";
// Router
import { useHistory } from "react-router-dom";
// axios
import axios from "axios"
// Style
import "./MedicineSearch.css";

interface MedicineStepProps {
  page: number;
  updatePage: (arg: number) => void;
}

interface MedicineHit {
  name: string;
  shape: string;
}

export default function MedicineStepOne(props: MedicineStepProps) {
  
  const { page, updatePage } = props;
  const [MedicineName, setmedicine] = useState("");
  const [medicineHit, setHit] = useState<MedicineHit[]>([]);
  const history = useHistory();

  const intputName = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setmedicine(value);
  }

  function routeDetail(medicinename: string) {
    history.push(`/medicine/list/${medicinename}`);
  }

  function keyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter" && MedicineName !== "") {
      routeDetail(MedicineName)
    }
  }

  function onClickNextStep() {
    updatePage(page + 1);
  }

  const handleLoad = () => {
    axios
      .get(`/medicine/hit`)
      .then((res) => {
        console.log(res);
        setHit(res.data.medicines)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className="medicine-search-step-one">
        <p className="medicine-search-logo">LemonMedicine</p>
        <input
          onChange={intputName}
          onKeyDown={keyDownHandler}
          className="medicine-search-input-name"
          placeholder="약품 명칭 검색"
          type="text"
        />
        <div className="medicine-most-list">
          {medicineHit.map((medicine, i: number) => (
            <div
              key={i}
              onClick={() => routeDetail(medicine.name)}
              className="medicine-most"
            >
              <img
                className="medicine-most-img"
                src={`/MedicineSearch/${medicine.shape}.png`}
                alt=""
              />
              <p>{medicine.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="medicine-search-one-bottom">
        <div className="medicine-search-back">
          <img
            className="back-img back-none"
            src={require("../../assets/back-icon.png")}
            alt=""
          />
        </div>
        <p onClick={onClickNextStep}>모양으로 검색하기 {'>'}</p>
      </div>
    </div>
  );
}
