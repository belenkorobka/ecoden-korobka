import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../context/CartContext"

function Item (props) {
  const { addProduct, isInCart } = useCart()

  /**
   * @description Gets quantity of products added by user and calls addProduct method
   * @param {Number} quantity 
   */
   function onAdd(e, quantity) {
    e.preventDefault()
    const item = {
      id: props.id,
      title: props.title,
      line: {id: 0, name: props.line},
      price: props.price,
      pictureUrl: props.pictureUrl
    }
    addProduct(item, quantity)
  }

  return (
    <Link className="itemContainer" to={`/product/${props.id}`}>
      <div className="itemContainer__header">
        <img className="itemContainer__header--image" src={props.pictureUrl} alt="imagen producto"/>
      </div>
      <div className="itemContainer__body">
        <div className="itemContainer__body--product">
          <div className="line">Línea {props.line}</div>
          <div className="title">{props.title}</div>
        </div>
        <div className="itemContainer__body--data">
          <div className="description">{props.description}</div>
          <div className="price">${props.price}</div>
        </div>
        {!isInCart(props.id) && <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>}
        {isInCart(props.id) && 
          <div className="itemContainer__productAdded">
            <p className="itemContainer__productAdded--quantity">Producto añadido al carrito</p>
            <button className="itemContainer__productAdded--goToCart">Ir al carrito</button>
          </div>
        }
      </div>
    </Link>
  )
}

export default Item