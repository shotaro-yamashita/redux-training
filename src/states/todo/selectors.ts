import { createSelector } from 'reselect';
import { AppState } from 'states/store';

const todoListSelector = (state: AppState) => state.todo.todoList;

export const countTodo = createSelector([todoListSelector], (todoList: string[]) => todoList.length);
