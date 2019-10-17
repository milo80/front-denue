import data from './map-data.json'

export default {
  title: {
      text: data.nacion.title,
      subtext: data.nacion.subTitle,
      sublink: data.nacion.subLink,
      left: 'right'
      // bottom: 'left'
  },
  tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
          var value = (params.value + '').split('.');
          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
          return params.seriesName + '<br/>' + params.name + ': ' + value;
      }
  },
  visualMap: {
      left: 'right',
      min: data.nacion.scaleBar.min,
      max: data.nacion.scaleBar.max,
      inRange: {
          // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          color: ['#0099cc', '#0099ff', '#33ccff', '#66ccff', '#ff99cc','#ff99cc', '#ff99cc', '#ff6699', '#ff0066', '#cc0066', '#990033']
        },
      text:['Max','Min'],           // 文本，默认为数值文本
      calculable: true
  },
  toolbox: {
      show: true,
      // orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
      }
  },
  series: [
      {
          name: 'Nación',
          type: 'map',
          roam: true,
          map: 'world',
          itemStyle:{
              emphasis:{label:{show:true}}
          },
          // 
          data: data.nacion.seriesData
      }
  ]
};