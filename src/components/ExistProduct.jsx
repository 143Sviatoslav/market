import { useState } from "react";
import Main from "./Main";
import "./style.css"

const ExistProduct =()=>{
const [basket, setBasket] = useState([])

    function GetInfoBasket(){
        // тут тобі потрібно наповнювати змінну basket об'єктами з ключами name та price
        setBasket([...basket,
            {name:'СЮДИ ПОТРІБНО ВСТАВИТИ НАЗВУ КУПЛЕНОГО ТОВАРУ',
            price:'СЮДИ ПОТРІБНО ВСТАВИТИ ЦІНУ КУПЛЕНОГО ТОВАРУ'}
        ])
    }
return  (
    <div className="basket">
        <h2>basket: {basket.length}</h2>
        <ul>
            {basket.map(({ id, title, price}) => (
            <li key={id}>
                <h2>{title}-{price}</h2>
            </li>
            ))}
        </ul>
    </div>
)}
export default ExistProduct 
