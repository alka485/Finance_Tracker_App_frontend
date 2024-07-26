/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//-------------------dependency
import { InnerLayout } from '../styles/Layout';
import Chart  from './Chart.jsx';
import { dollar } from '../utils/Icons'
import {useGlobalContext}  from '../context/globalContext'

const DashboardStyled = styled.div``;

const Dashboard = () => {

  const {totalExpenses , totalIncome, totalBalance} = useGlobalContext()  //destructuring
  
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions</h1>
        <div className="state-con">
          <div className="chart-con">
            <Chart/>
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                 </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="history-con"></div>
      </InnerLayout>

    </DashboardStyled>
  )
}

export default Dashboard