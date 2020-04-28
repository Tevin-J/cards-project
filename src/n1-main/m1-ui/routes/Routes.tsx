import {Route} from "react-router";
import Input from "../common/Input";
import Button from "../common/Button";
import React from "react";
import Login from "../../../n2-features/f1-auth/a1-loginization/l1-ui/Login";

export const INPUT_PATH = '/input'
export const BUTTON_PATH = '/button'
export const TEXT_PATH = '/text'
export const LOGIN_PAGE = '/login'

export const Routes: React.FC = () => {
    return (
        <>
            <Route path={INPUT_PATH} render={() => <Input placeholder={'Введите текст'}/>}/>
            <Route path={BUTTON_PATH} render={() => <Button name={'Click me!'}/>}/>

            <Route path={LOGIN_PAGE} render={() => <Login/>}/>
        </>
    )
}