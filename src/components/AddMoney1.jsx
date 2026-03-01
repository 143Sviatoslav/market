import { useContext, useState } from "react";
import money from "./money.jpeg"
import "./style.css"
// import { moneyContext } from "./moneyContext";

const AddMoney = () => {
// const [check, setCheck] = useContext(moneyContext)
    const [balance, setBalance] = useState(0)

    return(
        <div>
            {balance}
            <img src={money} onClick={() => setBalance(balance + 1)} />
        </div>
    )
}
export default AddMoney 
