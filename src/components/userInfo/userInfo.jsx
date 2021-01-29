import React from "react"

import "./userInfo.styles.css"

const UserInfo = (props) => {
    const { user } = props;
    if (!user || user.length === 0) return <p>Not an existing user, sorry</p>;
    return(
        <div>
            <span className='user-name'>{user.username} </span>
            <span className='user-bio'>{user.bio}</span>
            <span className='user-age'>{user.age}</span>
        </div> 
    )
}

export default UserInfo


