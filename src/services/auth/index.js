import ROUTER from 'router'

export default {
    user: null,
    RegisteredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return user
    },
    register(username, email, password) {
        if (username == '' || password == '' || email == '') {
            ROUTER.push("/signup")
        }else{
            this.RegisteredUser.push({
                Username: username,
                Password: password,
                Email: email
            });
            ROUTER.push("/dashboard");
        }
    },
    login(username, password) {
        for (let i = 0; i < this.RegisteredUser.length; i++) {
            if (this.RegisteredUser[i].Username === username && this.RegisteredUser[i].Password === password) {
                return this.RegisteredUser[i]
            }
        }
        return null;
    },
    logout() {
        this.user = null,
        ROUTER.push('/view')
    },
    saveInfo(fname,lname,uname,email){
        sessionStorage.setItem("First name", fname),
        sessionStorage.setItem("Last name", lname),
        sessionStorage.setItem("Username", uname),
        sessionStorage.setItem("Email", email),
        ROUTER.push('/userinfo');
    }
}