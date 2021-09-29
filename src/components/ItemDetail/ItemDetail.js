import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({item}) {
  const { addProduct, isInCart} = useCart()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if(!item.id) setLoading(true)
    else setLoading(false)
  }, [item])

  /**
   * @description Gets quantity of products added by user
   * @param {Number} quantity 
   */
  function onAdd(e, quantity) {
    addProduct(item, quantity)
  }

  if(loading) {
    return <p>Cargando...</p>
  } else {
    return (
      <section className="itemDetail">
        <div className="itemDetail__imageContainer">
          <img className="itemDetail__imageContainer--image"src={item.pictureDetailUrl} alt="imagen producto"/>
        </div>
        <div className="itemDetail__productData">
          <p className="itemDetail__productData--line">Línea {item?.line?.name}</p>
          <h2 className="itemDetail__productData--title">{item.title}</h2>
          <p className="itemDetail__productData--description">{item.detailDescription}</p>
          <p className="itemDetail__productData--price">${item.price}</p>
          {!isInCart(item.id) && <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
          {isInCart(item.id) && 
            <div className="itemDetail__productAdded">
              <p className="itemDetail__productAdded--quantity">Producto añadido al carrito</p>
              <Link to='/cart'>
                <button className="itemDetail__productAdded--goToCart">Ir al carrito</button>
              </Link>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default ItemDetail