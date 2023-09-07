import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Product from './pages/products/product';
import Inventory from './pages/inventory/inventory';
import Order from './pages/order/order';
import SingleProduct from './pages/products/single_product';
import LogIn from   './pages/log_in';
import Form from './pages/form/form';
import Cart from './pages/cart/cart';
import Checkout from './pages/cart/checkout';
import SingUp from './pages/sing_up';
import BrandProduct from './filter/brand_products';
import UpdateInventory from './pages/inventory/update_inventory';
import BasicNavbar from './components/navbar';
import BasicFooter from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/sing_up" element={<SingUp />} />
        <Route
          element={
            <>
              <BasicNavbar />
              <Outlet />
            </>
          }
        >
            <Route path='/' element= { <Landing />} />
            <Route path='/product' element= { <Product />} />
            <Route path='/form' element={<Form />} />
            <Route path='/inventory' element= { <Inventory />} />
            <Route path='/order' element= { <Order />} />
            <Route path='/single_product' element= { <SingleProduct />} />
            <Route path='/cart' element= { <Cart />} />
            <Route path='/checkout' element= { <Checkout />} />
            <Route path='/update_inventory/:id' element= { <UpdateInventory />} />
            <Route path='/brand_product' element= { <BrandProduct />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
