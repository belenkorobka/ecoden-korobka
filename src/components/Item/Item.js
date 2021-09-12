import ItemCount from "../ItemCount/ItemCount"

function Item (props) {
  return (
    <section className="itemContainer">
      <div className="itemContainer__header">
        <img className="itemContainer__header--image" src={props.pictureUrl} alt="imagen producto"/>
      </div>
      <div className="itemContainer__body">
        <div className="itemContainer__body--product">
          <div className="line">Línea {props.line}</div>
          <div className="title">{props.title}</div>
        </div>
        <div className="itemContainer__body--data">
          <div className="description">{props.description}</div>
          <div className="price">${props.price}</div>
        </div>
        {/* <div className="itemContainer__body--data">
          <div className="description"></div>
          <div className="price"></div>
        </div> */}
        <ItemCount stock={12} initial={1} />

      </div>
    </section>
  )
}

export default Item