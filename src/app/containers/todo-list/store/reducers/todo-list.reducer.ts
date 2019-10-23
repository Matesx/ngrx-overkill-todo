import * as fromAction from '../actions/todo-list.action';
import { TodoListState } from '../../models/todo';
import { todosMock } from 'src/app/mocks/todo-list-data';
import { ActionTypes } from '../../components/enum/action.enum';
import { StateEnum } from '../../components/enum/state.enum';

// default value
const initialState: TodoListState = {
  data: [],
  state: StateEnum.LOADING,
};

// reducer function
export function todosReducer(
  state: TodoListState = initialState,
  action: fromAction.Actions
): TodoListState {

  switch (action.type) {

    // INIT
    case ActionTypes.LOAD_INIT_TODOS:
      return {
        ...state,
        state: StateEnum.LOADING,
      };

    case ActionTypes.SUCCESS_INIT_TODOS:
      return {
        ...state,
        data: [
          ...todosMock
        ],
        state: StateEnum.LOADED,
      };

    // GET
    case ActionTypes.LOAD_GET_TODOS:
      return {
        ...state,
        state: StateEnum.LOADING,
      };

    case ActionTypes.SUCCESS_GET_TODOS:
      return {
        ...state,
        state: StateEnum.LOADED,
      };

    // TOGGLE
    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        data: state.data.map(todo => {
          if (action.todo.id === todo.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
        state: StateEnum.LOADED,
      };

    default:
      return state;
  }
}
