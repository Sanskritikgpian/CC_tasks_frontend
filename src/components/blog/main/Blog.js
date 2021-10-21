import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Blog.css";
// constants
import { GET_POSTS_ENDPOINT } from "../../../constants/endpoints";
import { CC_IITKGP_URL } from "../../../constants/urls";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../../../constants/routes";
// components
import Post from "../post/Post";
import NewPost from "../newPost/NewPost";
import PostCard from "../postCard/PostCard";
import ShapeDivider from "../shapeDivider/ShapeDivider";
// material-ui
import { Drawer, Button, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
// contexts
import UserContext from "../../../contexts/User";

const Blog = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [postState, setPostState] = useState(false);
    const [newPostState, setNewPostState] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        try {
            axios.get(GET_POSTS_ENDPOINT)
                .then(res => setPosts(res.data))
                .catch(err => { });
        } catch (err) { };

    }, [comments]);

    const handleSignOut = () => {
        localStorage.removeItem("cc_task");
        history.push(SIGN_IN_ROUTE);
    };

    return (
        <div className="blog">
            <div className="blog__intro">
                <h1>Welcome to CC Blog</h1>
                <p>A person's most beautiful useful asset is not a head full of knowledge, but a heart full of love, an ear ready to listen and a hand willing to help others.</p>
                <div className="blog__buttons">
                    <Button onClick={() => window.scrollTo(0, window.innerHeight - 100)}>Explore!</Button>
                    <Button onClick={() => window.open(CC_IITKGP_URL, "_blank")}>About us!</Button>
                </div>
            </div>
            <ShapeDivider />
            <div className="blog__posts">
                {posts.length ? posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPosts={setPosts} setPostState={setPostState} setComments={setComments} />) : <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center", color: "gray", margin: "50px 0" }}>No posts yet.</p>}
            </div>
            <Drawer anchor={"bottom"} open={postState} onClose={() => setPostState(false)}>
                <Post post={post} setPostState={setPostState} comments={comments} setComments={setComments} />
            </Drawer>
            <Drawer anchor={"top"} open={newPostState} onClose={() => setNewPostState(false)}>
                <NewPost setNewPostState={setNewPostState} setPosts={setPosts} />
            </Drawer>
            <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'fixed', right: 10, bottom: 10 }} icon={<SpeedDialIcon />}>
                <SpeedDialAction key={"write a post"} icon={<CreateRoundedIcon />} tooltipTitle={"write a post"} onClick={() => setNewPostState(true)} />
                {!user ? <SpeedDialAction key={"Sign in for counsellors"} icon={<VpnKeyRoundedIcon />} tooltipTitle={"Sign in for counsellors"} onClick={() => history.push(SIGN_IN_ROUTE)} /> : null}
                {!user ? <SpeedDialAction key={"Sign up for counsellors"} icon={<PersonAddRoundedIcon />} tooltipTitle={"Sign up for counsellors"} onClick={() => history.push(SIGN_UP_ROUTE)} /> : null}
                {user ? <SpeedDialAction key={"Sign out for counsellors"} icon={<ExitToAppRoundedIcon />} tooltipTitle={"Sign out for counsellors"} onClick={() => handleSignOut()} /> : null}
            </SpeedDial>
        </div>
    );
};

export default Blog;
