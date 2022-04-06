import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

import mapData from '../../assets/data/mapData.js';

require('highcharts/modules/map')(Highcharts)


const mapOptions = {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },
    // tooltip: {
    //   pointFormatter: function() {
    //     return this.properties['woe-label'].split(',')[0];
    //   }
    // },
    series: [{
      mapData: mapData,
      // dataLabels: {
      //   formatter: function() {
      //     return this.point.properties['woe-label'].split(',')[0];
      //   }
      // },
      name: 'South Korea',
      data: [
        ['kr-4194', '10(2)'], ['kr-kg', '10(2)'], ['kr-cb', 12], ['kr-kn', 13],
        ['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 16], ['kr-sj', 17],
        ['kr-tj', 18], ['kr-ul', 19], ['kr-in', 20], ['kr-kw', 21],
        ['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 24], ['kr-so', 25],
        ['kr-tg', 26], ['kr-kj', 27]
      ]
    }]
  }

export default function CovidHighMap() {
    return (
        <HighchartsReact 
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
        />
    )
}