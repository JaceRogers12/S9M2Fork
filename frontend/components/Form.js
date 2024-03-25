import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }
  updateInput = (event) => {
    this.setState({...this.state, input: event.target.value})
  }
  addHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({...this.state, input: ""})
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.addHandler(event)} >
          <input type="text" onChange={event => this.updateInput(event)} value={this.state.input} />
          <input type="submit" value="add" />
        </form>
        <button onClick={() => this.props.clearCompleted()}>Clear Completed</button>
      </>
    )
  }
}
