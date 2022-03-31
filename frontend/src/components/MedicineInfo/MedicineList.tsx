// React
import { useEffect, useState } from "react";
// Router
import { useHistory } from "react-router-dom";
// axios
import axios from "axios";
// SVG
import Popup from "../../assets/popup.svg";
// Style
import "./MedicineList.css";

interface SearchData {
  shape: string;
  color: string;
  form: string;
  line: string;
  sign: string;
  medicineName: string;
}

interface Medicine {
  no: number;
  num: number;
  name: string;
  company: string;
  material: string;
}

export default function MedicineList(props: SearchData) {

  const history = useHistory();
  const { shape, color, form, line, sign, medicineName } = props
  const [medicineList, setList] = useState<Medicine[]>([]);

  function routeDetail(medicinename: string) {
    history.push(`/medicine/list/${medicinename}`);
  }

  const handleLoad = () => {
    let url = ""
    if (medicineName === "") {
      let nl = ""
      if (line === "+") {        
        nl = "%2B"
      } else {
        nl = line
      }
      url = `/medicine?shape=${shape}&color=${color}&form=${form}&line=${nl}&sign=${sign}`
    } else {
      url = `/medicine?shape=전체&color=전체&form=전체&line=전체&sign=전체&name=${medicineName}`
    }

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setList(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    handleLoad();
  }, [shape, color, form, line, sign]);

  return (
    <div className="medicine-list-page">
      <div className="medicine-list-group-box">
        {medicineList.length > 0 && medicineList.map((medicine, i: number) => (
          <div
            key={i}
            onClick={() => routeDetail(medicine.name)}
            className="medicine-list-item"
          >
            <img
              className="medicine-list-item-img"
              src={require("../../assets/medicine.png")}
              alt=""
            />
            <div>
              <div className="medicine-list-item-title">
                <p className="medicine-list-item-name">{medicine.name}</p>
                <img
                  className="medicine-list-item-popup"
                  src={Popup}
                  alt=""
                />
              </div>
              <div className="medicine-list-item-desc">
                <p>{medicine.material}</p>
              </div>
            </div>
          </div>
        ))}
        {medicineList.length === 0 && (
          <div className="medicine-list-group-box">
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
