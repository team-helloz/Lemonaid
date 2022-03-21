import { useHistory } from "react-router-dom";

export default function Home() {
  // 경로로 이동하는 함수
  const history = useHistory();

  function routeHospital() {
    // 해당 링크로 이동
    history.push("/hospital");
  }
  function routeDrug() {
    history.push("/drug");
  }
  function routeDisease() {
    history.push("/disease");
  }
  function routeCovid() {
    history.push("/covid");
  }
  return (
    <div>
      <h1>home</h1>
      <div className="home-hospital cursor-pointer" onClick={routeHospital}>
        <p>의료기관 조회</p>
      </div>
      <div className="home-drug cursor-pointer" onClick={routeDrug}>
        <p>의약품 조회</p>
      </div>
      <div className="home-disease cursor-pointer" onClick={routeDisease}>
        <p>질병 조회</p>
      </div>
      <div className="home-covid cursor-pointer" onClick={routeCovid}>
        <p>코로나</p>
      </div>
    </div>
  );
}