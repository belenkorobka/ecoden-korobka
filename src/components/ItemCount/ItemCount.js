import { useState } from "react"

function ItemCount({ stock, initial, onAdd}) {
  const [count, setCount] = useState(initial)

  /**
   * @description Increments count state by 1
   */
  function add (e) {
    e.preventDefault()
    if (count < stock) setCount((prevState) => prevState + 1);
  }

  /**
   * @description Decreases count state by 1
   */
  function subtract (e) {
    e.preventDefault()
    if (count > initial) setCount((prevState) => prevState - 1);
  }

  return (
    <section className="itemCountContainer">
      <div className="itemCountContainer__counter">
        <button className="itemCountContainer__counter--subtract" onClick={subtract}></button>
        <span className="itemCountContainer__counter--count">{count}</span>
        <button className="itemCountContainer__counter--add" onClick={add}></button>
      </div>
      <button className="itemCountContainer__addButton" onClick={(e) => onAdd(e, count)}>Añadir al carrito</button>
    </section>
  )
}

export default ItemCount