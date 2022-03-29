// React
import { useState } from "react";
import { KeyboardEvent } from "react";
// Router
import { useHistory } from "react-router-dom";
// Style
import "./MedicineSearch.css";

interface MedicineStepProps {
  page: number;
  updatePage: (arg: number) => void;
}

export default function MedicineStepOne(props: MedicineStepProps) {
  
  const { page, updatePage } = props;
  const [MedicineName, setmedicine] = useState("");
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
    console.log(page)
    updatePage(page + 1);
  }

  const MostMedicine = [
    {
      title: "타이레놀",
      img: "제형전체"
    },
    {
      title: "타이레놀",
      img: "제형전체"
    },
    {
      title: "타이레놀",
      img: "제형전체"
    },
    {
      title: "타이레놀",
      img: "제형전체"
    },
    {
      title: "타이레놀",
      img: "제형전체"
    },
  ]

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
          {MostMedicine.map((medicine, i: number) => (
            <div
              key={i}
              onClick={() => routeDetail(medicine.title)}
              className="medicine-most"
            >
              <img
                className="medicine-most-img"
                src={`/MedicineSearch/${medicine.img}.png`}
                alt=""
              />
              <p>{medicine.title}</p>
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
