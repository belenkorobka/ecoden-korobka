import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function Item (props) {
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
        <ItemCount stock={props.stock} initial={1} />
      </div>
    </Link>
  )
}

export default Item