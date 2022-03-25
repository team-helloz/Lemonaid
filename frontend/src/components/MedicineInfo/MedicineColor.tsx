import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineColor.css";

interface MedicineColorProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineColor(props: MedicineColorProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("shape", "");
  };

  const onClickColor = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("color", value);
  };

  return (
    <>
      <div className="medicine-shape-title">찾으시는 약은 어떤 색깔인가요?</div>
      <div className="medicine-color-group-box">
        <ul className="medicine-color-group">
          <li>
            <span onClick={onClickColor("색깔전체")}>
              <MedicineSerachItem itemName="색깔전체"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("하양")}>
              <MedicineSerachItem itemName="하양"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("노랑")}>
              <MedicineSerachItem itemName="노랑"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("주황")}>
              <MedicineSerachItem itemName="주황"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("분홍")}>
              <MedicineSerachItem itemName="분홍"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("빨강")}>
              <MedicineSerachItem itemName="빨강"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
      <div className="medicine-color-group-box">
        <ul className="medicine-color-group">
          <li>
            <span onClick={onClickColor("갈색")}>
              <MedicineSerachItem itemName="갈색"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("연두")}>
              <MedicineSerachItem itemName="연두"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("초록")}>
              <MedicineSerachItem itemName="초록"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("청록")}>
              <MedicineSerachItem itemName="청록"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickColor("파랑")}>
              <MedicineSerachItem itemName="파랑"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
      <div className="medicine-color-bottom">
        <img
          src={require("../../assets/back-icon.png")}
          onClick={onClickBack}
        ></img>
      </div>
    </>
  );
}
