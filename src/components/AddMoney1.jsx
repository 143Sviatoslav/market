import { useContext } from "react";
import money from "./money.jpeg"
import "./style.css"
import { moneyContext } from "./moneyContext";

const AddMoney = () => {
const [check, setCheck] = useContext(moneyContext)

    return(
        <div>
            <img src={money} onClick={() => setCheck(check + 1)} />
        </div>
    )
}
export default AddMoney 