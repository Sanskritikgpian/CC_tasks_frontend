import React from "react";
import "./PostCard.css";
// components
import ShapeDivider from "../shapeDivider/ShapeDivider";
// material-ui
import { Button } from "@mui/material";
// funcs
const truncate = (str, len, suffix) => str.substring(0, len) + suffix;

const PostCard = ({ post, setPost, setPostState, setComments, setLikesCount }) => {

    const handlePostClick = () => {
        setPost(post);
        setComments(post.comments);
        setLikesCount(post.likesCount);
        setPostState(true);
    };

    return (
        <div className="postCard">
            <p className="postCard__date">{post.date}</p>
            <img src={post.photoURL} alt="" className="postCard__photo" />
            <ShapeDivider />
            <p className="postCard__title">{post.title}</p>
            <p className="postCard__content">{truncate(post.content, 150, "...")}</p>
            <Button onClick={() => handlePostClick()}>Read more</Button>
        </div>
    );
};

export default PostCard;
