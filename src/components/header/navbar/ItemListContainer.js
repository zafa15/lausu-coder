const ItemListContainer = ({greeting}) =>{
    console.log(greeting)
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
}

export default ItemListContainer