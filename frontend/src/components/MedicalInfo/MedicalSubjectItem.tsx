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
      <img
        className="medical-subject-item-img"
        src={`/Subject/${itemName}.png`}
        alt=""
      />
      <p className="medical-subject-item-text">{itemName}</p>
    </div>
  );
}
