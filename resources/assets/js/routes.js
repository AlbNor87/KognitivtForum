import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home')
    },
    {
        path: '/about',
        component: require('./views/AboutUs')
    },
    {
        path: '/contact',
        component: require('./views/Contact')
    },
    {
        path: '/services',
        component: require('./views/Services')
    },
    {
        path: '/kbt',
        component: require('./views/AboutKBT')
    },
    {
        path: '/office',
        component: require('./views/Office')
    },
]


export default new VueRouter({

    routes,
    linkActiveClass: 'kf-active'

});