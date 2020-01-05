import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { AppState } from 'states/store';
import { countTodo } from 'states/todo/selectors';
import { addTodo, startLoadingTodoList } from 'states/todo/actions';
import Todo from '../components/Todo';

const mapStateToProps = (state: AppState) => {
  return {
    count: countTodo(state.todo.todoList),
    todoList: state.todo.todoList,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {
    addTodo: (todo: string) => dispatch(addTodo(todo)),
    initialize: () => dispatch(startLoadingTodoList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
