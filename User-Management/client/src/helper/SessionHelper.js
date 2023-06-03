class SessionHelper {
    setToken(token) {
        localStorage.setItem("token", token)
    }
    getToken() {
        return localStorage.getItem("token")
    }


    removeSessions = () => {
        localStorage.clear();
        window.location.href = "/login"
    }

}
export const { setToken, getToken, removeSessions } = new SessionHelper();