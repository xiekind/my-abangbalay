export default {
    routes: [{
        path: '/signin',
        name: 'singin',
        component: resolve => require(['modules/Signin.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: resolve => require(['modules/Signup.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['modules/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: resolve => require(['modules/Homepage.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/view',
        name: 'view',
        component: resolve => require(['modules/View.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    ]
}
