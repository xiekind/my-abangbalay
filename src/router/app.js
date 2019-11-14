export default {

    routes: [{
        path: '/login',
        name: 'login',
        component: resolve => require(['components/modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/createaccount',
        name: 'createaccount',
        component: resolve => require(['components/modules/CreateAccount.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: resolve => require(['components/modules/About.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/boarderdashboard',
        name: 'boarderdashboard',
        component: resolve => require(['components/modules/Boarder/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    ]
}
