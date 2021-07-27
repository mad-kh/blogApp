import React from 'react'
import { useEffect} from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/SideBar/SideBar'
// import {postReducer} from '../../redux/reducers/postReducer'
//import axios from 'axios'
import './Home.css'
 import { useDispatch, useSelector} from "react-redux"
  import { fetchPosts } from "../../redux/actions/postsActions"
import { useLocation } from 'react-router'

function Home() {
    const {search} =useLocation()
 //const [posts, setPosts] = useState([]);
const dispatch = useDispatch()
useEffect(() => {
      // eslint-disable-next-line 
 dispatch( fetchPosts(search))
      
   // eslint-disable-next-line

    }, [search]);
    // eslint-disable-next-line
     const posts = useSelector(state => state.postReducer.posts)

    console.log("posts here :",posts)
// useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts");
//       console.log(res)
//     //    setPosts(res.data);
//     };
//     fetchPosts()
//    console.log(fetchPosts()) ;
//   }, []);
    return (
        <div>
         <Header/>   
         <div className="home">
         <Posts posts={posts} />
         <SideBar/>
         </div>
         
      
        </div>
    )
}

export default Home
