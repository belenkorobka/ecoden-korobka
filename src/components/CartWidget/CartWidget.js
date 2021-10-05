import { useState } from 'react'
import { Link } from "react-router-dom"
import { useCart } from '../../context/CartContext'
import ClickAwayListener from 'react-click-away-listener'

function CartWidget(props) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartProducts, total, removeProduct, cartCount, clear } = useCart()

  function handleClick () {
    setIsCartOpen(prevState => !prevState)
  }

  function handleClickAway () {
    setIsCartOpen(false)
  }

  return (
    <li className="cartWidgetContainer">
      <button className="cartWidgetContainer__cart" onClick={handleClick}></button>
      {cartProducts.length > 0 && <span className="cartWidgetContainer__counter">{cartCount}</span>}
      {isCartOpen && 
        <ClickAwayListener onClickAway={handleClickAway}>
          <section className="cartWidgetContainer__modal">
            <h3 className="cartWidgetContainer__modal--header">Mi Carrito</h3>
            <div className="cartWidgetContainer__modal--cards">
              {cartProducts.length === 0 && <p className="emptyCartLabel">Oh no! aún no tenés productos en tu carrito</p>}
              {cartProducts?.map(item => {
                return (
                  <Link className="card" key={item.id} to={`/product/${item.id}`}>
                    <div className="card__imageContainer">
                      <img className="card__imageContainer--image" src={`.${item.image}`} alt="imagen producto"/>
                    </div>
                    <div className="card__dataContainer">
                      <div className="card__dataContainer--primaryData">
                        <span className="line">{item.line?.name}</span>
                        <span className="title">{item.title}</span>
                      </div>
                      <div className="card__dataContainer--secondaryData">
                        <span className="quantity">{item.quantity}x</span>
                        <span className="price">${item.price}</span>
                      </div>
                    </div>
                    <button className="card__removeButton" onClick={(e) => removeProduct(e, item.id)}></button>
                  </Link>
                )
              })
              }
            </div>
            <div className="cartWidgetContainer__modal--footer">
              <p className="footerContainer">
                <span className="footerContainer__label">Total</span>
                <span className="footerContainer__totalPrice">${total}</span>
              </p>
              <Link to="/cart" className="goToCart">Iniciar compra</Link>
              {cartProducts.length >= 1 && <p className="emptyCartButton" onClick={clear}>Vaciar Carrito</p>}
              {/* <button className="goToCart">Ir al carrito</button> */}
            </div>
          </section>
        </ClickAwayListener>
      }
    </li>
  )
}

export default CartWidget