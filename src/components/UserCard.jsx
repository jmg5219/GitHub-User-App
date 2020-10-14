import React from 'react';
import "./userCard.css"

const UserCard= (props) => {
    const { userLogin } = props;
    const { userName } = props;
    const { userUrl } = props;
    const { userAvatar } = props;
    console.log(userLogin)
    return (
        <div className="card">
            


            <img src={userAvatar} alt={userName}  />
            <p><strong>Name:</strong> { userName }</p>
            <p><strong>id:</strong> { userLogin }</p>
            <span><strong>url:</strong> </span><a href={ userUrl }>{ userUrl }</a>
            
        </div>
    );
}

export default UserCard;
