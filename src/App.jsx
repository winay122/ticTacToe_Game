import './style.scss'
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { useState } from "react";
import { calculateWinner } from './winner';
import History from './components/History';

const NEW_GAME = [{squares: Array(9).fill(null), isXNext: false}]

function App(){

    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [isXNext, setIsXNext] = useState(false);
    const [history, setHistory] = useState(NEW_GAME);
    const [currMove, setCurrMove] = useState(0);

    const gamingBoard = history[currMove];

    const {winner, winningSquares} = calculateWinner(gamingBoard.squares);

    // console.log({history,currMove});

    const handleSquareClick = (clickedPosition) => {

        if(gamingBoard.squares[clickedPosition] || winner){
            return;
        }
        
        setHistory((currHistory)=>{

            const isTraversing = currMove+1 !== currHistory.length;

            const lastGamingState = isTraversing ? currHistory[currMove] : currHistory[ currHistory.length -1];

            const nextSquareState = lastGamingState.squares.map((sqrValue, position) => {
                if(clickedPosition === position){
                    return lastGamingState.isXNext ? "X" : "O";
                }
                return sqrValue;
            })

            const base = isTraversing ? currHistory.slice(0, currHistory.indexOf(lastGamingState)+1) : currHistory;

            return base.concat({ squares: nextSquareState, isXNext: !lastGamingState.isXNext})
        })

        setCurrMove((move) => move + 1)
    }

    const moveTo = (move) => {
        setCurrMove(move);
    }

    const onNewGameStart = () => {
        setHistory(NEW_GAME);
        setCurrMove(0);
    }

    return(
        <div className='app'>
            <h1 className='text-orange'>Tic <span className='text-green'>Tac</span> Toe</h1>

            <StatusMessage winner={winner} gamingBoard={gamingBoard}/>

            <Board squares={gamingBoard.squares}
            winningSquares={winningSquares}
            handleSquareClick={handleSquareClick}/>

            <button type='button' onClick={onNewGameStart} className={`btn-reset ${winner ? 'active' : ''}`}>New Game</button>

            <h2>Game Hostory.🎰</h2>
            <History history={history} moveTo={moveTo} currMove={currMove}/>

            <p className='text-orange'>&copy; Vinay</p>

            <div className='bg-balls'/>
        </div>
    );
}

export default App;