// Components
import NavBar from "../NavBar";

export default function DrugDetail() {
  return (
    <div>
      <NavBar />
      <h1>의약품 상세조회</h1>

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
  );
}
