function CreateTodo ({objectOfArray, setChangeArray}) {    
    
       const createNewTask = (event) => {
        event.preventDefault()
        let newCreateObject = {}
        
        newCreateObject.textFromInput = document.querySelector(".taskName").value  
        if (!newCreateObject.textFromInput) {
           return alert("Please, enter new task")
            
        }
       
            newCreateObject.id = Math.floor(Math.random() * 10000)
            newCreateObject.isActive = false
             
        let newInputArray = [...objectOfArray, newCreateObject]

        setChangeArray(newInputArray)
        console.log(newInputArray)
        document.querySelector(".taskName").value = ''                
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter new todo" className="taskName" />
                <button className="btn_submit" onClick={createNewTask} onKeyDown={createNewTask} >Submit</button>
            </form>
        </div>
    )
}
export default CreateTodo