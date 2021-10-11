import { Link } from "react-router-dom"
import { useCart } from '../../context/CartContext'

function Cart() {
  const { cartProducts, total, removeProduct, clear } = useCart()

  return (
      <section className="cartContainer">
        <h2 className="cartContainer__title">Mi Carrito</h2>
        <div className="cartContainer__items">
          {cartProducts.length === 0 && 
          <>
            <p className="emptyCartLabel">Oh no! aún no tenés productos en tu carrito</p>
            <Link to='/'>Buscar productos</Link>
          </>
          }
          {cartProducts?.map(item => {
            return (
              <div className="card" key={item.id}>
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
              </div>
            )
          })
          }
        </div>
        <div className="cartContainer__footer">
          <p className="cartContainer__footer--title">Resumen de compra</p>
          <p className="cartContainer__footer--total">
            <span className="totalLabel">Total</span>
            <span className="totalPrice">${total}</span>
          </p>
          <Link to="/checkout" className="cartContainer__footer--buy">Comprar</Link>
          {cartProducts.length >= 1 && <p className="emptyCartButton" onClick={clear}>Vaciar Carrito</p>}
        </div>
      </section>
  )
}

export default Cart;