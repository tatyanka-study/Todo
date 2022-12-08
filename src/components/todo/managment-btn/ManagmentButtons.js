import { Button } from 'semantic-ui-react'

function ManagmentButtons ({tasksForDel, setDelTasks}) {
    
   function  delAllTasks(){
   tasksForDel.length = 0
   let resetArray = [...tasksForDel]
   setDelTasks(resetArray)           
    }
    return (
        <div>        
        <Button.Group>
          <Button onClick={delAllTasks}>Reset All</Button>
          <Button.Or />
          <Button positive>Del Done</Button>
        </Button.Group>
        
        </div>
    )
}
export default ManagmentButtons