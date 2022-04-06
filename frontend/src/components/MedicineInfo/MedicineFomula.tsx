import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineSearch.css";

interface MedicineFomulaProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineFomula(props: MedicineFomulaProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("color", "STEP2");
    updateCondition("fomula", "STEP3");
  };

  const onClickFomula = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("fomula", value);
  };

  const MedicineFomulaList = [
    "전체",
    "정제",
    "경질캡슐",
    "연질캡슐",
    "기타"
  ]

  return (
    <div className="medicine-search-box">
      <div>  
        <p className="medicine-search-title">STEP{page}. 찾으시는 약은 어떤 제형인가요?</p>
        <div className="medicine-search-group-box">
          <ul className="medicine-search-group">
            {MedicineFomulaList.map((formula, i: number) => (
              <li
                onClick={onClickFomula(formula)}
                key={i}
              >
                <MedicineSerachItem
                  itemName={formula}
                />
              </li>
            ))}
          </ul>
        </div>
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
        <p
          onClick={onClickFomula("전체")}
        >NEXT STEP - 분할선</p>
      </div>
    </div>
  );
}
