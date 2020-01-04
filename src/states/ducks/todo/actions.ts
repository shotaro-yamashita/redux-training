import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export default {
  addTodo: actionCreator<string>('ADD_TODO'),
};
