function CartWidget(props) {
  return (
    <li className="cartWidgetContainer">
      <button className="cartWidgetContainer__cart"></button>
      <span className="cartWidgetContainer__counter">{props.count}</span>
    </li>
  )
}

export default CartWidget