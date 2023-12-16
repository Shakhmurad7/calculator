
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
              <button onClick={()=>setcount('')} >AC</button>
              <button onClick={()=>setcount(count.slice(0 , -1))} >DL</button>
              <button onClick={()=>setcount(count + '*')} >X</button>
              <button  onClick={()=>setcount(count + '/')} >/</button>
            </div>
            <div className="calculator-block">
              <button  onClick={()=>setcount(count + '1')} >1</button>
              <button  onClick={()=>setcount(count + '2' )}>2</button>
              <button  onClick={()=>setcount(count + '3')}>3</button>
              <button onClick={()=>setcount(count + '+')} >+</button>
            </div>
            <div className="calculator-block">
              <button onClick={()=>setcount(count + '4')} >4</button>
              <button onClick={()=>setcount(count + '5')} >5</button>
              <button onClick={()=>setcount(count + '6')} >6</button>
              <button onClick={()=>setcount(count + '-')}  >-</button>
            </div>
            <div className="calculator-block">
              <button  onClick={()=>setcount(count + '7')} >7</button>
              <button  onClick={()=>setcount(count + '8')} >8</button>
              <button  onClick={()=>setcount(count + '9')} >9</button>
              <button onClick={()=> setcount(eval(count))} >=</button>
            </div>
            <div className="calculator-block-button">
              <button  onClick={()=>setcount(count + '0')} >0</button>
              <button onClick={()=>setcount(count / 100)} >%</button>
              <button onClick={()=>setcount(count + '.') } >.</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
