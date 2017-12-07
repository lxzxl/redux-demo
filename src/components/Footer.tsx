import * as React from 'react';
import { VisibilityFilter } from '../types';

interface Props {
  filter: VisibilityFilter;
  onFilterChange(filter: VisibilityFilter): void;
}

export default class Footer extends React.Component<Props, {}> {
  renderFilter(filter: VisibilityFilter, name: string) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show: {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    );
  }
}
