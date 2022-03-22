import { useState } from "react";
import "./DrugList.css";

// interface DrugListProps {
//   page: number;
//   updatePage: (arg: number) => void;
//   updateIdentifier: (arg: string) => void;
// }

interface Drug {
  name: string;
  description: string;
  pictureURL: string;
}

export default function DrugList() {
  //const { page, updatePage, updateIdentifier } = props;

  return (
    <>
      <h3>의약품 검색 결과</h3>
      <div className="drug-list-group-box">
        <ul className="drug-list-type">
          <li>
            <a href="#">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </a>
            <a href="#">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </a>
            <a href="#">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../assets/drug.png")}
                width="90"
                height="90"
                alt=""
              />
            </a>
            <a href="#">
              <strong>측면에 텍스트가 있는 이미지리스트입니다.</strong>측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.측면에 텍스트가 있는
              이미지리스트입니다.측면에 텍스트가 있는 이미지리스트입니다.측면에
              텍스트가 있는 이미지리스트입니다.
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
