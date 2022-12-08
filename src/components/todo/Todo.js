import {useState} from 'react'
import CreateTodo from "./creater_todo/CreateTodo"
import TodoList from "./todo_list/TodoList"

function Todo () {
    const [newTasks, setTaskTodo] = useState([])      

    return (
        <div>
            <h1>Todo App</h1>
            <CreateTodo objectOfArray={newTasks} setChangeArray={setTaskTodo}
            />
            <TodoList data={newTasks}/>
        </div>
    )
}
export default Todo

