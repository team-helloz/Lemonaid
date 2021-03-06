import "./MedicalList.css";
import { IHospital, ICoord } from "../../interface";
import ParkingPng from "../../assets/medical_png/parking.png";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

export interface HospitalProps {
  hospitals: IHospital[];
  setViewCenter: (coord: ICoord) => void;
  handDetailOpen: (hospital: IHospital) => void;
  selectHospital: string;
  UpdateSelectHospital: (
    selectedHospital: string,
    selectedLat: number,
    selectedLng: number
  ) => void;
  nowPage: number;
  totalPage: number;
  setNowPage: (nowPage: number) => void;
}

export default function MedicalList({
  hospitals,
  setViewCenter,
  handDetailOpen,
  selectHospital,
  UpdateSelectHospital,
  nowPage,
  totalPage,
  setNowPage,
}: HospitalProps) {
  const [pageBtn, setPageBtn] = useState<number[]>([]);

  const onClickListItem = (hospital: IHospital) => {
    // console.log(hospital.name);
    setViewCenter({ lat: hospital.lat, lng: hospital.lng });
    handDetailOpen(hospital);
  };

  function pageChange(n: number) {
    setNowPage(n);
  }

  function paginationBtn() {
    const result = [];
    if (nowPage < 2) {
      for (let i = 0; i <= totalPage && i < 5; i++) {
        result.push(i);
      }
    } else if (nowPage + 2 > totalPage) {
      for (let i = totalPage - 4; i <= totalPage; i++) {
        result.push(i);
      }
    } else {
      for (let i = nowPage - 2; i <= totalPage && i <= nowPage + 2; i++) {
        result.push(i);
      }
    }
    setPageBtn(result);
  }

  useEffect(() => {
    paginationBtn();
  }, [nowPage, totalPage]);
  return (
    <>
      <div className="right-top-container">
        {hospitals &&
          hospitals.map((hospital) => (
            <div
              className={
                "hos-list-container" +
                (hospital.name === selectHospital ? "-selected" : "")
              }
              onClick={() => onClickListItem(hospital)}
              onMouseEnter={() =>
                UpdateSelectHospital(hospital.name, hospital.lat, hospital.lng)
              }
              onMouseLeave={() => UpdateSelectHospital("", 0, 0)}
              key={hospital.no}
            >
              {hospital.opentime.opentime_valid === "Y" && (
                <button className="hos-list-openornot2">
                  {hospital.openornot}
                </button>
              )}
              {hospital.opentime.opentime_valid === "N" && (
                <button className="hos-list-openornot">
                  ?????? ?????? ?????? ??????
                </button>
              )}
              {hospital.code_name !== undefined && (
                <button className="hos-title-sub">{hospital.code_name}</button>
              )}
              <p className="hos-list-name">
                {hospital.name}
                {hospital.parking_count > 0 && (
                  <button className="mlist-park">P</button>
                )}
                {(hospital.emergency_day === "Y" ||
                  hospital.emergency_night === "Y") && (
                  <button className="mlist-em">??????</button>
                )}
              </p>
              <p className="hos-list-address">
                <span>{hospital.distance.toFixed()}</span>m ?? {hospital.address}
              </p>
              {hospital.tel !== "-1" && (
                <button className="hos-list-tel">TEL : {hospital.tel}</button>
              )}

              <p className="hos-list-subject">
                {hospital.type === "hospital" &&
                  hospital.code > 21 &&
                  hospital.medical_subject_list.length > 0 &&
                  hospital.medical_subject_list.map((subjects, index) => (
                    <span key={index}>{subjects.name}</span>
                  ))}
              </p>
            </div>
          ))}
      </div>
      {totalPage > 1 && (
        <Pagination
          activePage={nowPage}
          itemsCountPerPage={10}
          totalItemsCount={totalPage * 10}
          pageRangeDisplayed={5}
          prevPageText={"???"}
          nextPageText={"???"}
          onChange={setNowPage}
        />
      )}
    </>
  );
}
