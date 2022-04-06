import { useEffect, useState } from "react";
import axios from "axios";

import faker from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
        position: 'top' as const,
        },
        title: {
        display: true,
        text: '날짜 별 확진자 수',
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
          .get('/corona/count')
          .then((res) => {
              console.log(res.data.slice(0, 31).map((row: any) => row.count_date)[0])
              setCovidDateArr(res.data.slice(0, 31).map((row: any) => row.count_date.split("T")[0]))
              setCovidCountArr(res.data.slice(0, 31).map((row: any) => row.count_total))
          })
          .catch((err) => {
              console.log(err)
          })
    }

    useEffect(() => {
        handleLoad();
    }, []);

    const sevenBtn = () => {
        setFlagBtn(8);
    }

    const thirtyBtn = () => {
        setFlagBtn(31);
    }

    const labels = covidDateArr.slice(0, flagBtn);

    const data = {
        labels,
        datasets: [
            {
                label: '국내 총 확진자 수',
                data: covidCountArr.slice(0, flagBtn),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <div>
            <button onClick={sevenBtn}>7일</button>
            <button onClick={thirtyBtn}>30일</button>
            <Bar options={options} data={data} />
        </div>
    );
}
  