/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React ,{useEffect} from 'react'
import styled from 'styled-components'
//-------------------dependency
import { InnerLayout } from '../styles/Layout';
import Chart  from './Chart.jsx';
import { dollar } from '../utils/Icons'
import {useGlobalContext}  from '../context/globalContext'
import History from './History.jsx';

const DashboardStyled = styled.div `
     .stats-con{
          display: grid;
          grid-template-columns: repeat(5 , 1fr);
          gap:2rem;
          .chart-con{
              grid-column: 1/4;
              height: 400px;
              .amount-con{
                  display: grid;
                  grid-template-columns: repeat(4,1fr);
                  gap:2rem;
                  margin-top: 2rem;
                  .income, .expense{
                      grid-column: span 2;
                  }
                  .income,.expense, .balance{
                        background: #FCF6F9;
                        p{
                        }
                  }    
              }
               .balance {
                    p{
                    
                    }
               }   
          }
     }
     .history-con {
         grid-column: 4/-1;
         h2{
           align-items: center;
         }
     }     

     

`;

const Dashboard = () => {

  const {totalExpenses , totalIncome, totalBalance,getIncomes,getExpenses,incomes,expenses} = useGlobalContext()  //destructuring

   //fetch data on initial render
   useEffect(() => {
    getIncomes()
    getExpenses()

   },[])

  
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions</h1>
        <div className="stats-con">
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
        <div className="history-con">
          <History/>
          <h2 className='salary-title'>Min<span>Salary</span>Max</h2>
          <div className="salary-item">
            {/* fetch min and max income amount */}
            <p>
              ${Math.min(...incomes.map(item => item.amount))}   
            </p>
            <p>
              ${Math.max(...incomes.map(item => item.amount))}
            </p>
          </div>
          <h2 className="salary-title">Min<span>Expense</span>Max</h2>
          <div className="salary-item">
            {/* fetch min and max expense amount */}
            <p>
              ${Math.min(...expenses.map(item => item.amount))}
            </p>
            <p>
              ${Math.max(...expenses.map(item => item.amount))}
            </p>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

export default Dashboard