import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'states/store';
import todoActions from 'states/todo/actions';
import Todo from '../components/Todo';

const mapStateToProps = (state: AppState) => {
  return {
    todoList: state.todo.todoList,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    addTodo: (todo: string) => dispatch(todoActions.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)