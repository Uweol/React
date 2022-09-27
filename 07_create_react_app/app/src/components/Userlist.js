import React from 'react';
import {Link} from 'react-router-dom';

const UserList = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return(
                    <div className="card mb-4 rounded-3 shadow-sm" key={user.id}>
                        <div className="card-body py-3">
                            <Link to={`/users/${user.id}`}>
                                <h5 style={{color: 'skyblue'}}> Name : <br />{user.name}</h5>
                                <p>website : {user.website}</p>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default UserList;