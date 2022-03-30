// React
import { useState } from "react";
import { KeyboardEvent } from "react";
// Style
import "./MedicineSearch.css";

interface MedicineIdentifierProps {
  page: number;
  updatePage: (arg: number) => void;
  updateCondition: (name: string, value: string) => void;
}

export default function MedicineIdentifier(props: MedicineIdentifierProps) {
  
  const { page, updatePage, updateCondition } = props;
  const [value, setValue] = useState("");
  const [hide, sethide] = useState<boolean>(false);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  function keyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter") {
      onClickIdentifier();
    }
  }

  function closeSearchBox() {
    const SearchBox = document.getElementById("search-box");
    SearchBox?.classList.add("medicine-search-close")
    window.setTimeout(() => SearchBox?.classList.add("medicine-search-none"), 500)
    sethide(true);
  }

  function openSearchBox() {
    const SearchBox = document.getElementById("search-box");
    SearchBox?.classList.remove("medicine-search-none")
    window.setTimeout(() => SearchBox?.classList.remove("medicine-search-close"), 10)
    sethide(false);
  }

  const onClickBack = () => {
    updatePage(page - 1);
    updateCondition("divide", "STEP4");
    updateCondition("identifier", "STEP5");
  };

  const onClickDontKnow = () => {
    updateCondition("identifier", "모름");
    closeSearchBox();
  };

  const onClickIdentifier = () => {
    let identifier = value;
    if (identifier === "") {
      identifier = "모름";
    }
    updateCondition("identifier", identifier);
    closeSearchBox();
  };

  return (
    <div>
      <div
        id="search-box"
        className="medicine-search-box"
      >
        <p className="medicine-search-title">STEP{page}. 찾으시는 약은 어떤 식별문자가 있나요?</p>
        <div className="medicine-search-identifier-box">
          <input
            value={value}
            onChange={onChange}
            onKeyDown={keyDownHandler}
            placeholder="식별문자 (약의 앞면이나 뒷면의 문자)"
            className="medicine-search-input"
          ></input>
          <button
            className="medicine-search-btn"
            onClick={onClickIdentifier}
          >확인</button>
          <button
            className="medicine-search-btn"
            onClick={onClickDontKnow}
          >식별문자모름</button>
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
      {hide && (
        <div
          onClick={openSearchBox}
          className="medicine-search-open"
        >
          <img className="medicine-search-open-btn" src="./Asset 83.png" alt="" />
        </div>
      )}
    </div>
  );
}
