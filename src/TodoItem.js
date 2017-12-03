import React, { Component } from 'react'

class TodoItem extends Component {
  constructor () {
    super()
    this.remove = this.remove.bind(this)
    this.completed = this.completed.bind(this)
  }

  remove () {
    this.props.removeTodo(this.props.todo)
  }

  completed () {
    this.props.completedTodo(this.props.todo)
  }

  render () {
    const { id, status, text } = this.props.todo
    return (
      <li className="Item" data-id={id}>
        <label>
          <input checked={status}
                 type="checkbox"
                 onChange={this.completed}/>
          <span>{text}</span>
          <button type="button"
                  onClick={this.remove}>X
          </button>
        </label>
      </li>
    )
  }
}

export default TodoItem
