import './style.scss'
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { useState } from "react";
import { calculateWinner } from './winner';

function App(){

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(squares);

    const handleSquareClick = (clickedPosition) => {

        if(squares[clickedPosition] ||winner){
            return;
        }
        
        setSquares((currentSqrs)=>{
            return currentSqrs.map((sqrValue, position) => {
                if(clickedPosition === position){
                    return isXNext ? "X" : "O";
                }
                return sqrValue;
            })
        })

        setIsXNext((currentIsXNext) => !currentIsXNext)
    }

    return(
        <div className='app'>
            <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
            <Board squares={squares} handleSquareClick={handleSquareClick}/>
        </div>
    );
}

export default App;