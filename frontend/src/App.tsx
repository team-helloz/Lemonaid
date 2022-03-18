import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import HospotalInfo from "./routes/HospitalInfo";
import DrugInfo from "./routes/DrugInfo";
import DiseaseInfo from "./routes/DiseaseInfo";
import CovidInfo from "./routes/CovidInfo";

function App() {
  return (
    <Router>
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
      {/* exact 경로 중복 방지 */}
      <Route path="/" exact component={Home} />
      <Route path="/hospital" component={HospotalInfo} />
      <Route path="/drug" component={DrugInfo} />
      <Route path="/disease" component={DiseaseInfo} />
      <Route path="/covid" component={CovidInfo} />
    </Router>
  );
}

export default App;
