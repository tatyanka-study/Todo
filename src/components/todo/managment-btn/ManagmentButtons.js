import { Button } from "semantic-ui-react";

function ManagmentButtons({ tasksForDel, setDelTasks }) {
  function delAllTasks() {
    setDelTasks([]);
  }

  let arrayAfterDelDone = [];
  function delDoneTasks() {
    arrayAfterDelDone = tasksForDel.filter((item) => item.isActive === false);
    setDelTasks(arrayAfterDelDone);
  }

  // function  delDoneTasks(){
  //     let btnWithClass = document.querySelectorAll('.active');
  //     btnWithClass.forEach(element => {
  //         element.parentElement.remove()
  //         let delItems = [...tasksForDel]
  //         setDelTasks(delItems)
  //     });
  // }

  return (
    <div>
      {tasksForDel.length === 0 ? (<h2>To Do list is empty</h2>) : (<Button.Group>
        <Button onClick={delAllTasks}>Reset All</Button>
        <Button.Or />
        <Button positive onClick={delDoneTasks}>
          Del Done
        </Button>
      </Button.Group>)}
      
    </div>
  );
}
export default ManagmentButtons;
