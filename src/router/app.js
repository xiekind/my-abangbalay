export default {

    routes: [{
        path: '/signin',
        name: 'signin',
        component: resolve => require(['components/modules/SignIn.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: resolve => require(['components/modules/SignUp.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    ]
}
