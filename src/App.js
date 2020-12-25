import React from "react";
import Navigation from "./Navigation";
import Calculator from "./calculator/Calculator";


const App = () => {
    const tabsData = [
        {
            label: "Calculator",
            path: "/calculator",
            body: <Calculator/>,
        },
        {
            label: "Todo",
            path: "/todo",
            body: <h3>Test</h3>,
        }
    ]


    return (
        <Navigation tabs={tabsData}/>
    )
}


export default App;
