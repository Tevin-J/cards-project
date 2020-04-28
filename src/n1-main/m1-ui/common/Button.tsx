import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 5px;
  padding: 5px 15px;
  overflow: hidden;
  border: 2px solid;
  border-bottom-width: 4px;
  font-family: 'Poiret One', cursive;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  color: #015668;
  background: rgba(255,255,255,1);
  transition: color .3s, background .5s;
  :hover {
      cursor: pointer;
      animation: stripes 1s infinite linear;
      background: linear-gradient(45deg, #fff1cf 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, 
                  #fff1cf 50%, #fff1cf 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1));
      background-size: 10px 10px;
      color: #015668;
  }
  @keyframes stripes {
      0% {background-position: 0 0;}
      100% {background-position: 50px 0;}
  }
`

type OwnPropsType = {
    name: string
}
type PropsType = OwnPropsType
const Button: React.FC<PropsType> = (props) => {
    return (
        <Wrapper>
            {props.name}
        </Wrapper>
    )
}
export default Button