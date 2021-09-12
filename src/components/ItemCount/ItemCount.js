import { useState } from "react"

function ItemCount({ stock, initial}) {
    const [count, setCount] = useState(initial)
    const [message, setMessage] = useState('')

    function add () {
        if (count < stock) setCount((prevState) => prevState + 1);
    }
    function subtract () {
        if (count > initial) setCount((prevState) => prevState - 1);
    }

    function addToCart() { 
        setMessage(`Agregaste ${count} unidades`)
        console.log(message)
    }

    return (
        <section className="itemCountContainer">
            <div className="itemCountContainer__counter">
                <button className="itemCountContainer__counter--subtract" onClick={subtract}></button>
                <span className="itemCountContainer__counter--count">{count}</span>
                <button className="itemCountContainer__counter--add" onClick={add}></button>
            </div>
            <button className="itemCountContainer__addButton" onClick={addToCart}>Añadir al carrito</button>
        </section>
    )
}

export default ItemCount