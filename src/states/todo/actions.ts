import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
const loadTodoList = actionCreator.async<void, string[], string>('LOAD_TODO_LIST');

export const addTodo = actionCreator<string>('ADD_TODO');
export const startLoadingTodoList = loadTodoList.started;
export const doneLoadingTodoList = loadTodoList.done;
export const failedLoadingTodoList = loadTodoList.failed;
