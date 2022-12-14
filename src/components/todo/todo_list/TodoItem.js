import { Icon } from "semantic-ui-react";
import listStyles from './list.module.css'

function TodoItem({ item, callGetIdForDel, resetData}) {
  console.log(listStyles)
  const toggleClass = (event) => {
    event.currentTarget.parentElement.classList.toggle('active');
    let idForActiveItem = item.id;    
       resetData(idForActiveItem)
    
  };

  const delThisItem = () => {
    let idForDelItem = item.id;
        callGetIdForDel(idForDelItem);
  };

  return (
    <div className={listStyles.list_item}>
      <Icon inverted color={!item.isActive ? 'green' : 'grey'} disabled name="clipboard list" /> {item.textFromInput}
      
      <button title="The task is Done" className={listStyles.btn_done} onClick={toggleClass}>
        <Icon disabled name="checkmark" />        
      </button>

      <button title="Delete this task" className={listStyles.btn_del} onClick={delThisItem}>
        <Icon disabled name="shopping basket" />        
      </button>
    </div>
  );
}
export default TodoItem;
