import React from "react"
import { Link, useHistory } from "react-router-dom";
import "./TopBar.css";
import {logOut } from "../../utiles"
import { useDispatch, useSelector} from "react-redux"
import { addUser, getUser } from "../../redux/actions/usersAction";
// import {deleteUser} from "../../redux/actions/usersAction"
export default function TopBar() {
 // const user= useSelector(state => state.usersReducer.users)
  const dispatch = useDispatch()
const user=false

const history=useHistory()
  const handlelogOut= ()=> {
  logOut( ) 

      }

  return (
    <div className="top">
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
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
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
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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