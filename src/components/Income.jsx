/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import styled from 'styled-components'
//-------------------------------------dependency
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/globalContext';
import Form from './Form';
import IncomeItem from './IncomeItem';

const IncomeStyled = styled.div ``;

const Income = () => {
  const {addIncome,incomes,getIncomes} = useGlobalContext();
  console.log(incomes);

  useEffect(() => {
    getIncomes()

  }, [])
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const {_id, title, amount, date, category, description, type} = income;
              return <IncomeItem
                        key={_id}
                        id={_id} 
                        title={title} 
                        description={description} 
                        amount={amount} 
                        date={date} 
                        type={type}
                        category={category} 
                        indicatorColor="var(--color-green)"
              
              />
            })}
          </div>
        </div>

      </InnerLayout>
    </IncomeStyled>
  )
}

export default Income