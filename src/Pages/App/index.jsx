import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router"


const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/clothes" element={<Home />}/>
      <Route path="/electronics" element={<Home />}/>
      <Route path="/furnitures" element={<Home />}/>
      <Route path="/toys" element={<Home />}/>
      <Route path="/othes" element={<Home />}/>
      <Route path="/my-account" element= {<MyAccount />}/>,
      <Route path="/my-order" element= {<MyOrder />}/>,
      <Route path="/my-orders" element= {<MyOrders />}/>,
      <Route path="/my-orders/last" element= {<MyOrder />}/>,
      <Route path="/my-orders/:id" element= {<MyOrder />}/>,
      <Route path="/sign-in" element= {<SignIn />}/>,
      <Route path="/*" element= {<NotFound />}/>,
    </Routes>
    </>
  )
}

const App = () => {

  return (
    <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu/>
        </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
