import { useEffect, useState } from "react";
import axios from "axios";

import faker from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "날짜 별 확진자 수",
    },
  },
};

export function CovidCountChart() {
  const [covidDateArr, setCovidDateArr] = useState([]);
  const [covidCountArr, setCovidCountArr] = useState([]);

  const [covidChartDate, setCovidChartDate] = useState([]);
  const [covidChartCount, setCovidChartCount] = useState([]);

  const [flagBtn, setFlagBtn] = useState(31);

  const handleLoad = () => {
    axios
      .get("/corona/count")
      .then((res) => {
        setCovidDateArr(
          res.data.slice(0, 31).map((row: any) => row.count_date.split("T")[0])
        );
        setCovidCountArr(
          res.data.slice(0, 31).map((row: any) => row.count_total)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const sevenBtn = () => {
    setFlagBtn(8);
  };

  const thirtyBtn = () => {
    setFlagBtn(31);
  };

  const labels = covidDateArr.slice(0, flagBtn).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "국내 총 확진자 수",
        data: covidCountArr.slice(0, flagBtn).reverse(),
        backgroundColor: "rgb(6, 190, 182)",
      },
    ],
  };
  return (
    <div>
      <div className="covid-btn-container">
        <div
          className={flagBtn === 8 ? "thdays-btn" : "sedays-btn"}
          onClick={sevenBtn}
        >
          주간
        </div>
        <div
          className={flagBtn === 31 ? "thdays-btn" : "sedays-btn"}
          onClick={thirtyBtn}
        >
          월간
        </div>
      </div>
      <Bar options={options} data={data} style={{ margin: "20px" }} />
    </div>
  );
}
