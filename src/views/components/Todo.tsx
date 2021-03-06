import React, { Fragment, useState, useEffect, ChangeEvent } from 'react';
import Textarea from './Textarea';
import Checkbox from './Checkbox';

type Props = {
  count: number;
  todoList: string[];
  addTodo: (todo: string) => any;
  initialize: () => any;
};

const Todo: React.FC<Props> = (props) => {
  const { count, todoList, addTodo, initialize } = props;
  const [todo, setTodo] = useState('');

  useEffect(() => { initialize() }, [initialize]); 

  return (
    <Fragment>
      <p>Todoの個数: {count}</p>
      <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>追加</button>
      <ul>
        {todoList.map((t: string, i: number) => <li key={i}>{t}</li>)}
      </ul>
      <Checkbox />
      <Textarea value="aaa" />
    </Fragment>
  );
};

export default Todo;
