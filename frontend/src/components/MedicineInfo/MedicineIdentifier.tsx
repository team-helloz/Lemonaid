import { useState } from "react";
import "./MedicineIdentifier.css";

interface MedicineIdentifierProps {
  page: number;
  updatePage: (arg: number) => void;
  moveMedicineList: (arg: string) => void;
}

export default function MedicineIdentifier(props: MedicineIdentifierProps) {
  const { page, updatePage, moveMedicineList } = props;

  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onClickBack = () => {
    updatePage(page - 1);
  };

  const onClickInit = () => {
    updatePage(1);
  };

  const onClickDontKnow = () => {
    moveMedicineList("식별문자모름");
  };

  const onClickIdentifier = () => {
    moveMedicineList(value);
  };

  return (
    <>
      <h3>찾으시는 약은 어떤 식별문자가 있나요?</h3>
      <div className="medicine-identifier-group-box">
        <ul className="medicine-identifier-group">
          <li>
            <button onClick={onClickBack}>뒤로가기</button>
          </li>
          <li>
            <button onClick={onClickInit}>초기화</button>
          </li>
          <li>
            <button onClick={onClickDontKnow}>식별문자모름</button>
          </li>
          <li>
            <input
              value={value}
              onChange={onChange}
              placeholder="식별문자 (약의 앞면이나 뒷면의 문자)"
              className="medicine-identifier-input"
            ></input>
            <button onClick={onClickIdentifier}>확인</button>
          </li>
        </ul>
      </div>
    </>
  );
}
