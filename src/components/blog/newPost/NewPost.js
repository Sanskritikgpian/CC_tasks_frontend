import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css";
// constants
import { ADD_POST_ENDPOINT } from "../../../constants/endpoints";
// material-ui
import { TextareaAutosize, TextField, IconButton, Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// consts
const newPostPhotoURL = "https://source.unsplash.com/1600x900/?motivation";

const NewPost = ({ setNewPostState, setPosts }) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleNewPost = e => {
        e.preventDefault();
        const postData = { name, title, content, date: new Date().toString().substring(0, 15), comments: [] };

        try {
            axios.post(ADD_POST_ENDPOINT, postData)
                .then(res => {
                    setPosts(posts => ([...posts, postData]));
                    setNewPostState(false);
                    window.location.reload();
                })
                .catch(err => { })
        } catch (err) { }

    };

    return (
        <div className="newPost">
            <IconButton onClick={() => setNewPostState(false)} style={{ position: "fixed", top: "10px", right: "10px", color: "red", backgroundColor: "white" }}><CloseRoundedIcon style={{ fontSize: "30px" }} /></IconButton>
            <form className="newPost__container" onSubmit={e => handleNewPost(e)}>
                <TextField variant="standard" label="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                <TextField variant="standard" label="Enter post's title" value={title} onChange={e => setTitle(e.target.value)} />
                <TextareaAutosize aria-label="minimum height" placeholder="What's on your mind?" value={content} onChange={e => setContent(e.target.value)} />
                <Button type="submit" disabled={!(content && title)} style={!(content && title) ? { backgroundColor: "lightgrey" } : {}}>Post</Button>
            </form>
            <img src={newPostPhotoURL} alt="" className="newPost__photo" />
        </div>
    );
};

export default NewPost;
