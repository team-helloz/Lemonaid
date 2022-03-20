import { useHistory } from "react-router-dom";

export default function HospotalInfo() {
  const history = useHistory();

  function routeHome() {
    history.push("/");
  }
  return (
    <div>
      <div onClick={routeHome}>
        <p>홈</p>
      </div>
      <h1>의료기관 조회</h1>
    </div>
  );
}
