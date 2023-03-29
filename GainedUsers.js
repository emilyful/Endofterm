/*
title: Endofterm Assessment - Emil Fulford
author: Emily Fulford
studentnumber: 221075*/

import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
    return (
        <Bar data={chartData}/>
    )
  }
  
  export default BarChart