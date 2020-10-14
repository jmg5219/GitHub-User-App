import React from 'react';

//toallow the use of useParams()
import {
    useParams
} from 'react-router-dom';

//This is a functional component
// Arrow function with the parentheses means implicit return is expected

const Post = props =>{
    const {id} = useParams();
    const post = props.posts[id];
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    );
}

//We must always export out of the component!
export default Post;