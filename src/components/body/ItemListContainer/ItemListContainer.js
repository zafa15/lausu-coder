import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    /*
    return (
        <div className="item--list">
            <ul>
                {
                    Array.isArray(greeting) ? (
                        greeting.map(e =>
                            <li key={e.id}>{e.text}</li>
                        )
                    ):(
                        <li key={greeting.id}>{greeting.text}</li>
                    )
                }
            </ul>
        </div>
    )
    */
   return (
       <div className="item--list">
           <ItemList />
       </div>
   )

}

export default ItemListContainer