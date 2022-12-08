import { Icon } from 'semantic-ui-react'

function TodoItem ({item}) {
    return (
        <div className="list_item">
             <Icon disabled name='clipboard list' /> {item.textFromInput}   
             <button><Icon disabled name='shopping basket' />Del</button>
             <button><Icon disabled name='checkmark' />Done</button>
                             
            </div>
    )
}
export default TodoItem