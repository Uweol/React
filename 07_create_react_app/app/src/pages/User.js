import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Spinner from '../components/Spinner';
import {useParams} from 'react-router-dom';


const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) =>{ 
            setUser(response.data);
            setLoding(false);
        });

    }, []);
    const userDetail = loading ?<Spinner /> : (
        <div  className="card mb-4 rounded-3 shadow-sm">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
    return (
        <div>
            <h3>User 정보</h3>
            {userDetail}
            
        </div>
    );
};

export default User;