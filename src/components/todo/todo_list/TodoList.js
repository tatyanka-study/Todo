import { Icon } from 'semantic-ui-react'
function TodoList ({data}) {    
   

    return (
        <div>
            {data.map((listItem, index) => (
                <div className="list_item" key={index}>
                    <Icon disabled name='clipboard list' />
                    {listItem}
                    </div>
            )

            )}
        </div>
    )
}
export default TodoList