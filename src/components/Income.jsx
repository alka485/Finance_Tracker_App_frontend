/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//-------------------------------------dependency
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/globalContext';

const IncomeStyled = styled.div ``;

const Income = () => {
  const {addIncome} = useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes">

            
          </div>
        </div>

      </InnerLayout>
    </IncomeStyled>
  )
}

export default Income