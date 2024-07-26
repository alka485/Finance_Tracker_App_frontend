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

const ChartStyled = styled.div`
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        height: 100%;

`;



const Chart = () => {
    const {incomes , expenses} = useGlobalContext()
    const data = {
        labels : incomes.map((inc) => {
            const {date} = inc
            return dateFormat(date) 
        }),
        datasets : [
             {
                label : 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                // tension: .2   //make graphline curve
             },
             {
                label : 'Expenses',
                data: [
                    ...expenses.map((expense)=> {
                        const {amount} = expense
                        return amount
                    })
                ], 
                backgroundColor: 'red',
                // tension: .2   //make graphline curve
             }
        ]
    }
  return (
    <ChartStyled>
        <Line  data = {data}/>
    </ChartStyled>
  )
}

export default Chart