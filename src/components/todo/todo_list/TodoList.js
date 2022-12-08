import TodoItem from './TodoItem'
function TodoList ({data}) {    
   

    return (
        <div>
            {data.map((listItem) => (
                <TodoItem className="list_item" key={listItem.id} item={listItem} />            
            )
            )}
        </div>
    )
}
export default TodoList