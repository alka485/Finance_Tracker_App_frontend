/* eslint-disable no-unused-vars */
import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'

//Register the element

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,

)

const ChartStyled = styled.div``;



const Chart = () => {
  return (
    <ChartStyled>
        <Line/>
    </ChartStyled>
  )
}

export default Chart