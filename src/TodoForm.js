import React, { Component } from 'react'

class TodoFrom extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.todoText = this.todoText.bind(this)
    this.submit = this.submit.bind(this)
  }

  todoText (e) {
    this.setState({
      text: e.target.value
    })
  }

  submit (e) {
    e.preventDefault()
    this.props.addTodo(this.inputText)
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <input type="text"
               value={this.state.text}
               ref={(input) => {
                 this.inputText = input
               }}
               onChange={this.todoText}/>
      </form>
    )
  }
}

export default TodoFrom
