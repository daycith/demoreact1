import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/ui/Button";

function App() {
  const action = () => {
    console.log("AAAAA");
  }
  const action2 = () => {
    console.log("AAAAA 2");
  }
  return (
    <div className="App">
     <Button text="Hola" variant="success" onClick={ () => action()}/>
     <Button text="Hola 2" variant="primary" onClick={ () => action2()}/>
    </div>
  );
}

export default App;
