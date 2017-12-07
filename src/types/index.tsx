import { VISIBILITYFILTERS } from '../constants';

export interface TodoSchema {
  text: string;
  isCompleted?: boolean;
}

export type VisibilityFilter = keyof VISIBILITYFILTERS;

export interface StoreState {
  visibilityFilter: VisibilityFilter;
  todos: TodoSchema[];
}
