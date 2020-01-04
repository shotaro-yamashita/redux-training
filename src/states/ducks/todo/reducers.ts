import { reducerWithInitialState } from 'typescript-fsa-reducers';
import todoActions from './actions';

type State = {
  todoList: string[];
}
const initialState: State = {
  todoList: [],
};

export default reducerWithInitialState(initialState)
  .case(todoActions.addTodo, (state, todo) => ({ ...state, todoList: [...state.todoList, todo] }));