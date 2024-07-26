/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//---------------------------------------------dependency
import {useGlobalContext} from '../context/globalContext'

const HistoryStyled = styled.div``;

const History = () => {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    
  return (
    <HistoryStyled>
        <h2>Recent History</h2>
        {history.map((item) => {
            const {_id,title,amount,type} = item  //destructure
            return(
                <div key={_id} className="history-item">
                    <p style={{
                        color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}>
                        {title}
                    </p>
                    <p style={{
                        color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}>
                        {
                            type === 'expense' ? `-${amount}` : `+${amount}`
                        }
                         
                    </p>

                </div>
            )
        })}
    </HistoryStyled>
  )
}

export default History