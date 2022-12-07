function CreateTodo ({elementOfArray, setChangeArray}) {    
    
       const createNewTask = (event) => {
        event.preventDefault()

        let inputValue = document.querySelector(".taskName").value       
        let newInputArray = [...elementOfArray, inputValue]
        setChangeArray(newInputArray)
        console.log(newInputArray)
        document.querySelector(".taskName").value = ''                
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter your task todo" className="taskName" />
                <button onClick={createNewTask}>Submit</button>
            </form>
        </div>
    )
}
export default CreateTodo