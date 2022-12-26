import Count from "./Count";
import TodoItem, { test } from "./TodoItem";

function TodoList({ data, setChangeItem }) {
  function resetDataItems(y) {
    const arrayForChangeItemsStatus = data.map((item) => {
      if (item.id === y) {
        item.isActive = !item.isActive;
      }
      return item;
    });

    setChangeItem(arrayForChangeItemsStatus);
    console.log(arrayForChangeItemsStatus);
  }

  function getIdForDel(x) {
    const arrayAfterDelItem = data.filter((item) => item.id !== x);
    setChangeItem(arrayAfterDelItem);
  }

  return (
    <div>
      {data.map((listItem) => (
        <TodoItem
          key={listItem.id}
          item={listItem}
          callGetIdForDel={getIdForDel}
          resetData={resetDataItems}
        />
      ))}
      <Count forCount={data} />
    </div>
  );
}
export default TodoList;
