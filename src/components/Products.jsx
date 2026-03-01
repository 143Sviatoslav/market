import { useState } from "react";
import data from "./productsData.json"
import "./style.css"

const Products = () => {

handleClick = () =>{

}
    return (
        <div className="products">
            {data.map(({ id, img, title, price}) => (
                <div className="card" key={id}>
                    <img className="card-img" src={img}  />
                    <h2 className="title">{title}</h2>
                    <h2 className="price">{price}$</h2>
                    <button className="buy-btn" onClick={handleClick}>buy</button>
                </div>
            ))}
        </div>
    )
}



export default Products 