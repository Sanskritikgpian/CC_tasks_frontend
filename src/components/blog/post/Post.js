import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
// material-ui
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// components
import Comments from "../comments/Comments";
// endpoints
import { LIKE_POST_ENDPOINT } from "../../../constants/endpoints";

const Post = ({ post, setPostState, comments, setComments, likesCount, setLikesCount }) => {
    const [likeState, setLikeState] = useState(JSON.parse(localStorage.getItem("cc_task"))?.likedPosts.includes(post._id) || false);

    const handleScrollEvents = () => {
        const post = document.querySelector(".post__container");
        const scrollToTopBtn = document.querySelector(".post__scrollToTopBtn");
        scrollToTopBtn.style.transform = post.scrollTop > 10 ? "scale(1)" : "scale(0)";
    };

    useEffect(() => {
        const post = document.querySelector(".post__container");
        post.addEventListener("scroll", handleScrollEvents)
        return () => document.removeEventListener("scroll", handleScrollEvents)
    }, [handleScrollEvents])

    const likePost = () => {
        setLikeState(likeState => {
            const likedPosts = JSON.parse(localStorage.getItem("cc_task"))?.likedPosts || [];

            if (likeState) {
                try {
                    axios.patch(LIKE_POST_ENDPOINT + "/" + post._id + "&unliked")
                        .then(res => {
                            localStorage.setItem("cc_task", JSON.stringify({ likedPosts: likedPosts.filter(likedPost => likedPost !== post._id) }));
                        })
                        .catch(err => { })
                } catch (err) { }
            }
            else {
                try {
                    axios.patch(LIKE_POST_ENDPOINT + "/" + post._id + "&liked")
                        .then(res => {
                            localStorage.setItem("cc_task", JSON.stringify({ likedPosts: [...likedPosts, post._id] }));
                        })
                        .catch(err => { })
                } catch (err) { }
            }

            setLikesCount(likesCount => likeState ? likesCount - 1 : likesCount + 1);
            return !likeState;
        })
    };

    const goToDiscussion = e => {
        const post = document.querySelector(".post__container");
        const comments = document.querySelector(".comments");
        post.scrollTo(0, comments.getBoundingClientRect().top + post.scrollTop);
    };

    const scrollToTop = () => {
        const post = document.querySelector(".post__container");
        post.scrollTo(0, 0);
    };

    return (
        <div className="post">
            <IconButton onClick={() => likePost()} style={{ position: "fixed", bottom: "10px", left: "10px", color: "white", backgroundColor: "lightcoral", border: "2px solid white" }}>{likeState ? <FavoriteRoundedIcon style={{ fontSize: "30px" }} /> : <FavoriteBorderRoundedIcon style={{ fontSize: "30px" }} />}</IconButton>
            <IconButton onClick={() => scrollToTop()} className="post__scrollToTopBtn" style={{ position: "fixed", bottom: "10px", right: "10px", color: "white", backgroundColor: "green", border: "2px solid white" }}><ArrowUpwardRoundedIcon style={{ fontSize: "30px" }} /></IconButton>
            <IconButton onClick={e => goToDiscussion(e)} style={{ position: "fixed", bottom: "10px", left: "70px", color: "white", backgroundColor: "teal", border: "2px solid white" }}><QuestionAnswerRoundedIcon style={{ fontSize: "30px" }} /></IconButton>
            <IconButton onClick={() => setPostState(false)} style={{ position: "fixed", top: "10px", left: "10px", color: "red", backgroundColor: "white" }}><CloseRoundedIcon style={{ fontSize: "30px" }} /></IconButton>
            <img src={post.photoURL} alt="" className="post__photo" />
            <div className="post__container">
                <div className="post__main">
                    <p className="post__title">{post.title}</p>
                    <p className="post__date">{post.date}</p>
                    <p className="post__content">{post.content}</p>
                </div>
                <Comments postId={post._id} likesCount={likesCount} comments={comments} setComments={setComments} />
            </div>
        </div>
    );
};

export default Post;
