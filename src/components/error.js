import { useRouteError } from "react-router-dom";

const Error = ()=> {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
             <div> Opps Something Went Wrong</div>
             <div> {err.status}</div>
        </div>
    )
}

export default Error;