import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const WrapperBlock = styled.div`
  width: 100%;
  height: 50px;
  background-color: #263f44;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  span {
    padding-right: 50px;
    a {
      font-family: 'Great Vibes', cursive;
      font-size: 40px;
      text-decoration: none;
      color: #fff1cf;
      :hover {
        color: #ffd369;
      }
    }
    :hover {
    cursor: pointer;
    }
  }
`

const Header = () => {
    return (
        <WrapperBlock>
            <span><NavLink to='button'>button</NavLink></span>
            <span><NavLink to='input'>input</NavLink></span>
            <span><NavLink to='text'>text</NavLink></span>
        </WrapperBlock>
    )
}
export default Header