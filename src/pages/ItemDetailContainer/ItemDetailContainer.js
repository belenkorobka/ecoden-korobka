import { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

function ItemDetailContainer(props) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(response => { 
        if (!response.ok) {
          throw Error
        }
        return response.json()
      })
      .then(response => setProduct(response))
      .catch(error => setNotFound(true))
  },[id])

  if (notFound) {
    return <Redirect to="/notFound" />    
  }
  return (
    <section className="itemDetailContainer">
      <ItemDetail item={product} />
    </section>
  )
}

export default ItemDetailContainer