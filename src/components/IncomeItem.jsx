/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//------------------------------------------dependency
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons';


const IncomeItemStyled = styled.div``;

const IncomeItem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {
  return (
    <IncomeItemStyled>
        <div className="icon"></div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{dollar}</p>
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}

export default IncomeItem