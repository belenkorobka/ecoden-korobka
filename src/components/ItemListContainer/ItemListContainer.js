function ItemListContainer(props) {
    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer__title">{props.greeting}</h1>
        </section>
    )
}

export default ItemListContainer