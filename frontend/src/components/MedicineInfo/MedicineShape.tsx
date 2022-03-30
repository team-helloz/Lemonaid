import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineSearch.css";

interface MedicineShapeProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineShape(props: MedicineShapeProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickShape = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("shape", value);
  };

  const onClickBack = () => {
    updatePage(page - 1);
  };

  const MedicineShapeList = [
    [
      "모양전체",
      "원형",
      "타원형",
      "반원형",
      "삼각형",
      "사각형"
    ],
    [
      "마름모형",
      "장방형",
      "오각형",
      "육각형",
      "팔각형",
      "기타"
    ]
  ]

  return (
    <div className="medicine-search-box">
      <div>
        <p className="medicine-search-title">STEP{page}. 찾으시는 약은 어떤 모양인가요?</p>
        <div className="medicine-search-group-box">
          <ul className="medicine-search-group">
            {MedicineShapeList[0].map((medicine, i: number) => (
              <li
                onClick={onClickShape(medicine)}
                key={i}
              >
                <MedicineSerachItem
                  itemName={medicine}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="medicine-search-group-box">
          <ul className="medicine-search-group">
            {MedicineShapeList[1].map((medicine, i: number) => (
              <li
                onClick={onClickShape(medicine)}
                key={i}
              >
                <MedicineSerachItem
                  itemName={medicine}
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
          <p>의약품 명칭으로 검색하기</p>
        </div>
        <p>NEXT STEP - 색상</p>
      </div>
    </div>
  );
}
