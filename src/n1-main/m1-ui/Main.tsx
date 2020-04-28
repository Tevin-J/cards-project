import React from "react";
import {Routes} from "./routes/Routes";
import Header from "./header/Header";

const Main: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes/>
        </>
    )
}
export default Main