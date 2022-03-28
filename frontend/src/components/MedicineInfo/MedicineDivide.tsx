import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineSearch.css";

interface MedicineDivideProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineDivide(props: MedicineDivideProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("fomula", "STEP3");
    updateCondition("divide", "STEP4");
  };

  const onClickDivide = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("divide", value);
  };

  const MedicineDivideList = [
    "분할선전체",
    "없음",
    "(-)형",
    "(+)형",
    "기타"
  ]

  return (
    <div className="medicine-search-box">
      <div>
        <p className="medicine-search-title">찾으시는 약은 어떤 분할선이 있나요?</p>
        <div className="medicine-search-group-box">
          <ul className="medicine-search-group">
            {MedicineDivideList.map((divide, i: number) => (
              <li
                onClick={onClickDivide(divide)}
                key={i}
              >
                <MedicineSerachItem
                  itemName={divide}
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
        <p>NEXT STEP - 식별문자</p>
      </div>
    </div>
  );
}
