import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    input {
      font-family: 'Poiret One', cursive;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      margin: 5px;
      padding: 5px;
      border: 2px solid #015668;
      border-bottom-width: 4px;
      background: rgba(255,255,255,1);
    }
  
`

type OwnPropsType = {
    placeholder?: string
    type?: string
}
type PropsType = OwnPropsType
const Input: React.FC<PropsType> = (props) => {
    return (
        <Wrapper>
            <input placeholder={props.placeholder} type={props.type}/>
        </Wrapper>
    )
}
export default Input