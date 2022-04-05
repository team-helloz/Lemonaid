// React
import { useEffect, useState } from "react";
// Router
import { useHistory } from "react-router-dom";
// axios
import axios from "axios";
// SVG
import Popup from "../../assets/popup.svg";
// Style
import "./MedicineList.css";

interface SearchData {
  shape: string;
  color: string;
  form: string;
  line: string;
  sign: string;
  medicineName: string;
}

interface Medicine {
  no: number;
  num: number;
  name: string;
  company: string;
  class_name: string;
  etc_otc_name: string;
}

export default function MedicineList(props: SearchData) {

  const history = useHistory();
  const { shape, color, form, line, sign, medicineName } = props
  const [medicineList, setList] = useState<Medicine[]>([]);
  const [nowPage, setPage] = useState<number>(0);
  const [totalPage, setTotal] = useState<number>(0);
  const [pageBtn, setBtn] = useState<number[]>([]);

  function routeDetail(medicineNo: number) {
    history.push(`/medicine/${medicineNo}`);
  }

  const handleLoad = () => {
    let url = ""
    if (medicineName === "") {
      let nl = ""
      if (line === "+") {        
        nl = "%2B"
      } else {
        nl = line
      }
      url = `/medicine?shape=${shape}&color=${color}&form=${form}&line=${nl}&sign=${sign}&page=${nowPage}&size=20`
    } else {
      url = `/medicine?shape=전체&color=전체&form=전체&line=전체&sign=전체&name=${medicineName}`
    }

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setList(res.data.medicineList)
        setTotal(~~((res.data.resultCnt + 1) / 20))
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    handleLoad();
  }, [shape, color, form, line, sign, nowPage]);

  function pageChange(n: number) {
    setPage(n)
  }

  function paginationBtn() {
    const result = []
    if (nowPage < 2) {
      for (let i = 0; i <= totalPage && i < 5; i++) {
        result.push(i)
      }
    } else if (nowPage + 2 > totalPage) {
      for (let i = totalPage - 4; i <= totalPage; i++) {
        result.push(i)
      }
    }
      else {
      for (let i = nowPage - 2; i <= totalPage && i <= nowPage + 2; i++) {
        result.push(i)
      }
    }
    setBtn(result)
  }
  useEffect(() => {
    paginationBtn();
  }, [nowPage, totalPage])

  return (
    <div className="medicine-list-page">
      <div className="medicine-list-group-box">
        {medicineList.length > 0 && medicineList.map((medicine, i: number) => (
          <div
            key={i}
            onClick={() => routeDetail(medicine.no)}
            className="medicine-list-item"
          >
            <img
              className="medicine-list-item-img"
              src={`https://j6d108.p.ssafy.io/images/medicine/${medicine.num}.jpg`}
              alt=""
            />
            <div>
              <div className="medicine-list-item-title">
                <p className="medicine-list-item-name">{medicine.name}</p>
                <img
                  className="medicine-list-item-popup"
                  src={Popup}
                  alt=""
                />
              </div>
              <div className="medicine-list-item-desc">
                <p>○ 제조사: {medicine.company}</p>
                <p>○ 분류: {medicine.class_name}</p>
                <p>○ 구분: {medicine.etc_otc_name}</p>
              </div>
            </div>
          </div>
        ))}
        {medicineList.length === 0 && (
          <div className="medicine-list-group-box">
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
      {totalPage > 20 && (
        <div className="pagination2">
          <div
            onClick={() => {pageChange(0)}}
            className="pagination-pre-btn"
          >
            <p>{"<<"}</p>
          </div>

          {pageBtn.map((num, i: number) => (
            <div
              key={i}
              onClick={() => {pageChange(num)}}
              className={
                nowPage === num
                  ? "pagination-btn now-page-num"
                  : "pagination-btn"
              }
            >
              <p>{num + 1}</p>
            </div>
          ))}

          <div
            onClick={() => {pageChange(totalPage)}}
            className="pagination-nxt-btn"
          >
            <p>{">>"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
