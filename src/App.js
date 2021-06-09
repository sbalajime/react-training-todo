import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput.js";


//Input handling
//Todo items display
// class Todo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//       todoList: [],
//     };
//   }

//   handleChange = (e) => {
//     //Store user typed data in state
//     console.log("typed value", e.target.value);
//     this.setState({ text: e.target.value });
//   };

//   handleSubmit = () => {
//     //Add user typed data in array and clear the input.
//     const { todoList, text } = this.state;
//     const newArray = [...todoList, text];
//     this.setState({
//       todoList: newArray,
//       text: "",
//     });
//   };

//   handleDeleteItem = (index) => {
//     const {todoList} = this.state;
//     const filteredTodo = todoList.filter((todo, i) => i !== index);
//     this.setState({todoList: filteredTodo})
//   }
//   render() {
//     const { text, todoList } = this.state;

//     return (
//       <div className="todo-container">
//         <TodoInput text={this.state.text} handleChange={this.handleChange} handleSubmit= {this.handleSubmit} />
//         <TodoList todoList={todoList} handleDeleteItem={this.handleDeleteItem}/>
//       </div>
//     );
//   }
// }

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    //Store user typed data in state
    console.log("typed value", e.target.value);
    setText(e.target.value)
  };

  const handleSubmit = () => {
    //Add user typed data in array and clear the input.
    const newArray = [...todoList, text];
    setText("");
    setTodoList(newArray)
  };

  const handleDeleteItem = (index) => {
    const filteredTodo = todoList.filter((todo, i) => i !== index);
    setTodoList(filteredTodo)
  }
  return (
    <div className="todo-container">
      <TodoInput text={text} handleChange={handleChange} handleSubmit= {handleSubmit} />
      <TodoList todoList={todoList} handleDeleteItem={handleDeleteItem}/>
    </div>
  );
}
export default Todo;
