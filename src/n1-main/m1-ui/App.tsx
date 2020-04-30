import React from 'react';
import Main from "./Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../m2-bll/store";
import style from './App.module.css'

const App: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
