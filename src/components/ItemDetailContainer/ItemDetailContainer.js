import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer(props) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
  },[])

  function getProduct() {
    fetch("http://localhost:3001/products/1")
      .then(response => response.json())
      .then(response => setProduct(response))
      .catch(error => console.log(error))
  }

  return (
    <section className="itemDetailContainer">
      <ItemDetail item={product} />
    </section>
  )
}

export default ItemDetailContainer