import { useState, useEffect } from 'react'
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'
import Products from './components/Products'
import "bootstrap/dist/css/bootstrap.min.css";

import { add, remove } from './api/products'
import { IProduct } from './types/products'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './pages/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductsManager'
import ProductAdd from './pages/AddProducts'
import Header from './components/Header';
import EditProduct from './pages/layout/EditProduct';

function App() {
  // const [products,setProducts] = useState<IProduct>(data)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getProudcts = async () => {
      const reponse = await fetch('http://localhost:8000/api/products');
      const data = await reponse.json();
      // console.log(data);
      setProducts(data);
    }
    getProudcts()
  },[])

  const removeItem = (id :number) =>{
    //call api
    remove(id);
    //rêRender
    setProducts(products.filter(item=>item.id !== id))
  }

  const onHandleAdd = async (product:IProduct) =>{
    const {data} =await add(product);
    setProducts([...products,data]);
  }

  

  return (
    <div className="App">
      {/* <ShowInfo name="Lê Văn Vương" age={19} /> */}
      {products.map(item => {
        return <div key={item.id}>{item.name} - {item.price}<button onClick={()=>removeItem(item.id)}>Remove</button></div>
      })}
      <header>
       <ul>
         <li>
           <NavLink to="/">HomePage</NavLink>
         </li>
         <li>
           <NavLink to="/products">Products Page</NavLink>
         </li>
         <li>
           <NavLink to="/about">About</NavLink>
         </li>
       </ul>
    {/* <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes> */}
     </header>
     <main>
       <Routes>
         <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='products'>
              <Route index element={<ProductManager onRemove={removeItem} products={products}/>}/>
              <Route path=':id' element={<ProductDetail/>}/>
            </Route>
            <Route path='about' element={<h1>Aboutpage</h1>}/>
         </Route>
         <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route index element={<ProductManager onRemove={removeItem} products={products} />} />
                    <Route path="add" element={<ProductAdd  onAdd={onHandleAdd} />} />
                    <Route path=":id/edit" element={<EditProduct />} />
                </Route>
            </Route>
       </Routes>
     </main>
    </div>
  )
}

export default App

