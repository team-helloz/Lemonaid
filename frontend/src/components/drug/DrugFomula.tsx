import "./DrugFomula.css";

interface DrugFomulaProps {
  page: number;
  updatePage: (arg: number) => void;
  updateFomula: (arg: string) => void;
}

export default function DrugFomula(props: DrugFomulaProps) {
  const { page, updatePage, updateFomula } = props;

  const onClickBack = () => {
    updatePage(page - 1);
    updateFomula("");
  };

  const onClickInit = () => {
    updatePage(1);
  };

  const onClickFomula = (Fomula: string) => () => {
    updatePage(page + 1);
    updateFomula(Fomula);
  };

  return (
    <>
      <h3>찾으시는 약은 어떤 제형인가요?</h3>
      <div className="drug-fomula-group-box">
        <ul className="drug-fomula-group">
          <li>
            <button onClick={onClickBack}>뒤로가기</button>
          </li>
          <li>
            <button onClick={onClickInit}>초기화</button>
          </li>
          <li>
            <button onClick={onClickFomula("제형전체")}>제형전체</button>
          </li>
          <li>
            <button onClick={onClickFomula("정제류")}>정제류</button>
          </li>
          <li>
            <button onClick={onClickFomula("경질캡슐")}>경질캡슐</button>
          </li>
          <li>
            <button onClick={onClickFomula("연질캡슐")}>연질캡슐</button>
          </li>
        </ul>
      </div>
    </>
  );
}
