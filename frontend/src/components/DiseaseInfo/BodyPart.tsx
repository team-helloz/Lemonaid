import "./BodyPart.css";
import PartIcon from "./PartIcon"

interface Part {
  id: number,
  eng: string,
  kor: string,
}

interface PartProps {
  parts: Part[];
}

export default function BodyPart1({ parts }: PartProps) {

  

  return (
    <div className="group-box">
      <ul className="body-part-group">
          { parts.map((part, i:number) => (
            <li key={i}>
              <button>
                <PartIcon size={20} color={"#FFFFFF"} icon={"head"} />
                <p>{part.kor}</p>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}