import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
      <h1>Todos</h1>
      <TodoList />

      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="123"></Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {checked: false};
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>
          <input type="checkbox" checked={this.state.checked} onchange={this.handleChange} />
        </td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}} >{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.number.isRequired
};

