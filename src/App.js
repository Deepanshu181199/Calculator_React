import { useState } from "react"
import './App.css'

function App(){

    const [result, setResult] = useState('')

    function handleClick(e){
        setResult(result.concat(e.target.name))
    }

    function clear(){
        setResult('')
    }

    function backspace(){
        setResult(result.slice(0, -1))
    }

    function calculate(){
        try{
            setResult(eval(result))
        }
        catch(err){
            setResult('Error')
        }
    }

    return( 
    <>
    
        <div id="container">
            <form>
                <input type="text" value={result} onChange={(e)=>setResult(e.target.value)} />
            </form>

            <div className="keypad">
                <button className="highlight" id="clear" onClick={clear}>Clear</button>
                <button className="highlight" onClick={backspace}>C</button>
                <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className="highlight" name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button className="highlight" id="result" onClick={calculate}>=</button>
            </div>
        </div>
   
    </>

    )
}

export default App