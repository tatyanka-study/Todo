import Count from "./Count";
import TodoItem from "./TodoItem";

function TodoList({ data, setChangeItem }) {
  let arrayAfterDelItem = [];
  let arrayForChangeItemsStatus = [];

  function resetDataItems (y) {
    arrayForChangeItemsStatus = data.map(item => {
      if (item.id === y) {
        item.isActive = !item.isActive
      }
      return item
    })

    setChangeItem(arrayForChangeItemsStatus)
    console.log(arrayForChangeItemsStatus)
  }

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
          resetData={resetDataItems}
        />
      ))}
      <Count forCount={data}/>
    </div>
  );
}
export default TodoList;



// const testArray = [1,2,3]
// testArray.map(item => item+10)