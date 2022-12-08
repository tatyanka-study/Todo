import TodoItem from './TodoItem'

function TodoList ({data}) {   
   

    return (
        <div>
            {data.map((listItem) => (
                <TodoItem key={listItem.id} item={listItem} />            
            )
            )}
        </div>
    )
}
export default TodoList