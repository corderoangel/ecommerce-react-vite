import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router"


const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/MyAccount" element= {<MyAccount />}/>,
      <Route path="/MyOrder" element= {<MyOrder />}/>,
      <Route path="/MyOrders" element= {<MyOrders />}/>,
      <Route path="/NotFound" element= {<NotFound />}/>,
      <Route path="/SingIn" element= {<SingIn />}/>,
    </Routes>
    </>
  )
}

const App = () => {

  return (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
  )
}

export default App
