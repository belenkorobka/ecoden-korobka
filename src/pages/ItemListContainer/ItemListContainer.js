import { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router"
import { getFirestore } from "../../firebase"
import ItemList from "../../components/ItemList/ItemList"

function ItemListContainer(props) {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [isCategoryPage, setIsCategoryPage] = useState([])
  const [title, setTitle] = useState([])
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setIsCategoryPage(id ? true : false)
    const db = getFirestore()
    let productsCollection

    if (id) {
      productsCollection = db.collection("products").where('category.id', '==', parseInt(id))
    } else {
      productsCollection = db.collection("products")
    }

    productsCollection.get()
    .then(querySnapshot => setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
    .catch(error => setNotFound(true))

    /**
     * @description Sets the page title according to the page route
     */
    function setPageTitle() {
      switch (parseInt(id)) {
        case 1:
          setTitle('Kits ecológicos')
          break
        case 2:
          setTitle('Cepillos de dientes')
          break
        case 3:
          setTitle('Pastas de dientes')
          break
        case 4:
          setTitle('Hilos dentales')
          break
        case 5:
          setTitle('Accesorios')
          break
        default:
          setTitle('Productos')
          break;
      }
    }

    setPageTitle()

  },[id])
        
  if (notFound) {
    return <Redirect to="/notFound" />    
  }
  return (
    <section className="itemListContainer">
      <h1 className="itemListContainer__title">{title}</h1>
      <ItemList items={items} isCategoryPage={isCategoryPage} ></ItemList>
    </section>
  )
}

export default ItemListContainer