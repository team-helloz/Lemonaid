//import "./MedicalSubject.css";

export interface MedicalSubjectProps {
  openSubject: boolean;
}

export default function MedicalSubject(props: MedicalSubjectProps) {
  const { openSubject } = props;

  return (
    <>
      {openSubject === true && (
        <div className="medi-menu">
          <h2>Hello</h2>
        </div>
      )}
    </>
  );
}
