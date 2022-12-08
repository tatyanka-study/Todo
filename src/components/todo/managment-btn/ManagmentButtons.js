import { Button } from 'semantic-ui-react'

function ManagmentButtons ({tasksForDel, setDelTasks}) {

   function  delAllTasks(){
     setDelTasks([])           
    }
    function  delDoneTasks() {
        tasksForDel.filter((item) => {
            return item.isActive === false
            
        });
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
        <Button.Group>
          <Button onClick={delAllTasks}>Reset All</Button>
          <Button.Or />
          <Button positive onClick={delDoneTasks}>Del Done</Button>
        </Button.Group>
        
        </div>
    )
}
export default ManagmentButtons