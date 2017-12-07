import * as React from 'react';
import { StoreState } from '../types';
import Todo from './Todo';

interface Props extends Pick<StoreState, 'todos'> {
  onTodoClick(index: number): void;
}

export default class TodoList extends React.Component<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        ))}
      </ul>
    );
  }
}
