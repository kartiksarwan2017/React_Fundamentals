import { useState, useEffect } from 'react';

function Example() {
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `Clicked ${count} times`;
  // });

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `Clicked ${count} times`;
  // }, []);

  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log(count);
    setCount(2);
    console.log(count);
  });


  // useEffect(() => {
  //   console.log(count);
  //   setCount(2);
  //   console.log(count);
  // },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Example;