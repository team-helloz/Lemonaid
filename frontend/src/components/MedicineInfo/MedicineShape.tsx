import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineShape.css";

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

  return (
    <>
      <div className="medicine-shape-title">찾으시는 약은 어떤 모양인가요?</div>
      <div className="medicine-shape-group-box">
        <ul className="medicine-shape-group">
          <li>
            <span onClick={onClickShape("모양전체")}>
              <MedicineSerachItem itemName="모양전체"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("원형")}>
              <MedicineSerachItem itemName="원형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("타원형")}>
              <MedicineSerachItem itemName="타원형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("반원형")}>
              <MedicineSerachItem itemName="반원형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("삼각형")}>
              <MedicineSerachItem itemName="삼각형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("사각형")}>
              <MedicineSerachItem itemName="사각형"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
      <div className="medicine-shape-group-box">
        <ul className="medicine-shape-group">
          <li>
            <span onClick={onClickShape("마름모형")}>
              <MedicineSerachItem itemName="마름모형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("장방형")}>
              <MedicineSerachItem itemName="장방형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("오각형")}>
              <MedicineSerachItem itemName="오각형"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickShape("육각형")}>
              <MedicineSerachItem itemName="육각형"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
      <div className="medicine-shape-bottom"></div>
    </>
  );
}
