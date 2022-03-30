// Router
import { useHistory } from "react-router-dom";
// SVG
import Popup from "../../assets/popup.svg";
// Style
import "./MedicineList.css";

export default function MedicineList() {

  const history = useHistory();

  function routeDetail(medicinename: string) {
    history.push(`/medicine/list/${medicinename}`);
  }

  const medicines = [
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
      image: "img",
    },
    {
      name: "팍스로비드",
      desc: "측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다. 측면에 텍스트가 있는 이미지리스트입니다.",
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
                <p>{medicine.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
