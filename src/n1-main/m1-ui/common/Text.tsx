import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  color: #015668;
`
type OwnPropsType = {
    text: string
}
type PropsType = OwnPropsType
const Text: React.FC<PropsType> = (props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}
export default Text