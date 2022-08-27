import '../Styles/Counter.css'

function Counter( {clickCount} ) {
    return (
        <div className='Counter'>
            {clickCount}
        </div>
    );
}

export default Counter;