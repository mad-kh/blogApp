import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchCats } from "../../redux/actions/catsAction";
export default function Sidebar() {
    const dispatch = useDispatch();
    useEffect(() => {
        // eslint-disable-next-line
        dispatch(fetchCats());
    }, []);
    const cats = useSelector((state) => state.categoriesReducer.category);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <Link to="/About">
                    <span className="sidebarTitle">Blog History</span>
                </Link>

                <img
                    src="https://i.etsystatic.com/16037131/r/il/4232f8/2253300976/il_794xN.2253300976_cx34.jpg"
                    alt=""
                />

                <p></p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="Linkcat">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <i class="fas fa-feather"></i>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
