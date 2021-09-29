import { createContext, useState , useContext, useEffect } from "react"

const CartContext = createContext("")

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState()
  const [cartCount, setCartCount] = useState()

  useEffect(() => {
    function getTotal () {
      let totalPrice = 0
      for (let i = 0; i < cartProducts.length; i++) {
        totalPrice += (cartProducts[i].price * cartProducts[i].quantity)       
      }
      setTotal(totalPrice)
    }
    getTotal()

    function getCartCount () {
      let totalProducts = 0
        for (let i = 0; i < cartProducts.length; i++) {
          totalProducts += cartProducts[i].quantity  
        }
      setCartCount(totalProducts)
    }
    getCartCount()

  }, [cartProducts])

  function addProduct(product, quantity) {
    if(cartProducts.find(item => item.id === product.id)) {
      setCartProducts(prevState => prevState.map(item => item.id === product.id ? { ...item, quantity: item.quantity += quantity} : item))
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        line: product.line,
        price: product.price,
        image: product.pictureUrl,
        quantity
      }
      setCartProducts((prevState) => [...prevState, newProduct])
    }
  }

  function removeProduct(e, product) {
    e.preventDefault()
    setCartProducts(prevState => prevState.filter(item => item.id !== product))
  }

  function clear() {
    setCartProducts([])
  }

  function isInCart (product) {
    return cartProducts.findIndex(item => item.id === product) > -1 ? true : false
  }

  return <CartContext.Provider value={{ cartProducts, addProduct, removeProduct, total, cartCount, isInCart, clear }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("El hook useCart debe ser usado dentro de un CartProvider")
  }

  return context
}