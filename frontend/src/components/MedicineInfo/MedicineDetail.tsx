// React
import { useEffect } from "react";
// axios
import axios from "axios";
// Components
import NavBar from "../NavBar";
import "./MedicineDetail.css";
import { useState } from "react";

interface MedicineDetailInfo {
  name: string;
}

export default function MedicineDetail(Params: any) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [medicineInfo, setMedicineInfo] = useState<MedicineDetailInfo>();
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

  const handleLoad = () => {
    const mediNo = Params.match.params.medicineNo;
    console.log(mediNo)
    axios
      .get(`/medicine/${mediNo}`)
      .then((res) => {
        console.log(res);
        setMedicineInfo(res.data.medicine);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    handleLoad();
  }, []);

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
              <p>{medicineInfo?.name}</p>
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
