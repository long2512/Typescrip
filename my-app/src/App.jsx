import { useState } from 'react'
import './App.css'
import ShowInfor from './components/Showinfor'

function App() {
  // const products = [
  //   {id: 1, name: "product A"},
  //   {id: 2, name: "product B"},
  //   {id: 3, name: "product C"},
  // ]
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([
    {id: 1, name: "product A"},
    {id: 2, name: "product B"},
    {id: 3, name: "product C"},
]);
  return(
    <div>
      
      <hr />
      <button onClick={() => setStatus(!status)}>Toggled<button/>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfor name="Long" linkanh="https://www.bing.com/th?id=OIP.X69Zs8g7ykvlsffPB0bDpQHaL2&w=120&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
      <ShowInfor name="Vương" linkanh="https://www.bing.com/th?id=OIP.X69Zs8g7ykvlsffPB0bDpQHaL2&w=120&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
    </div>
  )
  }
export default App;





