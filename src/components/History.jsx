
const History = ({history, moveTo, currMove}) => {

    return <div className="history-wrapper">
        <ul className="history">
            {
                history.map((_, indx) => (
                    <li key={indx}>
                    <button type="button" className={`btn-move ${currMove === indx ? 'active' : ''}`} onClick={() => moveTo(indx)}>
                        {indx=== 0 ? 'New Game ⭐😎🎮' : `Go to Move @⏭️   ${indx}`}
                    </button>
                    </li>
                    ))
            }
        </ul>
    </div>
}

export default History;