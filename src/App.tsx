import { useEffect, useState } from 'react'
// import { NavLink } from 

import './App.css'


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
        {/* <header>
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
            <Route/>
          </Routes>
        </main> */}
    </div>
  )
}

export default App