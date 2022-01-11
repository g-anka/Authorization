import React from "react";
import { Routes, Route } from "react-router-dom";
import Authorization from "./Authorization";


function App(){
    return(
        <div className="App">
            <Routes>
                <Route path ="/" element={<Authorization />} />
            </Routes>
        </div>
    )
}

export default App;