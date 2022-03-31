import "./MedicalCodeItem.css";

interface MedicalCodeItemProps {
  itemName: string;
  selectedCodeName: string;
}

export default function MedicalCodeItem(props: MedicalCodeItemProps) {
  const { itemName, selectedCodeName } = props;

  return (
    <div
      className={
        "medical-code-item" + (itemName === selectedCodeName ? "-selected" : "")
      }
    >
      <div className="medical-code-item-img">
        <img
          className="medicine-code-img"
          src={`/MedicineSearch/기타.png`}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <p className="medical-code-item-text">{itemName}</p>
    </div>
  );
}
