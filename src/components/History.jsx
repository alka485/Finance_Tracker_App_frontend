/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//---------------------------------------------dependency
import {useGlobalContext} from '../context/globalContext'

const HistoryStyled = styled.div``;

const History = () => {
    const {transactionHistory} = useGlobalContext();
  return (
    <HistoryStyled>History</HistoryStyled>
  )
}

export default History