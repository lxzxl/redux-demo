import * as React from 'react';
import { TodoSchema } from '../types';

interface Props extends TodoSchema {
  onClick(): void;
}

export default class Todo extends React.Component<Props, {}> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.isCompleted ? 'line-through' : 'none',
          cursor: this.props.isCompleted ? 'default' : 'pointer'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
