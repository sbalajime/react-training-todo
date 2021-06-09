import React, {Component} from "react";

// class TodoList extends Component {
//     render(){
//         const {todoList, handleDeleteItem} = this.props;
//         return(todoList.map((todo, i) => {
//             return (
//               <div key={i} className="todo-card">
//                 <div>{todo}</div>
//                 <div onClick={() => handleDeleteItem(i)}>x</div>
//               </div>
//             );
//           }))
//     }
// }

const TodoList = (props) => {
  return(props.todoList.map((todo, i) => {
    return (
      <div key={i} className="todo-card">
        <div>{todo}</div>
        <div onClick={() => props.handleDeleteItem(i)}>x</div>
      </div>
    );
  }))
}
export default TodoList;