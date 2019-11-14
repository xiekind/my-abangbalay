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
            ROUTER.push("/customerdashboard");
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
    // saveInfo(username,email){
    //     sessionStorage.setItem("Username", username),
    //     sessionStorage.setItem("Email", email),
    //     ROUTER.push('/');
    // }
}