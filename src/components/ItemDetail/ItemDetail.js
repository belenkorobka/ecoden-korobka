import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({item}) {
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(null)
  
  useEffect(() => {
    if(!item.id) setLoading(true)
    else setLoading(false)
  }, [item])

  /**
   * @description Gets quantity of products added by user
   * @param {Number} quantity 
   */
  function onAdd(quantity) {
    setQuantity(quantity)
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
          {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> */}
          {!quantity && <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
          {quantity && 
            <div className="itemDetail__productAdded">
              <p className="itemDetail__productAdded--quantity">Agregaste {`${quantity} ${quantity > 1 ? 'unidades' : 'unidad'}`}</p>
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