import './App.css';
import Counter from './components/counter';
import pageLogo from './img/logo.png';
import Button from './components/button';
import { useState } from 'react'

function App() {

  const [clickCount, setClickNum] = useState(0);

  const clickHandler = () => {
    setClickNum(clickCount + 1);
  }

  const reloadCounter = () =>{
    setClickNum(0)
  }
 
  return (
    <div className="App">

      <div className='logo-container'>
       <img
       className='logo'
       src={pageLogo}
       alt='Logo de la pagina'/> 
       </div>

      <div className='main-container'>
        <Counter clickCount={clickCount} />
        <Button
         text='click'
         isClickButton={true}
         clickHandler={clickHandler}/>
        <Button
        text='Reload'
        isClickButton={false}
        clickHandler={reloadCounter} />
        </div>

    </div>
  );
}

export default App;
