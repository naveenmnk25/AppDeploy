import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>home page </h1>
            <button type="button" className="btn btn-outline-dark" onClick={() => navigate('order')}>Order Page</button>
        </>
    )


}


export default Homepage;
