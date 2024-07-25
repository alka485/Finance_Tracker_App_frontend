/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button `
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        display: flex;
        align-items: center;
        gap: .5rem;
        cursor: pointer;
        transition: all .4s ease-in-out; 
`;

const Button = ({name,icon,onClick,bg,bPad,color,bRad}) => {
  return (
    <ButtonStyled style = {{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    }} onClick={onClick}>
        {icon}
        {name}
    </ButtonStyled>
  )
}

export default Button