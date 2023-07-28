import { useNavigate } from "react-router-dom";

function Ordernavicate() {
    const navigate = useNavigate();
    return (<>
        <h1>Ordernavicate</h1>
        <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Go Back</button>
    </>);
}

export default Ordernavicate;