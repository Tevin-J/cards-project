import React from "react";
import { Route } from "react-router-dom";
import {ButtonPath, InputPath, TextPath} from "./routes/Routes";
import Header from "./header/Header";
import Input from "./common/Input";
import Button from "./common/Button";
import Text from "./common/Text";

const Main = () => {
    return (
        <div>
            <Header/>
            <Route path={InputPath} component={Input}/>
            <Route path={ButtonPath} component={Button}/>
            <Route path={TextPath} component={Text}/>
        </div>
    )
}
export default Main