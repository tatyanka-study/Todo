import TodoItem from "./TodoItem";

function TodoList({ data, setChangeItem }) {
  let arrayAfterDelItem = [];

  function getIdForDel(x) {
    arrayAfterDelItem = data.filter((item) => item.id !== x);
    setChangeItem(arrayAfterDelItem);
  }
  return (
    <div>
      {data.map((listItem) => (
        <TodoItem
          key={listItem.id}
          item={listItem}
          callGetIdForDel={getIdForDel}
        />
      ))}
    </div>
  );
}
export default TodoList;
