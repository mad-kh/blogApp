export function loginUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
export function logOut() {
    localStorage.clear();
}
