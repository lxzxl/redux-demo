import * as React from 'react';

interface Props {
  onAddClick(text: string): void;
}

export default class AddTodo extends React.Component<Props, {}> {
  private input: HTMLInputElement;
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input: HTMLInputElement) => (this.input = input)}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const text = this.input.value.trim();
    this.props.onAddClick(text);
    this.input.value = '';
  };
}
