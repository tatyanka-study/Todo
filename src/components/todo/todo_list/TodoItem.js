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
      <Icon disabled name="clipboard list" /> {item.textFromInput}
      <button onClick={delThisItem}>
        <Icon disabled name="shopping basket" />
        Del
      </button>
      <button className={item.isActive ? "active" : ""} onClick={toggleClass}>
        <Icon disabled name="checkmark" />
        Done
      </button>
    </div>
  );
}
export default TodoItem;
