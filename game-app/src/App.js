import './App.css';
import Square from './components/Square';
import React, {useEffect, useState} from "react";

const initialState = ["","","","","","","","","" ];

function App() {

  const [ state, setState ]  = useState( initialState );
  const [ playerX, updatePlayerX ]  = useState( false );

  const onsqrClicked = (ind)=>{
    
    let Strings = Array.from(state);
    console.log(Strings);
    Strings[ind] = playerX? 'X' : '0';
    setState(Strings);
    updatePlayerX(!playerX);

  }

  useEffect(()=>{
    const winner =   findWinner();
    if(winner){
      alert(`${winner} is the winner`);
      setState(initialState);
    }
  }, [state])

  const findWinner = ()=>{
    const Lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i=0; i < Lines.length; i++ ){
      const [a, b, c] = Lines[i];
      if( state[a] && state[a] === state[b] && state[a] === state[c] ){
        return state[a];
      }
    } 
    return null;
  }
 


  return (
    <div className="App-header">
      <p className='Heading' >Tic Tac Toe </p>
      <div className='row justify-center' >
        <Square className='border-right-bottom' state={state[0]} onClick={()=>onsqrClicked(0)} />
        <Square className='border-right-bottom' state={state[1]} onClick={()=>onsqrClicked(1)} />
        <Square className='border-bottom' state={state[2]} onClick={()=>onsqrClicked(2)} />
      </div>
      <div className='row justify-center' >
      <Square className='border-right-bottom' state={state[3]} onClick={()=>onsqrClicked(3)} />
      <Square className='border-right-bottom' state={state[4]} onClick={()=>onsqrClicked(4)} />
      <Square className='border-bottom' state={state[5]} onClick={()=>onsqrClicked(5)} />
      </div>
      <div className='row justify-center' >
      <Square className='border-right' state={state[6]} onClick={()=>onsqrClicked(6)} />
      <Square className='border-right' state={state[7]} onClick={()=>onsqrClicked(7)} />
      <Square  state={state[8]} onClick={()=>onsqrClicked(8)} />
      </div>
      <button className='button-style' onClick={()=>setState(initialState)} > New game </button>
    </div>
  );
}

export default App;
