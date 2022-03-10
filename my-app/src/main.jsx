import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


const root = document.querySelector('#root');
const myName = "Long";
const myAge = 21;
const myStatus = true;
const myInfor ={
  name: "long",
  age: "21",
  status: true
}
function showInfor(props){
  return <h1>Hello {props.name}</h1>
}
const ShowInfor = (props) =>{
  return <h1>Hello {props.name}</h1>
}

ReactDOM.render(<div>
  <App></App>
  </div>, root);
