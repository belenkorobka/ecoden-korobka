import Item from "../Item/Item"

function ItemList({ items }) {
  console.log(items)
  return (
    <div className="itemList">
      {items?.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            line={item.line}
            description={item.description}
						price={item.price}
            pictureUrl={item.pictureUrl}
          />
        )
      })}
    </div>
  )
}

export default ItemList
