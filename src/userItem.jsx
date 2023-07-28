export function UserItems({ toggleTodo, handleDelete, userList }) {
    return (
        <div className="row p-3">
            <h3>User List</h3>
            {userList.length === 0 && "No Users Added"}
            {userList.map(list => {
                return (
                    <div className="col-12 mb-2" key={list.id}>
                        <label className='p-2'>
                            <input type="checkbox" className="btn-check" checked={list.completed}
                                onChange={e => toggleTodo(list.id, e.target.checked)} id={list.id} />
                            <label className="btn btn-outline-secondary" htmlFor={list.id}>{list.userName}</label>
                        </label>
                        <button className='btn btn-danger' onClick={() => handleDelete(list.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}