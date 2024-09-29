import { useState } from 'react';
import './index.css';

export default function App(){
    return(
      <div className='App'>
        <Counter />
      </div>
    );
  }

function Counter() {
 
  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);
  
  const date = new Date("30 June 2024");
  date.setDate(date.getDate() + count);
  
  function handleReset(){
    setCounter(0);
    setStep(1);
  }
    return(
      <div>
        <div>
          
          {/* <button className="button" onClick={() => setStep((s) => (s - step))}>-</button> */}
          <input type="range" min="0" max="10" 
          value={step} onChange={(e) => setStep(Number(e.target.value))} />
          <span>Step: {step}</span>
          {/* <button onClick={() => setStep((s) => (s + step))}>+</button> */}
        </div>
        <div>
          <button onClick={() => setCounter((c) => c - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCounter(Number(e.target.value))}
          />
          <button onClick={() => setCounter((c) => c + step)}>+</button>
        </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ?(
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      ) : null}
    </div>
  );
  
}