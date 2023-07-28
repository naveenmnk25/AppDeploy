import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/auth";

function HeaderPage() {

    const auth = useAuth();
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/product' className="nav-link">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/user' className="nav-link">User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' className="nav-link">Profile</NavLink>
                        </li>
                        {
                            (!auth.User) && (
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link">Login</NavLink>
                                </li>
                            )
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>);
}

export default HeaderPage;