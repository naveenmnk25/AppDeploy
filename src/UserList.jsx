import { useState } from "react";

export function NewUserList(props) {

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (userName === "" || password === "") return
        props.Addlist(userName, password)
        setuserName("");
        setpassword("");
    }

    return (
        <div className="row mb-2">
            <div className="col-12">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" value={userName}
                            id="exampleInputEmail1" onChange={e => setuserName(e.target.value)} aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={password}
                            onChange={e => setpassword(e.target.value)} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}