import { Icon } from "semantic-ui-react";

function TodoItem({ item, callGetIdForDel, resetData}) {

  const toggleClass = (event) => {
    event.currentTarget.classList.toggle("active");
    let idForActiveItem = item.id;    
       resetData(idForActiveItem)
    
  };

  const delThisItem = () => {
    let idForDelItem = item.id;
        callGetIdForDel(idForDelItem);
  };

  return (
    <div className="list_item">
      <Icon inverted color='green' disabled name="clipboard list" /> {item.textFromInput}
      
      <button title="The task is Done" onClick={toggleClass}>
        <Icon disabled name="checkmark" />        
      </button>

      <button title="Delete this task" className="btn_del" onClick={delThisItem}>
        <Icon disabled name="shopping basket" />        
      </button>
    </div>
  );
}
export default TodoItem;
// className={item.isActive ? "active" : ""}