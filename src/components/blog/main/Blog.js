import React, { useState, useEffect } from "react";
import "./Blog.css";
// constants
import { GET_POSTS_ENDPOINT } from "../../../constants/endpoints";
import { CC_IITKGP_URL } from "../../../constants/urls";
// components
import Post from "../post/Post";
import PostCard from "../postCard/PostCard";
// material-ui
import { Drawer, Button } from "@mui/material";
import axios from "axios";

const Blog = () => {
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [postState, setPostState] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        try {
            axios.get(GET_POSTS_ENDPOINT)
                .then(res => setPosts(res.data))
                .catch(err => { });
        } catch (err) { };

    }, [comments]);

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
            <div className="blog__posts">
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
                {posts.map((post, index) => <PostCard key={index} post={post} setPost={setPost} setPostState={setPostState} setComments={setComments} setLikesCount={setLikesCount} />)}
            </div>
            <Drawer anchor={"bottom"} open={postState} onClose={() => setPostState(false)}>
                <Post post={post} setPostState={setPostState} comments={comments} setComments={setComments} likesCount={likesCount} setLikesCount={setLikesCount} />
            </Drawer>
        </div>
    );
};

export default Blog;
