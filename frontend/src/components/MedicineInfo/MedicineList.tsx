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
}

interface Medicine {
  no: number;
  name: string;
  company: string;
  material: string;
}

export default function MedicineList(props: SearchData) {

  const history = useHistory();
  const { shape, color, form, line, sign } = props
  const [medicineList, setList] = useState<Medicine[]>([]);

  function routeDetail(medicinename: string) {
    history.push(`/medicine/list/${medicinename}`);
  }

  const handleLoad = () => {
    axios
      .get(`/medicine?shape=${shape}&colo=${color}&form=${form}&line=${line}&=${sign}`)
      .then((res) => {
        console.log(res);
        setList(res.data.medicines)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    handleLoad();
  });

  const medicines = [
    {
      name: "팍스로비드",
      material: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      material: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      material: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
  ];

  return (
    <div className="medicine-list-page">
      <div className="medicine-list-group-box">
        {medicines.map((medicine, i: number) => (
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
      </div>
    </div>
  );
}
