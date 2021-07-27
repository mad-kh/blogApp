 import React from "react"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./SideBar.css";
import { useDispatch, useSelector} from "react-redux"

import {fetchCats} from "../../redux/actions/catsAction"
export default function Sidebar() {
  // eslint-disable-next-line  
  const dispatch = useDispatch()
useEffect(() => {
 dispatch( fetchCats())
     

    }, []);
    const cats = useSelector(state => state.categoriesReducer.category)
 console.log("cat is here",cats)
    return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://sigmacorporation.pro/uploads/img/129.jpeg"
          alt=""
        />
        <p>
       
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c) => (
          <Link to={`/?cat=${c.name}`} className="link">

          <li className="sidebarListItem" key="i">{c.name}</li>
          </Link>
        ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
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