import React from 'react'
import axios from "axios";
import Form from "./form.js";
import TodoList from "./TodoList.js";

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  changeCompleted = (id) => {
    this.setState({...this.state, list: this.state.list.map(item => {
      if (item.id == id) item.completed = !item.completed;
      return item
    })})
  }
  addTodo = (input) => {
    const newTodo = {name: input, id: Date.now(), completed: false}
    axios.post(URL, newTodo)
      .then(res => this.setState({...this.state, list: this.state.list.concat(res.data.data)}))
      .catch(res => console.log(res))
  }
  clearCompleted = () => {
    this.setState({...this.state, list: this.state.list.filter(item => {
      return !item.completed
    })})
  }
  componentDidMount(){
    axios.get("http://localhost:9000/api/todos")
      .then(res => this.setState({... this.state, list: res.data.data}))
      .catch(res => console.log("Bad:", res))
  }

  render() {
    return (
      <>
        <h1>App</h1>
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList list={this.state.list} changeCompleted={this.changeCompleted} />
      </>
    )
  }
}
