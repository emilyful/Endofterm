/*
title: Endofterm Assessment - Emil Fulford
author: Emily Fulford
studentnumber: 221075*/

import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


function LineChart({chartData}) {
    return (
        <Line data={chartData}/>
    )
  }
  
  export default LineChart