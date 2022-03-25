import MedicineSerachItem from "./MedicineSerachItem";
import "./MedicineFomula.css";

interface MedicineFomulaProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineFomula(props: MedicineFomulaProps) {
  const { page, updatePage, updateCondition } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("color", "");
    updateCondition("fomula", "");
  };

  const onClickInit = () => {
    updatePage(1);
    updateCondition("shape", "");
    updateCondition("color", "");
    updateCondition("fomula", "");
  };

  const onClickFomula = (value: string) => () => {
    updatePage(page + 1);
    updateCondition("fomula", value);
  };

  return (
    <>
      <div className="medicine-fomula-title">
        찾으시는 약은 어떤 제형인가요?
      </div>
      <div className="medicine-fomula-group-box">
        <ul className="medicine-fomula-group">
          <li>
            <span onClick={onClickFomula("제형전체")}>
              <MedicineSerachItem itemName="제형전체"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickFomula("정제류")}>
              <MedicineSerachItem itemName="정제류"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickFomula("경질캡슐")}>
              <MedicineSerachItem itemName="경질캡슐"></MedicineSerachItem>
            </span>
          </li>
          <li>
            <span onClick={onClickFomula("연질캡슐")}>
              <MedicineSerachItem itemName="연질캡슐"></MedicineSerachItem>
            </span>
          </li>
        </ul>
      </div>
      <div className="medicine-fomula-bottom">
        <img
          src={require("../../assets/back-icon.png")}
          onClick={onClickBack}
        ></img>
      </div>
    </>
  );
}
