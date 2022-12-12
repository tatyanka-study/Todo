import { useEffect, useState } from "react"
function Count ({forCount}) {
    const [activeDoneItemsLength, setCountNumber] = useState([])
    
    useEffect(() => {
       let activeDoneItems = forCount.filter((item) => item.isActive)         
        setCountNumber(activeDoneItems.length)
    }, [forCount])             
   
    return ( <div>
        {activeDoneItemsLength > 0 && (<h2>You have completed {activeDoneItemsLength} todo!</h2>)}

    </div>)
}
export default Count

