import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./TopBar.css";
//import { useDispatch } from "react-redux";
import { logOut } from "../../utiles";
//import { addUser, getUser } from "../../redux/actions/usersAction";
// import {deleteUser} from "../../redux/actions/usersAction"
export default function TopBar() {
    // const user= useSelector(state => state.usersReducer.users)
    //const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user"));
    const PF = "http://localhost:5000/images/";
    const history = useHistory();
    const handlelogOut = async () => {
        try {
            await logOut();
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="top">
            <Link to="/" className="navbar-logo" className="Link">
                TABA3'NI...
                <i className="fas fa-feather-alt"></i>
            </Link>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <Link className="link" to="about">
                        <li className="topListItem">ABOUT</li>
                    </Link>
                    <Link className="link" to="contact">
                        <li className="topListItem">CONTACT</li>
                    </Link>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>

                    <li className="topListItem" onClick={handlelogOut}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={PF + user.profilePic}
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
