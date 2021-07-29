import {GET_POSTS}  from '../constants/action-types'
import axios from "axios";

export  const fetchPosts =  (search) => (dispatch) => {
    axios
        .get("/api/posts/"+search)
        .then((response) =>
         // eslint-disable-next-line
        dispatch({ type: GET_POSTS, payload:response.data }
    
            )
        )
        .catch((err) => console.log(err));
}
// export const getPost = (payload) => (dispatch) => {
//     axios
//         .put(
//             `/api/posts/${payload.id}`,
//             payload.updatedContact
//         )
//         .then(() => dispatch(fetchPosts()))
//         .catch((err) => console.log(err));
// };