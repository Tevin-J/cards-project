import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  margin: 0 auto;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  color: #263f44;
`
const Text = () => {
    return (
        <Wrapper>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum ipsa itaque iusto laudantium
            nisi quae quaerat veniam, vitae? Deserunt fuga itaque laudantium optio provident vitae? Animi cumque
            repellat temporibus?
        </Wrapper>
    )
}
export default Text