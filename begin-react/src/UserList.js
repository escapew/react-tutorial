import React, { useContext } from 'react';
import { UserDispatch } from './App';

function User({ user }){
    const{username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <div>
                <b style={{
                    color: active ? 'green':'black',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch(
                    {type:'TOGGLE_USER',id}
                )}
                >
                {username}</b> <span>({email})</span>
                <button onClick={()=> dispatch(
                    {type:'REMOVE_USER',id}
                )}>삭제</button>
            </div>
        </div>
    );
}

function UserList({ users }){
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;