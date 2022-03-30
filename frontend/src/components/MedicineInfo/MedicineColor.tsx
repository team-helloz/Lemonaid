import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineSearch.css";

interface MedicineColorProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineColor(props: MedicineColorProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("shape", "STEP1");
  };

  const onClickColor = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("color", value);
  };

  const MedicineColorList = [
    [
      "색상전체",
      "하양",
      "노랑",
      "주황",
      "분홍",
      "빨강"
    ],
    [
      "갈색",
      "연두",
      "초록",
      "청록",
      "파랑",
      "남색"
    ],
    [
      "자주",
      "보라",
      "회색",
      "검정",
      "투명"
    ]
  ]

  return (
    <div className="medicine-search-box">
      <p className="medicine-search-title">STEP{page}. 찾으시는 약은 어떤 색상인가요?</p>
      <div className="medicine-search-group-box">
        <ul className="medicine-search-group">
          {MedicineColorList[0].map((color, i: number) => (
            <li
              onClick={onClickColor(color)}
              key={i}
            >
              <MedicineSerachItem
                itemName={color}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="medicine-search-group-box">
        <ul className="medicine-search-group">
        {MedicineColorList[1].map((color, i: number) => (
            <li
              onClick={onClickColor(color)}
              key={i}
            >
              <MedicineSerachItem
                itemName={color}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="medicine-search-group-box">
        <ul className="medicine-search-group">
        {MedicineColorList[2].map((color, i: number) => (
            <li
              onClick={onClickColor(color)}
              key={i}
            >
              <MedicineSerachItem
                itemName={color}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="medicine-search-bottom">
        <div className="medicine-search-back">
          <img
            onClick={onClickBack}
            className="back-img"
            src={require("../../assets/back-icon.png")}
            alt=""
          />
          <p>STEP{page - 1}</p>
        </div>
        <p>NEXT STEP - 제형</p>
      </div>
    </div>
  );
}
