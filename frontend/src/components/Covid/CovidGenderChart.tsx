import { useEffect, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);


interface CovidGenderType {
    num: number;
    date: Date;
    gender_men: number;
    gender_women: number;
    gender_total_men: number;
    gender_total_women: number;
}


export function CovidGenderChart() {

    const [covidMenTotal, setCovidMenTotal] = useState(0);
    const [covidWomenTotal, setCovidWomenTotal] = useState(0);

    const options: any = {
        plugins: {
            title: {
                display: true,
                text: '성별별 코로나 확진자 수'
            },
            legend: {
                display: true,
            },
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem : any) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }

    const handleLoad = () => {
        axios
          .get('/corona/gender')
          .then((res) => {
            //   console.log(res.data);
            setCovidMenTotal(res.data.corona_men_total);
            setCovidWomenTotal(res.data.corona_women_total);
          })
          .catch((err) => {
              console.log(err);
          })
    }

    useEffect(() => {
        handleLoad();
    }, []);

    const data = {
        labels: ['여성 확진자', '남성 확진자'],
        datasets: [
          {
            label: '# of Votes',
            data: [covidWomenTotal, covidMenTotal],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }

    return (
        <div>
            <Pie data={data} options={options} />;
        </div>
    )
}