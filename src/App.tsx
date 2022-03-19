import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/Adminlayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/layouts/ProductManager';
import ProductAdd from './pages/ProductAdd';



interface IProduct{
    id: number, 
    name: string
}

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
    };
    getProducts();
  }, [])

  return (
    <div className="App">
        {products.map(item => <div>{item.name}</div>)}
        <header>
            <ul>
              <li>
                <NavLink to="/Home Page">Home Page</NavLink>
              </li>
              <li>
                <NavLink to="/product">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<WebsiteLayout/>}/>
              <Route index element={<Home/>}/>
              <Route path="product" element={<h1>Hien thi san pham</h1>} />
              <Route path="about" element={<h1>About page</h1>} />
            <Route/>

            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<ProductManager />} />
                <Route path="products">
                    <Route  element={<ProductManager />} />
                    <Route path="add" element={<ProductAdd />} />
                </Route>
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App