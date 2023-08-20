
const StatusMessage = ({winner, gamingBoard}) =>{

    const {squares, isXNext} = gamingBoard;

    const noMovesLeft = squares.every((SqrValue) => SqrValue !== null);

    const nextPlayer = isXNext ? "X" : "O";
    // const statusMessage = winner ? `${winner} is Winner.` : `Next Player is ${nextPlayer}`

    const renderStatusMessage = () => {
        if(winner){
            return <>
                <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span> is Winner
            </>;
        }
        if(!winner && noMovesLeft){
            return <>
                Match tied b/t <span className="text-green">X</span> and <span className="text-orange">O</span>
            </>;
        }
        if(!winner && !noMovesLeft){
            return <>
                <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span> it is Your Move.
            </>;
        }

        return null;
    }

    return <div className="status-message">{renderStatusMessage()}</div>
}

export default StatusMessage;