import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [toDos, setToDos] = useState([]); //원래는 push를 했지만..이렇게state를 이용해서
  function onChange(event) {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo(''); //input 값 지우기
    setToDos((currentArray) => [todo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}
export default App;
