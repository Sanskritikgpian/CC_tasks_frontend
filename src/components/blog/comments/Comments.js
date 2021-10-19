import React from "react";
import "./Comments.css";
// components
import Comment from "../comment/Comment";
import CommentInput from "../commentInput/CommentInput";
// material-ui
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Comments = ({ postId, likesCount, comments, setComments }) => {
    return (
        <div className="comments">
            <CommentInput postId={postId} setComments={setComments} />
            <p className="comments__likesCount"><FavoriteRoundedIcon />{likesCount + " " + (likesCount === 1 ? "like" : "likes")}</p>
            <p className="comments__discussion">What people think...</p>
            {comments?.map((comment, index) => <Comment key={index} comment={comment} delay={index < 3 ? 0.2 * index : 0.6} />)}
        </div>
    );
};

export default Comments;
