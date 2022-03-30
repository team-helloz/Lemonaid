// Components
import NavBar from "../NavBar";
import "./MedicineDetail.css";
import { useState } from "react";

export default function MedicineDetail() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [status, setStatus] = useState<string>("shape");
  const setStatusShape = () => {
    setStatus("shape");
  };

  const setStatusIngredient = () => {
    setStatus("ingredient");
  };

  const setStatusStore = () => {
    setStatus("store");
  };

  const setStatusUsage = () => {
    setStatus("usage");
  };
  const setStatusCaution = () => {
    setStatus("caution");
  };
  return (
    <div>
      <NavBar />
      <button onClick={scrollToTop} className="to-top">
        TOP
      </button>
      <div className="medicine-detail-page">
        <div className="medicine-detail-title">
          <div className="medicine-detail-title-container">
            <div className="medicine-detail-title-letter">
              <p>의약품 이름</p>
              <p>구분:</p>
              <p>제조 업체명:</p>
              <p>제조 수입구분:</p>
            </div>
            <img src="/medicine.jpg" alt="" />
          </div>
          <div className="medicine-detail-select">
            <div
              className={
                status === "shape"
                  ? "medicine-detail-selected medicine-detail-def"
                  : "medicine-detail-def"
              }
              onClick={setStatusShape}
            >
              <p>외형정보</p>
            </div>

            <div
              className={
                status === "ingredient"
                  ? "medicine-detail-selected medicine-detail-def"
                  : "medicine-detail-def"
              }
              onClick={setStatusIngredient}
            >
              <p>성분정보</p>
            </div>
            <div
              className={
                status === "store"
                  ? "medicine-detail-selected medicine-detail-def"
                  : "medicine-detail-def"
              }
              onClick={setStatusStore}
            >
              <p>저장방법</p>
            </div>
            <div
              className={
                status === "usage"
                  ? "medicine-detail-selected medicine-detail-def"
                  : "medicine-detail-def"
              }
              onClick={setStatusUsage}
            >
              <p>용법용량</p>
            </div>
            <div
              className={
                status === "caution"
                  ? "medicine-detail-selected medicine-detail-def"
                  : "medicine-detail-def"
              }
              onClick={setStatusCaution}
            >
              <p>사용상 주의사항</p>
            </div>
          </div>
        </div>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
        <p>sldfkhapsodfiujpasdogjh;dsflkg dfgdfgsdfgsdfg sdfgsd fgsdfgsdfg</p>
      </div>
    </div>
  );
}
