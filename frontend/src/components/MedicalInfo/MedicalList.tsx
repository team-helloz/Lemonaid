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
  UpdateSelectHospital: (selectHospital: string) => void;
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
      <div>
        {hospitals &&
          hospitals.map((hospital) => (
            <div
              className={
                "hos-list-container" +
                (hospital.name === selectHospital ? "-selected" : "")
              }
              onClick={() => onClickListItem(hospital)}
              onMouseEnter={() => UpdateSelectHospital(hospital.name)}
              onMouseLeave={() => UpdateSelectHospital("")}
              key={hospital.no}
            >
              <button className="hos-title-sub">{hospital.code_name}</button>
              <p className="hos-list-name">{hospital.name}</p>
              {hospital.parking_count > 0 && (
                <img src={ParkingPng} alt="주차" />
              )}

              <p className="hos-list-subject">
                {hospital.type === "hospital" && hospital.code <= 21 && (
                  <span>{hospital.code_name}</span>
                )}
                {hospital.type === "hospital" &&
                  hospital.code > 21 &&
                  hospital.medical_subject_list.length > 0 &&
                  hospital.medical_subject_list.map((subjects, index) => (
                    <span key={index}>{subjects.name}</span>
                  ))}
              </p>
              <p className="hos-list-address">
                <span>{hospital.distance.toFixed()}</span>m · {hospital.address}
              </p>
              {hospital.opentime.opentime_valid === "Y" && (
                <p className="hos-list-openornot">{hospital.openornot}</p>
              )}
              {hospital.opentime.opentime_valid === "N" && (
                <p className="hos-list-openornot">영업시간정보없음</p>
              )}
              <p className="hos-list-tel">{hospital.tel}</p>
            </div>
          ))}
        {hospitals && hospitals.length === 0 && <h3>검색결과가 없습니다.</h3>}
      </div>
      {totalPage > 1 && (
        <Pagination
          activePage={nowPage}
          itemsCountPerPage={10}
          totalItemsCount={totalPage * 10}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setNowPage}
        />
      )}
    </>
  );
}
