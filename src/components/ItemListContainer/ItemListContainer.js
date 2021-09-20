import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
    },[])

    function getProducts() {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.log(error))
    };

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer__title">{props.greeting}</h1>
            <ItemList items={items}></ItemList>
        </section>
    )
}

export default ItemListContainer