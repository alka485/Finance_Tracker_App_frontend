/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//-------------------dependency
import { InnerLayout } from '../styles/Layout';
import Chart  from './Chart.jsx';
import { dollar } from '../utils/Icons'

const DashboardStyled = styled.div``;

const Dashboard = () => {
  
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
                <p>{dollar}</p>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>

    </DashboardStyled>
  )
}

export default Dashboard