import React from 'react'
import Todo from "./Todo.js"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <h2>Todo List</h2>
        {this.props.list.map(item => {
        return (<Todo
          key={item.id}
          todo={item.name}
          completed={item.completed}
          id={item.id}
          changeCompleted={this.props.changeCompleted}
        />)
        })}
      </>
    )
  }
}
