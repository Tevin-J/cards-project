import React from "react";
import styled from "styled-components";
import {BUTTON_PATH, INPUT_PATH, LOGIN_PAGE} from "../routes/Routes";
import MyLink from "../common/MyLink";

const WrapperBlock = styled.div`
  width: 100%;
  height: 50px;
  background-color: #263f44;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
`

const Header = () => {
    return (
        <WrapperBlock>
            <MyLink to={BUTTON_PATH} text={'button'}/>
            <MyLink to={INPUT_PATH} text={'input'}/>
            <MyLink to={LOGIN_PAGE} text={'log in'}/>
        </WrapperBlock>
    )
}
export default Header