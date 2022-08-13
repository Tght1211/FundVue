import {createRouter, createWebHistory} from 'vue-router'
import Layout from "../layout/Layout.vue";

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        // 当访问/的时候就会访问/user
        redirect: '/main',
        children: [
            {
                path: 'main',
                name: 'Main',
                component: () => import("../views/HomePage/Main.vue"),
            },
            {
                path: '/chooseFund',
                name: 'ChooseFund',
                component: () => import("../views/SelectFund/ChooseFund.vue")
            },
            {
                path: '/myOptional',
                name: 'MyOptional',
                component: () => import("../views/SelectFund/MyOptional.vue")
            },
            {
                path: '/myFundField',
                name: 'MyFundField',
                component: () => import("../views/FundField/MyFundField.vue")
            },
            {
                path: 'accuIncome',
                name: 'AccuIncome',
                component: () => import("../views/FundField/AccuIncome.vue"),
            },
            {
                path: '/operatingData',
                name: 'OperatingData',
                component: () => import("../views/FundField/OperatingData.vue")
            },
            {
                path: '/community',
                name: 'Community',
                component: () => import("../views/Community/Community.vue")
            },
            {
                path: '/comToShare',
                name: 'ComToShare',
                component: () => import("../views/Community/ComToShare.vue")
            },
            {
                path: 'myPosts',
                name: 'MyPosts',
                component: () => import("../views/Community/MyPosts.vue"),
            },
            {
                path: '/myComment',
                name: 'MyComment',
                component: () => import("../views/Community/MyComment.vue")
            },
            {
                path: '/myFavorite',
                name: 'MyFavorite',
                component: () => import("../views/Community/MyFavorite.vue")
            },
            {
                path: '/hotFundList',
                name: 'HotFundList',
                component: () => import("../views/ListCenter/HotFundList.vue")
            },
            {
                path: '/HotUserList',
                name: 'HotUserList',
                component: () => import("../views/ListCenter/HotUserList.vue")
            },
            {
                path: '/tomIncomeList',
                name: 'TomIncomeList',
                component: () => import("../views/ListCenter/TomIncomeList.vue")
            },
            {
                path: '/accuIncomeList',
                name: 'AccuIncomeList',
                component: () => import("../views/ListCenter/AccuIncomeList.vue")
            },
            {
                path: '/accuReturnRate',
                name: 'AccuReturnRate',
                component: () => import("../views/ListCenter/AccuReturnRate.vue")
            },
            {
                path: '/accuLossRate',
                name: 'AccuLossRate',
                component: () => import("../views/ListCenter/AccuLossRate.vue")
            },
            {
                path: '/basicInfo',
                name: 'BasicInfo',
                component: () => import("../views/MyCenter/BasicInfo.vue")
            },
            {
                path: '/investInfo',
                name: 'InvestInfo',
                component: () => import("../views/MyCenter/InvestInfo.vue")
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("../views/Register.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

