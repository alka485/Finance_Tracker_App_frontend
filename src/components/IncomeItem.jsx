/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//------------------------------------------dependency
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons';
import Button from './Button';


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
                    <p>{dollar} {amount}</p>
                    <p>{calender} {date}</p>
                    <p>{comment} {description}</p>
                </div>
                <div className="btn-con">
                    <Button>
                    icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            {/* onClick={() => deleteItem(id)} */}
                    </Button>
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}

export default IncomeItem