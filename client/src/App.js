import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Product from './pages/products/product';
import Inventory from './pages/inventory/inventory';
import Order from './pages/order/order';
import SingleProduct from './pages/products/single_product';
import LogIn from   './pages/log_in';
import BasicNavbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
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
            <Route path='/inventory' element= { <Inventory />} />
            <Route path='/order' element= { <Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
