import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({item}) {
  return (
    <section className="itemDetail">
      <div className="itemDetail__imageContainer">
        <img className="itemDetail__imageContainer--image"src={item.pictureDetailUrl} alt="imagen producto"/>
      </div>
      <div className="itemDetail__productData">
        <p className="itemDetail__productData--line">Línea {item.line}</p>
        <h2 className="itemDetail__productData--title">{item.title}</h2>
        <p className="itemDetail__productData--description">{item.detailDescription}</p>
        <p className="itemDetail__productData--price">${item.price}</p>
        <ItemCount stock={item.stock} initial={1} />
      </div>
    </section>
  )
}

export default ItemDetail