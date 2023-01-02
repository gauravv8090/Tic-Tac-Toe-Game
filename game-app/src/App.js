import './App.css';
import Square from './components/Square';
import React, {useState} from "react";

const initialState = ["","","","","","","","","" ];

function App() {

  const [ state, setState ]  = useState( initialState );

 
  return (
    <div className="App-header">
      <p className='Heading' >Tic Tac Toe </p>
      <div className='row justify-center' >
        <Square className='border-right-bottom' state={state[0]} />
        <Square className='border-right-bottom' state={state[1]}/>
        <Square className='border-bottom' state={state[2]}/>
      </div>
      <div className='row justify-center' >
      <Square className='border-right-bottom' state={state[3]} />
      <Square className='border-right-bottom' state={state[4]}/>
      <Square className='border-bottom' state={state[5]}/>
      </div>
      <div className='row justify-center' >
      <Square className='border-right' state={state[6]}/>
      <Square className='border-right' state={state[7]}/>
      <Square  state={state[8]}/>
      </div>
      <button className='button-style' > New game </button>
    </div>
  );
}

export default App;
