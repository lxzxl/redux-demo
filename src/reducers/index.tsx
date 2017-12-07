import { combineReducers } from 'redux';
import { TodoSchema, StoreState, VisibilityFilter } from '../types';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITYFILTERS
} from '../constants';
import { SetVisibilityFilter, AddTodo, CompleteTodo } from '../actions';

const { SHOW_ALL } = VISIBILITYFILTERS;

function visibilityFilter<K extends VisibilityFilter>(
  state: VISIBILITYFILTERS[K] = SHOW_ALL,
  { type, filter }: SetVisibilityFilter
) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter;
    default:
      return state;
  }
}

function todos(
  state: TodoSchema[] = [],
  action: AddTodo | CompleteTodo
): TodoSchema[] {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          isCompleted: false
        }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          isCompleted: true
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers<StoreState>({
  visibilityFilter,
  todos
});

export default todoApp;
