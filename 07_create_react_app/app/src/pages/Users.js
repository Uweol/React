import React, {useEffect, useState} from 'react';
import axios from 'axios'
import UserList from '../components/Userlist'
import Spinner from '../components/Spinner'
import {useParams} from 'react-router-dom'
//라이브러리 위주로 구성을 하는 것


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); //보이게 하자!
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => {
            console.log(response)
            setUsers(response.data);
            setLoading(false);
        })
    },[]);
    const userDetail = loading ?<Spinner /> :(
        <div>
            <div>{users.name}</div>
            <div>{users.email}</div>
            <div>{users.phone}</div>
        </div>
    )
    return (
        <div>
           <h3>User 정보</h3>
            {userDetail}
        </div>
    );
};

export default Users;