import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/ui/Button";
import Button2 from './components/ui/Button2';
import Button3 from './components/ui/Button3';
import Button4 from './components/ui/Button4';
import Button5 from './components/ui/Button5';

function App() {
  const action = () => {
    console.log("AAAAA");
  }
  // const action2 = () => {
  //   console.log("AAAAA 2");
  // }
  return (

    <div className="App">
     <Button text="Hola" variant="success" onClick={ () => action()} otra="otra"/>
     <Button2 text="Hola 2" />
     <Button3 text={"Button 3"}/>
     <Button4 text={"Button 4"}/>
     <Button5 text={"Button 5"} variant="danger"/>
    </div>
  );
}

export default App;
