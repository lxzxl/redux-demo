import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { TodoSchema, StoreState, VisibilityFilter } from '../types';
import { addTodo, completeTodo, setVisibilityFilter } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { VISIBILITYFILTERS } from '../constants/index';

interface Props {
  visibleTodos: TodoSchema[];
  visibilityFilter: VisibilityFilter;
  dispatch: Dispatch<StoreState>;
}

interface MapStateProps {
  visibleTodos: TodoSchema[];
  visibilityFilter: VisibilityFilter;
}

class App extends React.Component<Props> {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(completeTodo(index))}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    );
  }
}

function selectTodos(
  todos: TodoSchema[],
  filter: VisibilityFilter
): TodoSchema[] {
  switch (filter) {
    case VISIBILITYFILTERS.SHOW_ALL:
      return todos;
    case VISIBILITYFILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    case VISIBILITYFILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
    default:
      return todos;
  }
}

function mapStateToProps(state: StoreState): MapStateProps {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect<MapStateProps>(mapStateToProps)(App);
