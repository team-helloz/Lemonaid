import { useState } from "react";
import "./MedicineSearch.css";

interface MedicineIdentifierProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineIdentifier(props: MedicineIdentifierProps) {
  const { page, updatePage, updateCondition } = props;

  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("divide", "STEP4");
  };

  const onClickDontKnow = () => {
    updateCondition("identifier", "식별문자모름");
  };

  const onClickIdentifier = () => {
    let identifier = value;
    if (identifier === "") {
      identifier = "식별문자모름";
    }
    updateCondition("identifier", identifier);
  };

  return (
    <div className="medicine-search-box">
      <div>
        <p className="medicine-search-title">찾으시는 약은 어떤 식별문자가 있나요?</p>
        <div className="medicine-search-group-box">
          <ul className="medicine-search-group">
            <li>
              <button onClick={onClickDontKnow}>식별문자모름</button>
            </li>
            <li>
              <input
                value={value}
                onChange={onChange}
                placeholder="식별문자 (약의 앞면이나 뒷면의 문자)"
                className="medicine-search-input"
              ></input>
              <button onClick={onClickIdentifier}>확인</button>
            </li>
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
        <p>FINAL STEP</p>
      </div>
    </div>
  );
}
