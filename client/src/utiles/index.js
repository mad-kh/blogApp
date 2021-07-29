export function loginUser (token){
    localStorage.setItem("jwt",token)
}
export function logOut(token) {
    localStorage.clear("jwt",token)
}
export function getUsers(token) {
    localStorage.getItem("jwt",token)
    
}