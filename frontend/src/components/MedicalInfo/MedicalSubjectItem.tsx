import "./MedicalSubjectItem.css";

interface MedicalSubjectItemProps {
  itemName: string;
  selectedSubjectName: string;
}

export default function MedicalSubjectItem(props: MedicalSubjectItemProps) {
  const { itemName, selectedSubjectName } = props;

  return (
    <div
      className={
        "medical-subject-item" +
        (itemName === selectedSubjectName ? "-selected" : "")
      }
    >
      <div className="medical-subject-item-img">
        <img
          className="medicine-subject-img"
          src={`/MedicineSearch/기타.png`}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <p className="medical-subject-item-text">{itemName}</p>
    </div>
  );
}
