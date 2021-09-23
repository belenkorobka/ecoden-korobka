import Item from "../Item/Item"

function ItemList({ items, isCategoryPage }) {
  return (
    <div className="itemList">
      {items?.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            line={item.line.name}
            description={item.description}
						price={item.price}
            pictureUrl={isCategoryPage ? `.${item.pictureUrl}` : item.pictureUrl}
            id={item.id}
          />
        )
      })}
    </div>
  )
}

export default ItemList
