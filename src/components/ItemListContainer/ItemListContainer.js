import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer(props) {
    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer__title">{props.greeting}</h1>
            <ItemCount stock={12} initial={1}></ItemCount>
        </section>
    )
}

export default ItemListContainer