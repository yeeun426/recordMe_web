import { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1 ; i <= 2500 ; i++) {
    array.push({
      id : i,
      text : `할 일 ${i}`,
      checked : false,
    });
  }
  return array;
}

function TodoMain() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text : "리액트의 기초 알아보기",
  //     checked : true,
  //   },
  //   {
  //     id: 2,
  //     text: "컴포넌트 스타일링해 보기",
  //     checked : true,
  //   },
  //   {
  //     id: 3,
  //     text : "일정 관리 앱 만들어 보기",
  //     checked : false,
  //   },
  // ]);

  // const nextId = useRef(4);
  const [todos, setTodos] = useState(createBulkTodos);
  
  const nextId = useRef(4);
  
  const onInsert = useCallback( text => {
    const todo = {
      id : nextId.current,
      text,
      checked : false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
    }, []);

  const onRemove = useCallback( id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);
  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos.filter(todo => todo.id !== id));
  //   },
  //   [todos],
  // );

  const onToggle = useCallback( id => {
    setTodos( todos =>
      todos.map( todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },[]);
  // const onToggle = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map( todo =>
  //         todo.id === id ? {...todo, checked: !todo.checked} : todo,
  //         ),
  //       );
  //     },
  //   [todos],
  // );

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos = {todos} onRemove = {onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default TodoMain;
