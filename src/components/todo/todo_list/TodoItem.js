import { Icon } from 'semantic-ui-react'

function TodoItem ({item}) {
    return (
        <div className="list_item">
             <Icon disabled name='clipboard list' /> {item.textFromInput}   
             <button><Icon disabled name='shopping basket' />Del</button>
                             
            </div>
    )
}
export default TodoItem