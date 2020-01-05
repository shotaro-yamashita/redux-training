import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as todoActions from './actions';

type State = {
  todoList: string[];
  errorMessage: string;
}
const initialState: State = {
  todoList: [],
  errorMessage: '',
};

export default reducerWithInitialState(initialState)
  .case(todoActions.addTodo, (state, payload) => ({ ...state, todoList: [...state.todoList, payload] }))
  .case(todoActions.doneLoadingTodoList, (state, payload) => {
    return { ...state, todoList: payload.result };
  })
  .case(todoActions.failedLoadingTodoList, (state, payload) => {
    return { ...state, errorMessage: payload.error };
  });