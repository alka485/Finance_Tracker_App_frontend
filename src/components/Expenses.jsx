/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import styled from 'styled-components'
//-------------------------------------------dependency
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/globalContext';
import Form from './Form';
import IncomeItem from './IncomeItem';
import ExpenseForm from './ExpenseForm';

const ExpenseStyled = styled.div`
          display: flex;
          overflow: auto;
          .total-income{
              display: flex;
              justify-content: center;
              align-items: center;
              background: #FCF6F9;
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              border-radius: 20px;
              padding: 1rem;
              margin: 1rem 0;
              font-size: 2rem;
              gap: .5rem;
              span{
                  font-size: 2.5rem;
                  font-weight: 800;
                  color: var(--color-green);
              }
          }
          .income-content{
              display: flex;
              gap: 2rem;
              .incomes{
                  flex: 1;
              }
         }
`;

const Expenses = () => {
  const {addExpense,expenses,getExpenses,deleteExpense,totalExpenses} = useGlobalContext();
  console.log(expenses);

    //fetch data on initial render
  useEffect(() => {
    getExpenses()

  }, [])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-income'>Total Expense: <span>${totalExpenses()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm/>
          </div>
          <div className="incomes">
            {expenses.map((income) => {
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
                        deleteItem={deleteExpense}        
              />
            })}
          </div>
        </div>

      </InnerLayout>
    </ExpenseStyled>
  )
}


export default Expenses