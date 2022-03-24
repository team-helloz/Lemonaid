import "./MedicineSerachItem.css";

interface MedicineSerachItemProps {
  //img: string;
  itemName: string;
}

export default function MedicineSerachItem(props: MedicineSerachItemProps) {
  const { itemName } = props;

  return (
    <>
      <div className="medicine-serach-item">
        <img
          src={require("../../assets/medicine.png")}
          width="80"
          height="80"
          alt=""
        />
      </div>
      <div className="medicine-serach-item-text">{itemName}</div>
    </>
  );
}
