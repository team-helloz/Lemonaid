import "./DrugColor.css";

interface DrugColorProps {
  page: number;
  updatePage: (arg: number) => void;
  updateColor: (arg: string) => void;
}

export default function DrugColor(props: DrugColorProps) {
  const { page, updatePage, updateColor } = props;

  const onClickBack = () => {
    updatePage(page - 1);
  };

  const onClickInit = () => {
    updatePage(0);
  };

  const onClickColor = (color: string) => () => {
    updatePage(page + 1);
    updateColor(color);
  };

  return (
    <>
      <h3>찾으시는 약은 어떤 색깔인가요?</h3>
      <div className="drug-color-group-box">
        <ul className="drug-color-group">
          <li>
            <button onClick={onClickBack}>뒤로가기</button>
          </li>
          <li>
            <button onClick={onClickInit}>초기화</button>
          </li>
          <li>
            <button onClick={onClickColor("하양")}>하양</button>
          </li>
          <li>
            <button onClick={onClickColor("노랑")}>노랑</button>
          </li>
          <li>
            <button onClick={onClickColor("노랑")}>주황</button>
          </li>
          <li>
            <button onClick={onClickColor("분홍")}>분홍</button>
          </li>
        </ul>
      </div>
      <div className="drug-color-group-box">
        <ul className="drug-color-group">
          <li>
            <button onClick={onClickColor("빨강")}>빨강</button>
          </li>
          <li>
            <button onClick={onClickColor("갈색")}>갈색</button>
          </li>
          <li>
            <button onClick={onClickColor("연두")}>연두</button>
          </li>
          <li>
            <button onClick={onClickColor("초록")}>초록</button>
          </li>
          <li>
            <button onClick={onClickColor("청록")}>청록</button>
          </li>
          <li>
            <button onClick={onClickColor("파랑")}>파랑</button>
          </li>
        </ul>
      </div>
    </>
  );
}
