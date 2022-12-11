import { useState } from "react";
import CreateTodo from "./creater_todo/CreateTodo";
import ManagmentButtons from "./managment-btn/ManagmentButtons";
import TodoList from "./todo_list/TodoList";

function Todo() {
  const [newTasks, setTaskTodo] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>
      <CreateTodo objectOfArray={newTasks} setChangeArray={setTaskTodo} />
      <ManagmentButtons tasksForDel={newTasks} setDelTasks={setTaskTodo} />
      <TodoList data={newTasks} setChangeItem={setTaskTodo} />
    </div>
  );
}
export default Todo;
