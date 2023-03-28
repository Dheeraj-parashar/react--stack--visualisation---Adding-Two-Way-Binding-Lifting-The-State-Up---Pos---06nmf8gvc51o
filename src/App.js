import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState(null)
  const[eValue,seteValue]=useSate([])
  function handlePush(e){
    setValue(e.target.value)
    seteValue(...eValue.push(value))
    return <Element value={value}/>   
  }
  function handlePop(){
    if(eValue==null) window.alert("stack is empty")
    else{
      seteValue(...eValue.pop())
    return <Element value={value}/>   
    }
  }
  function handleTop(){
    if(eValue==null) window.alert("stack is empty")
    else{
      
    }
  }

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          <Element />
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e)=>{handlePush(e)}}>
              PUSH
            </button>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>{handlePop}}>
              POP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>{handleTop}}>
              TOP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
