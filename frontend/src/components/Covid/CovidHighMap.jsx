import { useEffect, useState } from "react";

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

import mapData from '../../assets/data/mapData.js';

import axios from 'axios';


require('highcharts/modules/map')(Highcharts)

export default function CovidHighMap() {

    const [covidTotal, setCovidTotal] = useState(0);
    const [covidSeoul, setCovidSeoul] = useState(0);
    const [covidBusan, setCovidBusan] = useState(0);
    const [covidDaegu, setCovidDaegu] = useState(0);
    const [covidIncheon, setCovidIncheon] = useState(0);
    const [covidGwangju, setCovidGwangju] = useState(0);
    const [covidDaejeon, setCovidDaejeon] = useState(0);
    const [covidUlsan, setCovidUlsan] = useState(0);
    const [covidSejong, setCovidSejong] = useState(0);
    const [covidGyeonggi, setCovidGyeonggi] = useState(0);
    const [covidGangwon, setCovidGangwon] = useState(0);
    const [covidChungn, setCovidChungn] = useState(0);
    const [covidChungs, setCovidChungs] = useState(0);
    const [covidJeonn, setCovidJeonn] = useState(0);
    const [covidJeons, setCovidJeons] = useState(0);
    const [covidGyeongn, setCovidGyeongn] = useState(0);
    const [covidGyeongs, setCovidGyeongs] = useState(0);
    const [covidJeju, setCovidJeju] = useState(0);
    const [covidGita, setCovidGita] = useState(0);

    const handleLoad = () => {
      axios
        .get('/corona/count/today')
        .then((res) => {
          
           setCovidTotal(res.data.corona_count_today[0].count_total)
           setCovidBusan(res.data.corona_count_today[0].count_busan)
           setCovidSeoul(res.data.corona_count_today[0].count_seoul)
           setCovidChungn(res.data.corona_count_today[0].count_chungn)
           setCovidChungs(res.data.corona_count_today[0].count_chungs)
           setCovidDaegu(res.data.corona_count_today[0].count_daegu)
           setCovidDaejeon(res.data.corona_count_today[0].count_daejeon)
           setCovidGangwon(res.data.corona_count_today[0].count_gangwon)
           setCovidGita(res.data.corona_count_today[0].count_gita)
           setCovidGwangju(res.data.corona_count_today[0].count_gwangju)
           setCovidGyeonggi(res.data.corona_count_today[0].count_gyeonggi)
           setCovidGyeongn(res.data.corona_count_today[0].count_gyeongn)
           setCovidGyeongs(res.data.corona_count_today[0].count_gyeongs)
           setCovidIncheon(res.data.corona_count_today[0].count_incheon)
           setCovidJeju(res.data.corona_count_today[0].count_jeju)
           setCovidJeonn(res.data.corona_count_today[0].count_jeonn)
           setCovidJeons(res.data.corona_count_today[0].count_jeons)
           setCovidSejong(res.data.corona_count_today[0].count_sejong)
           setCovidUlsan(res.data.corona_count_today[0].count_ulsan)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    useEffect(() => {
      handleLoad();
    }, []);

    const mapOptions = {
      chart: {
        height: 800,
      },
      title: {
        text: '',
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#EFEFFF'],
          // [0.67, '#4444FF'],
          [1, '#06beb6']
        ]
      },
      tooltip: {
        // pointFormatter: function() {
        //   return `${this.properties['name']} : ${this.properties.data}`;
        // }
      },
      series: [{
        mapData: mapData,
        // dataLabels: {
        //   formatter: function() {
        //     return this.point.properties['woe-label'].split(',')[0];
        //   }
        // },
        name: 'South Korea',
        data: [
          // ['kr-4194', 0], 
          ['kr-kg', covidGyeonggi], 
          ['kr-cb', covidJeonn], 
          ['kr-kn', covidGyeongs],
          ['kr-2685', covidJeons], 
          ['kr-pu', covidBusan], 
          ['kr-2688', covidGyeongn], 
          ['kr-sj', covidSejong],
          ['kr-tj', covidDaejeon], 
          ['kr-ul', covidUlsan], 
          ['kr-in', covidIncheon], 
          ['kr-kw', covidGangwon],
          ['kr-gn', covidChungs], 
          ['kr-cj', covidJeju], 
          ['kr-gb', covidChungn], 
          ['kr-so', covidSeoul],
          ['kr-tg', covidDaegu], 
          ['kr-kj', covidGwangju]
        ]
      }]
    }

    return (
        <HighchartsReact 
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
        />
    )
}