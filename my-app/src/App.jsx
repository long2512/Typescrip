import { useState } from 'react'
import ShowInfor from './components/Showinfor';

function App() {
  // const products = [
  //   { id: 1, name: "Product A"},
  //   { id: 2, name: "Product B"},
  //   { id: 3, name: "Product C"},
  // ]
  const [count, setCout] = useState(0);
  const [myName, setMyName] = useState("Vương");
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Product A"},
    { id: 2, name: "Product B"},
    { id: 3, name: "Product C"},
  ]);
  return (
    <div>
      Count: {count} <button onClick={() => setCout(count + 1)}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName("Long")}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggled</button>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfor name="Long" linkanh="https://www.bing.com/th?id=OIP.X69Zs8g7ykvlsffPB0bDpQHaL2&w=120&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
      <ShowInfor name="Vương" linkanh="https://www.bing.com/th?id=OIP.X69Zs8g7ykvlsffPB0bDpQHaL2&w=120&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
    </div>
  )
}

export default App





