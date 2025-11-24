import { useParams, Link } from "react-router-dom"

export default function UserDetails({ data, onDelete }){
    const { id_user } = useParams()
    console.log(data);
    const user_data = data.filter(
        element => element.id === parseFloat(id_user)
    );

    // Some Tests
    // console.log(id_user);
    // console.log(user_data);

    return(
        <div className="card col-12 col-md-8 mx-auto bg-dark border-danger">
            {
                user_data.map(element => (
                    <>
                        <h3 className="card-header text-light">User ID: {element.id}</h3>
                        <div className="card-body">
                            <p className="text-light">Name: {element.name}</p>
                            <p className="text-light">Email: {element.email}</p>
                            <p className="text-light">Age: {element.age}</p>
                            <p className="text-light">Role: {element.role}</p>
                            <input type="text" disabled value={element.createdAt} className="text-center"/>
                            <h4 className="mt-2 mb-2 text-light">Address</h4>
                            <p className="text-light">Street: {element.address.street}</p>
                            <p className="text-light">City: {element.address.city}</p>
                            <p className="text-light">State: {element.address.state}</p>
                            <p className="text-light">Country: {element.address.country}</p>
                            <p className="text-light">ZIP: {element.address.zip}</p>
                            <Link to='/'><button className="card-footer btn btn-outline-primary bg-primary text-light mb-3">Return To The Main Page</button></Link><br />
                            <Link to='/'><button className="btn btn-outline-danger bg-danger text-light" onClick={() => onDelete(element.id)}>Delete</button></Link>
                        </div>
                    </>
                ))
            }
        </div>
    )
}