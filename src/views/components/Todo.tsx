import React, { useState, ChangeEvent } from 'react';
import { Action } from 'typescript-fsa';

type Props = {
  todoList: string[];
  addTodo: (todo: string) => Action<string>;
};

const Todo: React.FC<Props> = (props) => {
  const { todoList, addTodo } = props;
  const [todo, setTodo] = useState('');

  return (
    <div>
      <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>追加</button><br />
      <ul>
        {todoList.map((t: string, i: number) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default Todo;
