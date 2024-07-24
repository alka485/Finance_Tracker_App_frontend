/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div ``;

const Button = ({name,icon,onClick,bg,bPad,color,bRad}) => {
  return (
    <ButtonStyled style = {{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    }}>
        {icon}
        {name}
    </ButtonStyled>
  )
}

export default Button