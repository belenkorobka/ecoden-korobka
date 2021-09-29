import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import './style/main.scss'
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/notFound" component={NotFound} />
          <Route path="*">
            <Redirect from="*" to="/notFound" />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
