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
//---------------------------------------------------------dependency
import {useGlobalContext} from '../context/globalContext'
import  {dateFormat}  from '../utils/dateFormat'

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
    const {incomes , expenses} = useGlobalContext()
    const data = {
        labels : incomes.map((inc) => {
            const {date} = inc
            return dateFormat(date) 
        })

    }
  return (
    <ChartStyled>
        <Line/>
    </ChartStyled>
  )
}

export default Chart