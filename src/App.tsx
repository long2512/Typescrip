import { useState, useEffect } from 'react'
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'
import './App.css'
import Products from './components/Products'
// import ShowInfo from './components/showInfo'
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
    setProducts(products.filter(item=>item._id !== id))
  }

  const onHandleAdd = async (product:IProduct) =>{
    const {data} =await add(product);
    setProducts([...products,data]);
  }

  

  return (
    <div className="App">
      {/* <ShowInfo name="Lê Văn Vương" age={19} /> */}
      {products.map(item => {
        return <div key={item._id}>{item.name} <button onClick={()=>removeItem(item._id)}>Remove</button></div>
      })}
      <header>
       {/* <ul>
         <li>
           <NavLink to="/">HomePage</NavLink>
         </li>
         <li>
           <NavLink to="/products">Products Page</NavLink>
         </li>
         <li>
           <NavLink to="/about">About</NavLink>
         </li>
       </ul> */}
    <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
     </header>
     <main>
       <Routes>
         <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='products'>
              <Route index element={<h1>Hiển thị sản phẩm</h1>}/>
              <Route path=':id' element={<ProductDetail/>}/>
            </Route>
            <Route path='about' element={<h1>Aboutpage</h1>}/>
         </Route>
         <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route index element={<ProductManager />} />
                    <Route path="add" element={<ProductAdd name="Vuong" onAdd={onHandleAdd} />} />
                </Route>
            </Route>
       </Routes>
     </main>
    </div>
  )
}

export default App

