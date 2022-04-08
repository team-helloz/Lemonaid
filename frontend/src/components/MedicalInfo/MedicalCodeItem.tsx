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
      <div className="medical-code-item-img"></div>
      <p className="medical-code-item-text">{itemName}</p>
    </div>
  );
}
