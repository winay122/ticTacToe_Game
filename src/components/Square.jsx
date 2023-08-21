import React from "react";

const Square = ({value,onClick, isWinningSquare})=>{

    const textColor = value === 'X' ? 'text-green' : 'text-orange';
    const winningHighlight = isWinningSquare ? 'winning' : '';
    
    return <button type="button" className={`square ${textColor} ${winningHighlight}`} 
        onClick={onClick}>
        {value}
    </button>
}

export default Square; 