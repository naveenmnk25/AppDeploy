import { Outlet, useSearchParams } from "react-router-dom";

function UserPage() {
    const [searchParems, setSearchParems] = useSearchParams();
    const showActiveUsers = searchParems.get('filter') == 'active';
    return (<>
        {
            showActiveUsers ? <h1>Active Users</h1> : <h1>All Users</h1>
        }
        <Outlet />
        <div>
            <button type="button" className="btn btn-success" onClick={() => setSearchParems({ filter: 'active' })} >ApplyFilter</button>
            <button type="button" className="btn btn-danger" onClick={() => setSearchParems({})}>Reset</button>

        </div>
    </>);
}

export default UserPage;