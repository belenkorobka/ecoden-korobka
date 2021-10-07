import { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router"
import { getFirestore } from "../../firebase";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

function ItemDetailContainer(props) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const db = getFirestore()
    const productsCollection = db.collection("products");
    const product = productsCollection.doc(id);

    product.get()
      .then((doc) => {
        if (!doc.exists) {
          throw Error
        } else {
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
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