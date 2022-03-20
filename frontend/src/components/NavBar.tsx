import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">홈화면</Link>
      <ul>
        <li>
          <Link to="/hospital">의료기관 조회</Link>
        </li>
        <li>
          <Link to="/drug">의약품 조회</Link>
        </li>
        <li>
          <Link to="/disease">증상/질병 조회</Link>
        </li>
        <li>
          <Link to="/covid">코로나 조회</Link>
        </li>
      </ul>
    </nav>
  );
}
