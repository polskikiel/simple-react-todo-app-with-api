import React, { Component } from 'react'

class TodoFrom extends Component {
  constructor () {
    super()
    this.changeInput = this.changeInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  changeInput (e) {
    this.props.changeInput(e.target.value)
  }

  submit (e) {
    e.preventDefault()
    this.props.addTodo(this.inputText)
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <input type="text"
               value={this.props.text}
               ref={(input) => {
                 this.inputText = input
               }}
               onChange={this.changeInput}/>
      </form>
    )
  }
}

export default TodoFrom
