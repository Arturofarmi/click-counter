import '../Styles/Button.css'

function Button( {text, isClickButton, clickHandler} ) {
    return (
        <button
        className={isClickButton ? 'click-button' : 'reload-button'}
        onClick={clickHandler}>
            {text}
        </button>
    );
}

export default Button;