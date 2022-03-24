import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineDivide.css";

interface MedicineDivideProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineDivide(props: MedicineDivideProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("fomula", "");
    updateCondition("divide", "");
  };

  const onClickInit = () => {
    updatePage(1);
    updateCondition("shape", "");
    updateCondition("color", "");
    updateCondition("fomula", "");
    updateCondition("divide", "");
  };

  const onClickDivide = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("divide", value);
  };

  return (
    <>
      <h3>찾으시는 약은 어떤 분할선이 있나요?</h3>
      <div className="medicine-divide-group-box">
        <ul className="medicine-divide-group">
          <li>
            <button onClick={onClickBack}>뒤로가기</button>
          </li>
          <li>
            <button onClick={onClickInit}>초기화</button>
          </li>
          <li>
            <span onClick={onClickDivide("분할선전체")}>
              <MedicineSerachItem itemName="분할선전체"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickDivide("(-)형")}>
              <MedicineSerachItem itemName="(-)형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickDivide("(+)형")}>
              <MedicineSerachItem itemName="(+)형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickDivide("기타")}>
              <MedicineSerachItem itemName="기타"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
