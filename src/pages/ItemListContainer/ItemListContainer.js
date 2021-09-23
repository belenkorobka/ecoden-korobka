import { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router"
import ItemList from "../../components/ItemList/ItemList"

function ItemListContainer(props) {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [isCategoryPage, setIsCategoryPage] = useState([])
  const [title, setTitle] = useState([])
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setIsCategoryPage(id ? true : false)

    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(response => filterItems(response))
      .catch(error => setNotFound(true))
    
    
    /**
     * @description Sets and filters items value according to page route
     * @param {Array} response - Original array of products 
     */
    function filterItems(response) {
      if (id) {
        const filteredItems = response.filter(item => item.category.id === parseInt(id))
        if (!filteredItems.length) throw Error
        setItems(filteredItems)
      }
      else setItems(response)
    }

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