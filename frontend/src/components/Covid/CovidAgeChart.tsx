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
    plugins: {
      title: {
        display: true,
        text: '나이대별 코로나 확진자 수',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };


export function CovidAgeChart() {
  const [covid0Total, setCovid0Total] = useState(0);
  const [covid10Total, setCovid10Total] = useState(0);
  const [covid20Total, setCovid20Total] = useState(0);
  const [covid30Total, setCovid30Total] = useState(0);
  const [covid40Total, setCovid40Total] = useState(0);
  const [covid50Total, setCovid50Total] = useState(0);
  const [covid60Total, setCovid60Total] = useState(0);
  const [covid70Total, setCovid70Total] = useState(0);
  const [covid80Total, setCovid80Total] = useState(0);

  const [covid0Today, setCovid0Today] = useState(0);  
  const [covid10Today, setCovid10Today] = useState(0);  
  const [covid20Today, setCovid20Today] = useState(0);  
  const [covid30Today, setCovid30Today] = useState(0);  
  const [covid40Today, setCovid40Today] = useState(0);  
  const [covid50Today, setCovid50Today] = useState(0);  
  const [covid60Today, setCovid60Today] = useState(0);  
  const [covid70Today, setCovid70Today] = useState(0);  
  const [covid80Today, setCovid80Today] = useState(0);

  const handleLoad = () => {
    axios
      .get('/corona/age')
      .then((res) => {
        setCovid0Total(res.data.corona0_total);
        setCovid10Total(res.data.corona10_total);
        setCovid20Total(res.data.corona20_total);
        setCovid30Total(res.data.corona30_total);
        setCovid40Total(res.data.corona40_total);
        setCovid50Total(res.data.corona50_total);
        setCovid60Total(res.data.corona60_total);
        setCovid70Total(res.data.corona70_total);
        setCovid80Total(res.data.corona80_total);

        setCovid0Today(res.data.corona_age_list[0].age0)
        setCovid10Today(res.data.corona_age_list[0].age10)
        setCovid20Today(res.data.corona_age_list[0].age20)
        setCovid30Today(res.data.corona_age_list[0].age30)
        setCovid40Today(res.data.corona_age_list[0].age40)
        setCovid50Today(res.data.corona_age_list[0].age50)
        setCovid60Today(res.data.corona_age_list[0].age60)
        setCovid70Today(res.data.corona_age_list[0].age70)
        setCovid80Today(res.data.corona_age_list[0].age80)
      })
      .catch((err) => {
        console.log(err);
      })

  }

  useEffect(() => {
    handleLoad();
  }, []);


  const labels = ['0~9세', '10~19세', '20~29세', '30~39세', '40~49세', '50~59세', '60~69세', '70~79세', '80세 이상'];

  const data = {
    labels,
    datasets: [
      {
        label: '총 확진자 수',
        data: [covid0Total, covid10Total, covid20Total, covid30Total, covid40Total, covid50Total, covid60Total, covid70Total, covid80Total],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '일일 확진자 수',
        data: [covid0Today, covid10Today, covid20Today, covid30Today, covid40Today, covid50Today, covid60Today, covid70Today, covid80Today],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}