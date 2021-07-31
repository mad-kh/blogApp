import React from "react";
import "./SinglePost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, fetchPosts } from "../../redux/actions/postsActions";
export default function SinglePost() {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const location = useLocation();
    const PF = "http://localhost:5000/images/";
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [updateMode, setUpdateMode] = useState(false);
    console.log(user.username);
    console.log(post);
    // console.log("post.username", post.username);
    // console.log(post.username === user.username);
    // console.log(post._id);
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(
            deletePost({
                id: post._id,
            })
        );
    };
    // const handleUpdate = async () => {
    //     try {
    //         await axios.put(`//api/posts/${post._id}`, {
    //             username: user.username,
    //             title,
    //             desc,
    //         });
    //         setUpdateMode(false);
    //     } catch (err) {}
    // };
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="singlePostImg"
                    />
                )}

                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user.username && (
                        <div className="singlePostEdit">
                            <i
                                className="singlePostIcon far fa-edit"
                                // onClick={handleUpdate}
                            ></i>
                            <i
                                className="singlePostIcon far fa-trash-alt"
                                onClick={handleDelete}
                            ></i>
                        </div>
                    )}
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        <p>
                            Author:
                            <Link
                                to={`/?user=${post.username}`}
                                className="link"
                            >
                                <b> {post.username} </b>
                            </Link>
                        </p>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    );
}
