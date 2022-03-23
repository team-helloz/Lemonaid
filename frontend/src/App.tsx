import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import MedicalInfo from "./routes/MedicalInfo";
import MedicineInfo from "./routes/MedicineInfo";
import MedicineList from "./components/MedicineInfo/MedicineList";
import MedicineDetail from "./components/MedicineInfo/MedicineDetail";
import DiseaseInfo from "./routes/DiseaseInfo";
import DiseaseDetail from "./components/DiseaseInfo/DiseaseDetail";
import CovidInfo from "./routes/CovidInfo";

function App() {
  return (
    <Router>
      {/* exact 경로 중복 방지 */}
      <Route path="/" exact component={Home} />
      <Route path="/medical" component={MedicalInfo} />
      <Route path="/medicine" component={MedicineInfo} exact />
      <Route path="/medicine/list" component={MedicineList} exact />
      <Route path="/medicine/list/:medicineId" component={MedicineDetail} />
      <Route path="/disease" component={DiseaseInfo} exact />
      <Route path="/disease/:diseasename" component={DiseaseDetail} />
      <Route path="/covid" component={CovidInfo} />
    </Router>
  );
}

export default App;
