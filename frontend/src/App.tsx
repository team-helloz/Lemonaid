import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import MedicalInfo from "./routes/MedicalInfo";
import MedicineInfo from "./routes/MedicineInfo";
import MedicineDetail from "./components/MedicineInfo/MedicineDetail";
import DiseaseInfo from "./routes/DiseaseInfo";
import DiseaseDetail from "./components/DiseaseInfo/DiseaseDetail";
import CovidInfo from "./routes/CovidInfo";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/medical" component={MedicalInfo} />
      <Route path="/medicine" component={MedicineInfo} exact />
      <Route path="/medicine/:medicineNo" component={MedicineDetail} />
      <Route path="/disease" component={DiseaseInfo} exact />
      <Route path="/disease/:diseaseno" component={DiseaseDetail} />
      <Route path="/covid" component={CovidInfo} />
    </Router>
  );
}

export default App;
