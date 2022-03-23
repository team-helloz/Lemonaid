import "./MedicineShape.css";

interface MedicineShapeProps {
  page: number;
  updatePage: (arg: number) => void;
  updateShape: (arg: string) => void;
}

export default function MedicineShape(props: MedicineShapeProps) {
  const { page, updatePage, updateShape } = props;

  const onClickShape = (shape: string) => () => {
    updatePage(page + 1);
    updateShape(shape);
  };

  return (
    <>
      <h3>찾으시는 약은 어떤 모양인가요?</h3>
      <div className="medicine-shape-group-box">
        <ul className="medicine-shape-group">
          <li>
            <button onClick={onClickShape("모양전체")}>모양전체</button>
          </li>
          <li>
            <button onClick={onClickShape("원형")}>원형</button>
          </li>
          <li>
            <button onClick={onClickShape("타원형")}>타원형</button>
          </li>
          <li>
            <button onClick={onClickShape("반원형")}>반원형</button>
          </li>
          <li>
            <button onClick={onClickShape("삼각형")}>삼각형</button>
          </li>
          <li>
            <button onClick={onClickShape("사각형")}>사각형</button>
          </li>
        </ul>
      </div>
      <div className="medicine-shape-group-box">
        <ul className="medicine-shape-group">
          <li>
            <button onClick={onClickShape("마름모형")}>마름모형</button>
          </li>
          <li>
            <button onClick={onClickShape("장방형")}>장방형</button>
          </li>
          <li>
            <button onClick={onClickShape("오각형")}>오각형</button>
          </li>
          <li>
            <button onClick={onClickShape("육각형")}>육각형</button>
          </li>
        </ul>
      </div>
    </>
  );
}
