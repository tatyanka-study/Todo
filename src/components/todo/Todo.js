import {useState} from 'react'
import CreateTodo from "./creater_todo/CreateTodo"
import TodoList from "./todo_list/TodoList"

function Todo () {
    const [newTasks, setTask] = useState([])      

    return (
        <div>
            <h1>Todo App</h1>
            <CreateTodo elementOfArray={newTasks} setChangeArray={setTask}
            />
            <TodoList data={newTasks}/>
        </div>
    )
}
export default Todo

