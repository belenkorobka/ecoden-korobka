import { useState } from 'react';
import { useCart } from '../../context/CartContext'
import { getFirestore } from "../../firebase";

function Checkout() {
  const { cartProducts, total, clear} = useCart()
  const [orderMade, setOrderMade] = useState(false)
  const [orderData, setOrderData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false) 

  function handleSubmit (e) {
    e.preventDefault()

    if(e.target[2].value !== e.target[3].value) {
      setError(true)
    } else {
      setIsLoading(true)
      
      const items = cartProducts.map(item => {
        return {
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price
        }
      })
  
      const newOrder = {
        buyer: {name: e.target[0].value, phone: e.target[1].value, email: e.target[2].value},
        items,
        total,
        date: new Date()
      }
  
      const db = getFirestore()
      const ordersCollection = db.collection("orders")
  
      ordersCollection
        .add(newOrder)
        .then((docRef) => purchaseData(docRef))
        .catch((error) => console.log(error))
    } 

    // const items = cartProducts.map(item => {
    //   return {
    //     id: item.id,
    //     title: item.title,
    //     quantity: item.quantity,
    //     price: item.price
    //   }
    // })

    // const newOrder = {
    //   buyer: {name: e.target[0].value, phone: e.target[1].value, email: e.target[2].value},
    //   items,
    //   total,
    //   date: new Date()
    // }

    // const db = getFirestore()
    // const ordersCollection = db.collection("orders")

    // ordersCollection
    //   .add(newOrder)
    //   .then((docRef) => purchaseData(docRef))
    //   .catch((error) => console.log(error))
  }

  function purchaseData (data) {
    clear()
    setIsLoading(false)
    setOrderMade(true)
    setOrderData(data)
  }

  if (orderMade) {
    return (
      <section className="checkoutContainer">
        <h2>Gracias por tu compra</h2>
        <p>Podrás seguir el estado de tu compra con el siguiente id: {orderData.id}</p>
      </section>
    )
  } else {
    return (
      <section className="checkoutContainer">
        <form className="checkoutContainer__form" onSubmit={handleSubmit}>
          <div className="checkoutContainer__form--input">
            <label htmlFor="name" >Nombre y apellido</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="checkoutContainer__form--input">
            <label htmlFor="phone">Teléfono</label>
            <input type="number" id="phone" name="phone" required/>
          </div>
          <div className="checkoutContainer__form--input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="checkoutContainer__form--input">
            <label htmlFor="emailRepeat">Repetir Email</label>
            <input type="email" id="repeatEmail" name="repeatEmail" required/>
          </div>
          {error && <p>Los emails no coinciden</p>}
          <button type="submit" className="checkoutContainer__form--button">{!isLoading ? 'Finalizar compra' : 'Cargando...'}</button>
        </form>
      </section>
    )
  }
}

export default Checkout;

