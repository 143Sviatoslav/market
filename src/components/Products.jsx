import { useState } from "react";
import data from "./productsData.json"
import "./style.css"

const Products = ({}) => {
    // Потрібно замість змінної myBalance прислати баланс свого рахунку у пропсу
    let myBalance = 10
    function handleClick(evt) {
        const productPrice = parseInt(evt.currentTarget.previousElementSibling.textContent)
        if (myBalance >= productPrice) {
            alert('Success')
            myBalance-=productPrice
            // після покупки відправити в ExistProduct.jsx Назву та ціну товару
            const nameOfProduct = evt.currentTarget.previousElementSibling.previousElementSibling.textContent
            // productPrice та nameOfProduct - готові для відправки у ExistProduct.jsx
        } else {
            alert('Error')
        }
    }
    return (
        <div className="products">
            {data.map(({ id, img, title, price }) => (
                <div className="card" key={id}>
                    <img className="card-img" src={img} />
                    <h2 className="title">{title}</h2>
                    <h2 className="price">{price}$</h2>
                    <button className="buy-btn" onClick={handleClick}>buy</button>
                </div>
            ))}
        </div>
    )
}



export default Products 
