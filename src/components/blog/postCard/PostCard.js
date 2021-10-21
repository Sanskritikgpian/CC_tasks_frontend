import React, { useContext } from "react";
import axios from "axios";
import "./PostCard.css";
// contexts
import UserContext from "../../../contexts/User";
// constants
import { DELETE_POST_ENDPOINT } from "../../../constants/endpoints";
// material-ui
import { Button, IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// funcs
const truncate = (str, len, suffix) => str.substring(0, len) + suffix;

const PostCard = ({ post, setPost, setPosts, setPostState, setComments }) => {
    const { user } = useContext(UserContext);
    const handlePostClick = () => {
        setPost(post);
        setComments(post.comments);
        setPostState(true);
    };

    const deletePost = () => {
        const areYouSure = window.confirm("Are you sure you wish to permanently delete the post?");
        if (areYouSure) {
            try {
                axios.patch(DELETE_POST_ENDPOINT + "/" + post._id, {})
                    .then(res => {
                        setPosts(posts => posts.filter(p => p._id !== post._id));
                    })
                    .catch(err => { })
            } catch (err) { }
        }
    };

    return (
        <div className="postCard">
            {user ? <IconButton onClick={() => deletePost()}><DeleteRoundedIcon /></IconButton> : null}
            <p className="postCard__date">{post.date}</p>
            <p className="postCard__title">{post.title}</p>
            <p className="postCard__name">{post.name ? post.name : "from Anonymous"}</p>
            <p className="postCard__content">{truncate(post.content, 150, "...")}</p>
            <Button onClick={() => handlePostClick()}>View</Button>
        </div>
    );
};

export default PostCard;
