/* eslint-disable no-unused-vars */
import React  from 'react'
import styled from 'styled-components'

const FormStyled = styled.form ``;

const Form = () => {
  return (
    <FormStyled>
        <div className="input-control">
            <input type="text" />
        </div>
    </FormStyled>
  )
}

export default Form