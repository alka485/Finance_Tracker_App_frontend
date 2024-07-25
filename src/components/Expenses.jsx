/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'
import styled from 'styled-components'
//-------------------------------------------dependency
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/globalContext';
import Form from './Form';
import IncomeItem from './IncomeItem';

const ExpenseStyled = styled.div`
          display: flex;
          overflow: auto;
          .total-expense{
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
          .expense-content{
              display: flex;
              gap: 2rem;
              .incomes{
                  flex: 1;
              }
         }
`;

const Expense = () => {
  const {addExpense,expenses,getExpenses,deleteExpense,totalExpense} = useGlobalContext();
  console.log(expenses);

  useEffect(() => {
    getExpenses()

  }, [])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-expense'>Total Expense: <span>${totalExpense()}</span></h2>
        <div className="expense-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {incomes.map((expense) => {
              const {_id, title, amount, date, category, description, type} = expense;
              return <ExpenseItem
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