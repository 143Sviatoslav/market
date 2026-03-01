import { useState } from "react";
import Main from "./Main";
import data from "./productsData.json"
import "./style.css"

const ExistProduct =()=>{
const [basket, setBasket] = useState(0)


return  (
    <div className="basket">
        <h2>basket: {}</h2>
        <ul>
            {data.map(({ id, title, price}) => (
            <li key={id}>
                <h2>{title}-{price}</h2>
            </li>
            ))}
        </ul>
    </div>
)}
export default ExistProduct 