import Dialog from "@mui/material/Dialog";
import "./MedicalDetail.css";

export interface hospital {
  id: number;
  type: string;
  name: string;
  call: string;
  address: string;
  lat: number;
  lng: number;
}

export interface MedicalDetailDlgProps {
  open: boolean;
  onClose: () => void;
  hospitalDetail: hospital;
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
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          minWidth: "70vh",
          maxWidth: "90vh",
          minHeight: "60vh",
          maxHeight: "60vh",
        },
      }}
    >
      <div className="liarresdlg-container init-contain">
        <h2>{hospitalDetail.name}</h2>
        <h4>{hospitalDetail.type}</h4>
        <h4>{hospitalDetail.call}</h4>
      </div>
    </Dialog>
  );
}
