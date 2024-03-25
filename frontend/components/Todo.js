import React from 'react'

  const doneColor = {
    color: "green"
  }
  const notDoneColor = {
    color: "red"
  }

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={() => this.props.changeCompleted(this.props.id)}>
        <span style={this.props.completed? doneColor:notDoneColor} >{this.props.todo}</span>
      </div>
    )
  }
}
