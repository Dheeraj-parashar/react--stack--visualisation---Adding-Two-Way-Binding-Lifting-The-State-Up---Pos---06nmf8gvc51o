import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState()
  const[eValue,seteValue]=useState([])
  const[pop,setPop]=useState()
  const[top,setTop]=useState()

  function handleChange(e){
    setValue(e.target.value)
  }
  function handlePush(){
    seteValue([value,...eValue])
    setValue("")  
  }
  function handlePop(){
    if(eValue.length){
      setPop(eValue[0]);
      seteValue(eValue.slice(1))
    } 
    else{
      window.alert("Stack is empty") 
    }
  }
  function handleTop(){
    if(eValue.length) {
      setTop(eValue[0])
    }
    else{
      window.alert("Stack is empty")
    }
  }

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          <Element value={eValue} />
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlePush}>
              PUSH
            </button>
            <input type="text" className="form-control" value={value} onChange={e=>handleChange(e)}/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlePop}>
              POP
            </button>
            <input type="text" disabled className="form-control" value={pop} />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleTop}>
              TOP
            </button>
            <input type="text" disabled className="form-control" value={top} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
