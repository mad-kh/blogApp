import React from "react";
import "./Write.css";
import { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
//import { addPost } from "../../redux/actions/postsActions";
function Write() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    // const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/api/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.post("/api/posts/addPost", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }

        // const res = dispatch(addPost({ username: user.username, title, desc }));
        // // window.location.replace("/post/" + res.data._id);
        // console.log(res);
    };

    return (
        <div className="write">
            {file && (
                <img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            )}
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" onClick={handleSubmit}>
                    Publish
                </button>
            </form>
        </div>
    );
}
export default Write;
