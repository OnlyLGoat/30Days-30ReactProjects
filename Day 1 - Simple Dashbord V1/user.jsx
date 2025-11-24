import { Link } from "react-router-dom";

export default function User(props){

    return(
        <div className="col-3 border mt-3 card mr-1 ml-1">
            <p className="card-header">User ID: {props.user.id}</p>
            <div className="card-body">
                <p>User Name: {props.user.name}</p>
                <p>User City: {props.user.address.city}</p>
                <p>User Age: {props.user.age}</p>
                <p>User Role: {props.user.role}</p>
            </div>
            <Link to={`/User/${props.user.id}`}><button className="card-footer btn btn-outline-dark btn-sm">View More Details</button></Link>
        </div>
    )
}