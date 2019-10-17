import DATA from "./pie-data.json";

export default {
  chart() {
    return {
      title: {
        text: DATA.data.title,
        subtext: DATA.data.subTitle,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: DATA.data.leguendData
      },
      series: [
        {
          name: DATA.data.seriesName,
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: DATA.data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

};
