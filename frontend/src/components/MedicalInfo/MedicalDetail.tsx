import Dialog from "@mui/material/Dialog";
import { forwardRef, useEffect, useState } from "react";
import { IHospital, ICoord } from "../../interface";
import "./MedicalDetail.css";

export interface MedicalDetailDlgProps {
  open: boolean;
  onClose: () => void;
  hospitalDetail: IHospital | undefined;
  roadAdd: string;
  SetDirectionMode: (destCoord: ICoord) => void;
}

export default function MedicalDetail(props: MedicalDetailDlgProps) {
  const { open, onClose, hospitalDetail, roadAdd, SetDirectionMode } = props;

  const handleClose = () => {
    onClose();
  };

  const findPath = () => {
    if (hospitalDetail !== undefined) {
      window.open(
        `https://map.kakao.com/?sName=${roadAdd}&eName=${hospitalDetail.address}`,
        "_blank"
      );
    }
    // if (hospitalDetail !== undefined) {
    //   SetDirectionMode({ lat: hospitalDetail.lat, lng: hospitalDetail.lng });
    // }
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
          <h4>{hospitalDetail.tel}</h4>
          <h4>{hospitalDetail.address}</h4>
          <h4>내위치 : {roadAdd}</h4>
          <button onClick={findPath}>길찾기</button>
        </div>
      )}
    </Dialog>
  );
}
