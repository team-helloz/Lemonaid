import Dialog from "@mui/material/Dialog";
import { IHospital } from "../../interface";
import "./MedicalDetail.css";

export interface MedicalDetailDlgProps {
  open: boolean;
  onClose: () => void;
  hospitalDetail: IHospital | undefined;
}

export default function MedicalDetail(props: MedicalDetailDlgProps) {
  const { open, onClose, hospitalDetail } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "rgb(255, 255, 255 )",
          minWidth: "70vh",
          maxWidth: "90vh",
          minHeight: "60vh",
          maxHeight: "60vh",
        },
      }}
    >
      {hospitalDetail !== undefined && (
        <div className="liarresdlg-container init-contain">
          <h2>{hospitalDetail.name}</h2>
          <h4>{hospitalDetail.type}</h4>
          <h4>{hospitalDetail.tel}</h4>
        </div>
      )}
    </Dialog>
  );
}
