import React, { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState('')

  const [counter, setValue] = useState(0)

  const onClick = () => setValue((prev) => prev + 1)

  const onChange = (event) => {
    setKeyword(event.target.value)
  }


  useEffect(() => {
    console.log('I run only once')
  }, [])

  useEffect(() => {
    console.log('I run "keyword" change')
  }, [keyword])

  useEffect(() => {
    console.log('I run "counter" change')
  }, [counter])

  useEffect(() => {
    console.log('I run "keyword & counter" change')
  }, [counter, keyword])


  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder="Search here..." ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );

}

export default App;
