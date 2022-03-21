import "./BodyPart.css";
import { iconName } from "./constants";
import PartIcon from "./PartIcon"

interface Part {
  id: number,
  eng: iconName,
  kor: string,
}

interface PartProps {
  parts: Part[];
}

export default function BodyPart1({ parts }: PartProps) {

  return (
    <div className="part-group-box">
      <ul className="body-part-group">
          { parts.map((part, i:number) => (
            <li key={i}>
              <button className="part-btn">
                <PartIcon h={20} w={20} color={"#FFFFFF"} icon={part.eng} />
                <p>{part.kor}</p>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}