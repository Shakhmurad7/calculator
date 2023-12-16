
import { useState } from 'react'
import './App.css'

function App() {
const [count , setcount] = useState('')

  return (
    <>
      <div className="claculator-contaner">
          <div className="calculator-input">
              <h2>{count}</h2>
          </div>
          <div className="calculator-text">
            <div className="calculator-block">
              <button onClick={()=>setcount('0')} >AC</button>
              <button onClick={()=>setcount(count.slice(0 , -1))} >DL</button>
              <button>X</button>
              <button>/</button>
            </div>
            <div className="calculator-block">
              <button  onClick={()=>setcount('1' + count)} >1</button>
              <button  onClick={()=>setcount('2' + count )}>2</button>
              <button  onClick={()=>setcount('3')}>3</button>
              <button>+</button>
            </div>
            <div className="calculator-block">
              <button onClick={()=>setcount('4')} >4</button>
              <button onClick={()=>setcount('5')} >5</button>
              <button onClick={()=>setcount('6')} >6</button>
              <button>-</button>
            </div>
            <div className="calculator-block">
              <button  onClick={()=>setcount('7')} >7</button>
              <button  onClick={()=>setcount('8')} >8</button>
              <button  onClick={()=>setcount('9')} >9</button>
              <button>+</button>
            </div>
            <div className="calculator-block-button">
              <button  onClick={()=>setcount('0')} >0</button>
              <button>%</button>
              <button>.</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
