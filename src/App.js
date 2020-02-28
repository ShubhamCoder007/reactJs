import React from 'react';
import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

function App() {
  return (
    <div className="App">

      <FunctionClick/>

      <ClassClick/>

      <EventBind/>

      {/* <Message /> */}

     {/* <Greet name="shubham" surName="Banejee!">
       <p>This is the children component of this prop</p>
     </Greet>

     <Greet name="dip" surName="Banerjee">
       <button>Action</button>
     </Greet>
     
     <Welcome name="shubham" surName="Banejee!"/> */}


     <Counter/>

    </div>
  );
}

export default App;
