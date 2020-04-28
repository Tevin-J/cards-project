import React from 'react';
import Main from "./Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../m2-bll/store";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`
const App = () => {
    return (
        <Wrapper>
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </Wrapper>
    );
}

export default App;
