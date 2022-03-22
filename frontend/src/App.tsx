import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import HospotalInfo from "./routes/HospitalInfo";
import DrugInfo from "./routes/DrugInfo";
import DiseaseInfo from "./routes/DiseaseInfo";
import DiseaseDetail from "./components/DiseaseInfo/DiseaseDetail";
import CovidInfo from "./routes/CovidInfo";

function App() {
  return (
    <Router>
      {/* exact 경로 중복 방지 */}
      <Route path="/" exact component={Home} />
      <Route path="/hospital" component={HospotalInfo} />
      <Route path="/drug" component={DrugInfo} />
      <Route path="/disease" component={DiseaseInfo} exact />
      <Route path="/disease/:diseasename" component={DiseaseDetail} />
      <Route path="/covid" component={CovidInfo} />
    </Router>
  );
}

export default App;
