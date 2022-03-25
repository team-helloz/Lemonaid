// Components
import NavBar from "../NavBar";
import { NavLink } from "react-router-dom";
import "./MedicineDetail.css";

export default function MedicineDetail() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar />
      <button onClick={scrollToTop} className="to-top">
        TOP
      </button>
      <div className="medicine-detail-page">
        <h1>의약품 상세조회</h1>
        {/* <NavLink to="/medicine/list">
        <button>목록으로 돌아가기</button>
      </NavLink> */}

        <div>
          <p>의약품 이름</p>
          <p>구분:</p>
          <p>제조 업체명:</p>
          <p>제조 수입구분:</p>
        </div>
        <p>외형정보</p>
        <p>성분정보</p>
        <p>저장방법</p>
        <p>용법용량</p>
        <p>사용상 주의사항</p>
      </div>
    </>
  );
}
