import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../constants';
import { VisibilityFilter } from '../types';

/*
 * action 创建函数
 */
export interface AddTodo {
  type: ADD_TODO;
  text: string;
}
export function addTodo(text: string): AddTodo {
  return { type: ADD_TODO, text };
}

export interface CompleteTodo {
  type: COMPLETE_TODO;
  index: number;
}
export function completeTodo(index: number): CompleteTodo {
  return { type: COMPLETE_TODO, index };
}

export interface SetVisibilityFilter {
  type: SET_VISIBILITY_FILTER;
  filter: VisibilityFilter;
}
export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
