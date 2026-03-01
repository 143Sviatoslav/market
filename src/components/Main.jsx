import { useState, useContext } from "react";
import Products from "./Products";
import AddMoney from "./AddMoney1";
import  "./style.css"
import { moneyContext } from "./moneyContext";

const Main =()=>{
    const [check, setCheck] = useContext(moneyContext)
    return(
<>
<div className="container">
    <h2>your name: user</h2>
    <h2>your balance: {check}</h2>
</div>

</>

)
}


export default Main