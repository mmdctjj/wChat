import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Chatlsit from '@/components/notice/ChatList'
import Chat from '@/components/notice/Chat'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/chatList',
            name: 'Chatlsit',
            component: Chatlsit
        },
        {
            path: '/chatList/:id',
            name: 'Chat',
            component: Chat
        }
    ]
})
