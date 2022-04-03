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
  num: number;
  // 구분
  etc_otc_name: string;
  // 제조업체
  company: string;
  // 외형정보
  shape: string;
  form_code_name: string;
  color_f: string;
  thick: number;
  leng_l: number;
  leng_s: number;
  line_f: string;
  line_b: string;
  print_f: string;
  print_b: string;
  // 성분정보
  material: string;
  // 효능
  efficacy: string;
  // 용법용량
  usage: string;
  // 주의사항
  caution: string;
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
    setStatus("efficacy");
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
            <div className="medicine-detail-title-desc">
              <div className="medicine-detail-title-letter">
                <p className="medicine-detail-title-name">{medicineInfo?.name}</p>
                <p>구분: {medicineInfo?.etc_otc_name}</p>
                <p>제조 업체명: {medicineInfo?.company}</p>
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
                    status === "efficacy"
                      ? "medicine-detail-selected medicine-detail-def"
                      : "medicine-detail-def"
                  }
                  onClick={setStatusStore}
                >
                  <p>효능</p>
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
            <img src={`https://helloz-lemonaid.s3.ap-northeast-2.amazonaws.com/medicine/${medicineInfo?.num}.jpg`} alt="" />
          </div>
        </div>
        <div className="medicine-detail-desc-box">
          {status === "shape" && (
            <div>
              <p>제형: {medicineInfo?.shape}</p>
              <p>성상: {medicineInfo?.form_code_name}</p>
              <p>색상: {medicineInfo?.color_f}</p>
              <p>두께: {medicineInfo?.thick}</p>
              <p>장축/단축: {medicineInfo?.leng_l}/{medicineInfo?.leng_s}</p>
              <p>전면 분할선: {medicineInfo?.line_f}</p>
              <p>후면 분할선: {medicineInfo?.line_b}</p>
              <p>전면 인식문자: {medicineInfo?.print_f}</p>
              <p>후면 인식문자: {medicineInfo?.print_b}</p>
            </div>
          )}
          {status === "ingredient" && (
            <div>
              <p>{medicineInfo?.material}</p>
            </div>
          )}
          {status === "efficacy" && (
            <div>
              <p>{medicineInfo?.efficacy}</p>
            </div>
          )}
          {status === "usage" && (
            <div>
              <p>{medicineInfo?.usage}</p>
            </div>
          )}
          {status === "caution" && (
            <div>
              <p>{medicineInfo?.caution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
