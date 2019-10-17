import rol from '../data/roles-data.json'

export default {
  title: {
      text: rol.data.title,
      subtext: '',
      sublink: ''
  },
  tooltip : {
      trigger: 'axis',
      axisPointer : {          
          type : 'shadow'     
      }
  },
  grid: {
    left: '15%',
    right: '5%',
    top: '12%',
    bottom: '5%',
    containLabel: true
  },
  
  xAxis: {
      type : 'value',
      position: 'top',
      splitLine: {lineStyle:{type:'dashed'}},
  },
  yAxis: {
      type : 'category',
      axisLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      splitLine: {show: false},
      data : rol.data.leguendData
  },
  series : [
      {
          name:'Participantes',
          type:'bar',
          stack: 'stack', // check WTF stack is
          label: {
              normal: {
                  show: true,
                  formatter: '{b}'
              }
          },
          data: rol.data.seriesData,
          itemStyle: {
            normal: {
              color: '#cc3300'
            },
            color: '#3399ff'
          }
      }
  ]
}
