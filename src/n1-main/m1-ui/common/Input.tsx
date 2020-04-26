import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    input {
      font-family: 'Poiret One', cursive;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      padding: 5px;
      border: 2px solid #015668;
      border-bottom-width: 4px;
      background: rgba(255,255,255,1);
    }
  
`
const Input = () => {
    return (
        <Wrapper>
            <input placeholder='Введите текст'/>
        </Wrapper>
    )
}
export default Input