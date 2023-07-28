import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";

function ProfilePage() {

    const auth = useAuth();
    const navigate = useNavigate();
    console.log(auth.User);

    const handleLogout = () => {
        auth.Logout();
        navigate('/')
    }
    return (<>
        <h1>Welcome {auth.User}</h1>
        <button className="ui icon button"><i aria-hidden="true" className="world icon" onClick={handleLogout}></i></button>
    </>);
}

export default ProfilePage;