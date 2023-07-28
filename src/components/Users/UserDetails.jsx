import { useParams } from "react-router-dom";

function UserDetails() {

    const parems = useParams();
    const UserId = parems.userId;
    return (<>
        <h1>UserDetails {UserId}</h1>
    </>);
}

export default UserDetails;