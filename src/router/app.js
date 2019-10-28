export default {

    routes: [{
        path: '/signin',
        name: 'signin',
        component: resolve => require(['components/modules/Signin.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: resolve => require(['components/modules/Signup.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    ]
}
