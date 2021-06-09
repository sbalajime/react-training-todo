import React, { Component } from "react";

// class TodoInput extends Component {
//   render() {
//     const { text, handleChange,  handleSubmit} = this.props;
//     return (
//       <div className="todo-input-container">
//         <input
//           className="todo-input"
//           type="text"
//           value={text}
//           onChange={handleChange}
//         />
//         <button className="todo-submit" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     );
//   }
// }

const TodoInput = (props) => {
  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        type="text"
        value={props.text}
        onChange={props.handleChange}
      />
      <button className="todo-submit" onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default TodoInput;
