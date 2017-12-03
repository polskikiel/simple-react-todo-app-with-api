import React, { Component } from 'react'
import http from 'axios'
import _ from 'lodash'
import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      text: ''
    }
    this.apiUrl = '//5a23ef1b3a6dd70012db4ed8.mockapi.io/todo/'
    this.changeInput = this.changeInput.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.completedTodo = this.completedTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  componentDidMount () {
    http.get(this.apiUrl).then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  changeInput (val) {
    this.setState({
      text: val
    })
  }

  addTodo (input) {
    const newTodo = {
      text: input.value
    }
    input.setAttribute('disabled', '')
    http.post(this.apiUrl, newTodo).then(res => {
      if (res.status === 201) {
        this.setState(prevState => ({
          data: prevState.data.concat(res.data),
          text: ''
        }))
      }
      input.removeAttribute('disabled')
    })
  }

  completedTodo (todo) {
    const el = document.querySelector(`[data-id="${todo.id}"`)
    el.classList.add('isDisable')

    const status = {
      status: !todo.status
    }
    const newArray = _.cloneDeep(this.state.data)
    const todoIndex = _.findIndex(newArray, ['id', todo.id])

    http.put(this.apiUrl + todo.id, status).then(res => {
      if (res.data.status)
        newArray[todoIndex].status = true
      else newArray[todoIndex].status = false
      this.setState({
        data: newArray
      })
      el.classList.remove('isDisable')
    })
  }

  removeTodo (todo) {
    const el = document.querySelector(`[data-id="${todo.id}"`)
    el.classList.add('isDisable')
    http.delete(this.apiUrl + todo.id).then(res => {
      if (res.status === 200) {
        const newArray = _.cloneDeep(this.state.data)
        _.remove(newArray, ['id', todo.id])
        this.setState({
          data: newArray
        })
      }
    })
  }

  render () {
    return (
      <div>
        <TodoHeader
          dataCount={this.state.data.length}/>
        <TodoForm
          text={this.state.text}
          changeInput={this.changeInput}
          addTodo={this.addTodo}/>
        <TodoList
          removeTodo={this.removeTodo}
          completedTodo={this.completedTodo}
          list={this.state.data}/>
      </div>
    )
  }
}

export default App
