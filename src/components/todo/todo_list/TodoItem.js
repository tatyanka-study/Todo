import { Icon } from "semantic-ui-react";

function TodoItem({ item, callGetIdForDel }) {
  const toggleClass = (event) => {
    event.currentTarget.classList.toggle("active");
    item.isActive = !item.isActive;
  };

  const delThisItem = () => {
    let idForDelItem = item.id;
    console.log(idForDelItem);
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
