import { Link } from "react-router-dom"

function CartWidget(props) {
  return (
    <li className="cartWidgetContainer">
      {/* <button className="cartWidgetContainer__cart"></button> */}
      <Link to="/cart" className="cartWidgetContainer__cart"></Link>
      <span className="cartWidgetContainer__counter">{props.count}</span>
    </li>
  )
}

export default CartWidget