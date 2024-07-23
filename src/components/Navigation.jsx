/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//-------------------------dependency
import avatar  from '../img/avatar.png'

const NavStyled = styled.div`
      padding: 2rem 1.5rem;
      width: 374px;
      height: 100%;
      background: rgba(252,246,249,0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      
`;

const Navigation = () => {
  return (
    <NavStyled>
        <div className="user-con">
            <img src={avatar} alt=''/>
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
        </div>
    </NavStyled>
  )
}

export default Navigation