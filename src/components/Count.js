import { useState } from 'react';

function Count() {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // var count  = 0;

      return (
        <div className="hello" style={{textAlign: "center", padding: "5%", color: "white", background: "red"}}>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>

          {/* <button onClick={() => { console.log(count); return count = count + 1}}>
            Click Me
          </button> */}
        </div>
      );
    }
    
    export default Count;