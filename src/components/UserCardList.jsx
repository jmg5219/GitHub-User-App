import React from 'react';
import UserCard from './UserCard';
import "./UserCardList.css"

const UserCardList = (props) => {
    const { users } = props;
    //console.log(users)
    return (
        <>


            <ul className="entry">
                {users.map((user, index) => {
                    return (
                    <li key={user.id}><UserCard userLogin={user.login} userName={user.name} userUrl={user.url} userAvatar={user.avatar_url}/><br/>
                    </li>
                    );
                }
                )}
            </ul>
        </>



    );
}

export default UserCardList;
