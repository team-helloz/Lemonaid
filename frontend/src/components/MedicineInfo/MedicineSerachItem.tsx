import "./MedicineSerachItem.css";

interface MedicineSerachItemProps {
  //img: string;
  itemName: string;
}

export default function MedicineSerachItem(props: MedicineSerachItemProps) {
  const { itemName } = props;

  return (
    <div className="medicine-serach-item">
      <div className="medicine-serach-item-img">
        <img
          className="medicine-search-img"
          src={`/MedicineSearch/${itemName}.png`}
          alt=""
        />
      </div>
      <p className="medicine-serach-item-text">{itemName}</p>
    </div>
  );
}
