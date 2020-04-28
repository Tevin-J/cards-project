import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.span`
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
`
type OwnPropsType = {
    to: string
    text: string
}
type PropsType = OwnPropsType
const MyLink: React.FC<PropsType> = (props) => {
    return (
        <Wrapper>
            <NavLink to={props.to}>{props.text}</NavLink>
        </Wrapper>
    )
}
export default MyLink