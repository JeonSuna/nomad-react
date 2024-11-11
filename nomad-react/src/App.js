import React, { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState('')

  const [counter, setValue] = useState(0)

  const onClick = () => setValue((prev) => prev + 1)

  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  console.log('i run all the time')

  useEffect(() => {
    console.log('call the api')
  }, [])

  useEffect(() => {
    if (keyword.trim() !== '' && keyword.length > 5) { //체크 할 조건을 한번 더 넣어줌 
      console.log('search for', keyword)
    }
  }, [keyword]) //keyword가 변화할 때 코드를 실행하고 싶다면  []자리에 keyword라고 쓴다 

  // console.log('search for', keyword)//상태를 변경 할 때마다 계속 출력됨(코드 전체 리렌더링), 때문에 clickme버튼을 눌러도 계속 출력됨

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder="Search here..." ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );

}

export default App;
