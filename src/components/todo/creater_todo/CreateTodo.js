function CreateTodo ({objectOfArray, setChangeArray}) {    
    
       const createNewTask = (event) => {
        event.preventDefault()
        let newCreateObject = {}
        
        newCreateObject.textFromInput = document.querySelector(".taskName").value  
        function getRandomId () {
            newCreateObject.id = Math.floor(Math.random() * 10000)
        }
        getRandomId ()
        // newCreateObject.id = () => Math.floor(Math.random() * 10000)
        let newInputArray = [...objectOfArray, newCreateObject]
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