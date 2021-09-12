import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import products from "../../data.json"

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then((response) => setItems(response))
    },[])

    function getProducts() {
        return new Promise((resolve) => {
          setTimeout(() => resolve(products), 2000);
        });
    };

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer__title">{props.greeting}</h1>
            <ItemList items={items}></ItemList>
        </section>
    )
}

export default ItemListContainer