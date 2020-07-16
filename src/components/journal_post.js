import React from "react";
// import { Link } from 'react-router-dom' 

export default function (props) {

    const { id, title, url_for_post } = props.post;
    return (
        <div className="post">
            <div className="post-id">{id}</div>
            <div className="post-props">{title}</div>
            <div className="post-props">{url_for_post}</div>
        </div>
    )
}