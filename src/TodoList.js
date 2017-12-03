import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render () {
    const todos = this.props.list.map(todo => {
      return <TodoItem
        key={todo.id}
        todo={todo}
        completedTodo={this.props.completedTodo}
        removeTodo={this.props.removeTodo}/>
    })
    return <ul className="ItemList">{todos}</ul>
  }
}

export default TodoList
