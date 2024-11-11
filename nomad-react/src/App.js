import React, { useState, useEffect } from "react";

function Hello() {
  function effectFun() {
    console.log('created :)')
    return destroyedFun
  }
  function destroyedFun() {
    console.log('destroyed :(')
  }
  useEffect(effectFun, [])
  return (<h1>
    Hello
  </h1>)
}

function App() {
  const [showing, setShowing] = useState(false)
  function onClick() {
    return setShowing((prev) => !prev)
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'Show'}</button>
    </div>
  )
}
export default App;
