import Item from "../Item/Item"

const ItemList = ({ data }) => {
    //console.log(data);
    return (
        <div className="row">
            {
                Array.isArray(data) ? (
                    data.map(e =>
                        <Item key={e.id} elements={e}/>
                    )
                ) : (
                    <div className="col-lg-4" key={1}>
                        <div className="card">
                            <div className="card-body">
                                <center>
                                    <strong>No se encontraron Productos</strong>
                                </center>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default ItemList