import React from 'react';
import Main from "./Main";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../m2-bll/store";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`
const App = () => {
    return (
        <Wrapper className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </Wrapper>
    );
}

export default App;
