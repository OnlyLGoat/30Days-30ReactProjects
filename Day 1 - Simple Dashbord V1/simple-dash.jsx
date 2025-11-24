import { useEffect, useState } from "react";
import User from "./user";
import UserDetails from "./user-details";
import { useParams } from "react-router-dom";

export default function SimpleDash(props){
    const { id_user } = useParams()
    
    let [data_users, setDataUsers] = useState([]);

    useEffect(() => {
        setDataUsers(props.data);
    }, [props.data]);

    function handeldelete(id){
        setDataUsers(prev => prev.filter(user => user.id !== id));
    }

    if (id_user){
        return(
            <UserDetails data={data_users} onDelete={handeldelete} />
        )
    }else{

        return(
            <>
                {/* Display All Users */}
                <div className="row justify-content-center">
                    {
                        data_users && data_users.length > 0 ?
                        data_users.map((element, idx) => (
                            <User key={idx} user={element}/>
                        ))
                        :
                        <h3 className="text-center mt-5">No Users Available</h3>
                    }
                </div>
            </>
        )
    }
}