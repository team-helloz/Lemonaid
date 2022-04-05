import Dialog from "@mui/material/Dialog";
import { IHospital, ICoord } from "../../interface";
import ParkingPng from "../../assets/medical_png/parking.png";
import EmergencyPng from "../../assets/medical_png/emergency.png";
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
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "rgb(247, 247, 247)",
          minWidth: "80vh",
          maxWidth: "80vh",
          minHeight: "70vh",
          maxHeight: "70vh",
          borderRadius: "10px",
        },
      }}
    >
      {hospitalDetail !== undefined && (
        <div className="initialresdlg-container init-contain">
          <div className="md-title-container">
            <div className="md-title-container-1">
              <span className="hos-dd-name">{hospitalDetail.name}</span>
              {hospitalDetail.parking_count > 0 && (
                <button className="md-park">P</button>
              )}
              {(hospitalDetail.emergency_day === "Y" ||
                hospitalDetail.emergency_night === "Y") && (
                <button className="md-em">응급</button>
              )}
              <button className="md-navi" onClick={findPath}>
                <img src="/navi.png" alt="" />
              </button>
            </div>
            <p className="hos-dd-address">{hospitalDetail.address}</p>
          </div>
          <div className="md-detail-container">
            <p className="hos-md-subject">
              <p className="md-sub-title">진료 과목</p>
              {hospitalDetail.type === "hospital" &&
                hospitalDetail.medical_subject_list.length > 0 &&
                hospitalDetail.medical_subject_list.map((subjects, index) => (
                  <span className="md-sub-content" key={index}>
                    {subjects.name}{" "}
                  </span>
                ))}
            </p>
            <div className="md-2-container">
              <div className="md-time">
                {hospitalDetail.opentime.opentime_valid === "Y" && (
                  <div>
                    <p className="hos-list-openornot">
                      {hospitalDetail.openornot}
                    </p>
                    <div className="md-date-list">
                      {hospitalDetail.opendays !== "" && (
                        <p>영업일 : {hospitalDetail.opendays}</p>
                      )}
                      {hospitalDetail.opentime.opentime_sun > 0 &&
                        hospitalDetail.opentime.closetime_sun > 0 && (
                          <p>
                            일 {hospitalDetail.opentime.opentime_sun_str} -
                            {hospitalDetail.opentime.closetime_sun_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_sun === -1 &&
                        hospitalDetail.opentime.closetime_sun === -1 && (
                          <p>일 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_mon > 0 &&
                        hospitalDetail.opentime.closetime_mon > 0 && (
                          <p>
                            월 {hospitalDetail.opentime.opentime_mon_str} -
                            {hospitalDetail.opentime.closetime_mon_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_mon === -1 &&
                        hospitalDetail.opentime.closetime_mon === -1 && (
                          <p>월 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_tue > 0 &&
                        hospitalDetail.opentime.closetime_tue > 0 && (
                          <p>
                            화 {hospitalDetail.opentime.opentime_tue_str} -
                            {hospitalDetail.opentime.closetime_tue_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_tue === -1 &&
                        hospitalDetail.opentime.closetime_tue === -1 && (
                          <p>화 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_wed > 0 &&
                        hospitalDetail.opentime.closetime_wed > 0 && (
                          <p>
                            수 {hospitalDetail.opentime.opentime_wed_str} -
                            {hospitalDetail.opentime.closetime_wed_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_wed === -1 &&
                        hospitalDetail.opentime.closetime_wed === -1 && (
                          <p>수 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_thu > 0 &&
                        hospitalDetail.opentime.closetime_thu > 0 && (
                          <p>
                            목 {hospitalDetail.opentime.opentime_thu_str} -
                            {hospitalDetail.opentime.closetime_thu_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_thu === -1 &&
                        hospitalDetail.opentime.closetime_thu === -1 && (
                          <p>목 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_fri > 0 &&
                        hospitalDetail.opentime.closetime_fri > 0 && (
                          <p>
                            금 {hospitalDetail.opentime.opentime_fri_str} -
                            {hospitalDetail.opentime.closetime_fri_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_fri === -1 &&
                        hospitalDetail.opentime.closetime_fri === -1 && (
                          <p>금 정기휴무</p>
                        )}
                      {hospitalDetail.opentime.opentime_sat > 0 &&
                        hospitalDetail.opentime.closetime_sat > 0 && (
                          <p>
                            토 {hospitalDetail.opentime.opentime_sat_str} -
                            {hospitalDetail.opentime.closetime_sat_str}
                          </p>
                        )}
                      {hospitalDetail.opentime.opentime_sat === -1 &&
                        hospitalDetail.opentime.closetime_sat === -1 && (
                          <p>토 정기휴무</p>
                        )}
                    </div>
                  </div>
                )}
                {hospitalDetail.opentime.opentime_valid === "N" && (
                  <div>
                    <p className="hos-list-openornot no-open">
                      영업시간정보없음
                    </p>
                  </div>
                )}
              </div>
              <div className="md-2-park">
                <div>
                  <p className="md-call">전화 번호</p>
                  <p className="hos-dd-tel">{hospitalDetail.tel}</p>
                </div>
                {hospitalDetail.parking_count > 0 && (
                  <p className="hos-dp-parking">
                    주차 가능 대수 : <span>{hospitalDetail.parking_count}</span>
                  </p>
                )}
                {hospitalDetail.parking_count < 1 && (
                  <p className="hos-dd-parking">
                    주차 <span>불가능</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
}
