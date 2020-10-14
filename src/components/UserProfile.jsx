import React, { Component, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';



const UserProfile = (props) => {
    const { users } = props;
    const { userName } = useParams();
    const user = users.find((user) => {
        return user.login === userName ? user : null;
    });
    const [repoList, setRepos] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch(
                `https://api.github.com/users/${userName}/repos`
            );
            const repoList = await response.json();
            setRepos(repoList);
        })();
    }, [setRepos, userName]);
    return (
        <ul className="entry">
        {repoList.map(repo => (
            <li key={repo.id}>{repo.name}</li>
        ))}
         </ul>

    );
}

export default UserProfile;