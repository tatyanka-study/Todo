import { Icon } from 'semantic-ui-react'

function TodoItem ({item}) {
   

    const toggleClass = (event) => {
        event.currentTarget.classList.toggle('active');
        item.isActive = !item.isActive
      };
    

    return (
        <div className="list_item">
             <Icon disabled name='clipboard list' /> {item.textFromInput}   
             <button><Icon disabled name='shopping basket' />Del</button>
             <button className={item.isActive ? 'active' : ''} onClick={toggleClass}><Icon disabled name='checkmark' />Done</button>                             
        </div>
    )
    
}
export default TodoItem