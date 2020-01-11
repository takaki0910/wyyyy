import Vue from "vue";
import Router from "vue-router";

//重复点击路由的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 按需（懒）加载（vue实现）
const FindMusic = () => import(/* webpackChunkName: "" */ "../views/FindMusic");
const MyMusic = () => import(/* webpackChunkName: "" */ "../views/MyMusic");
const Friends = () => import(/* webpackChunkName: "" */ "../views/Friends");
const Shop = () => import(/* webpackChunkName: "" */ "../views/Shop");
const MusicMan = () => import(/* webpackChunkName: "" */ "../views/MusicMan");
const Download = () => import(/* webpackChunkName: "" */ "../views/Download");
const IndexPage = () => import(/* webpackChunkName: "" */ "../views/discover");
const Toplist = () => import(/* webpackChunkName: "" */ "../views/discover/toplist");
const Playlist = () => import(/* webpackChunkName: "" */ "../views/discover/playlist");
const Djradio = () => import(/* webpackChunkName: "" */ "../views/discover/djradio");
const Artist = () => import(/* webpackChunkName: "" */ "../views/discover/artist");
const Album = () => import(/* webpackChunkName: "" */ "../views/discover/album");

Vue.use(Router);

let base = `${process.env.BASE_URL}`; // 动态获取二级目录
console.log(process.env);

const router = new Router({
    // mode: 'history',
    base: base,
    linkActiveClass:'active',
    routes: [
        {
            path: "/findmusic",
            name: "findmusic",
            component: FindMusic,
            children:[
                {
                    path:'/findmusic',
                    name:'findmusicIndex',
                    component: IndexPage
                },
                {
                    path:'/findmusic/toplist',
                    name:'toplist',
                    component: Toplist
                },
                {
                    path:'/findmusic/playlist',
                    name:'playlist',
                    component: Playlist
                },
                {
                    path:'/findmusic/djradio',
                    name:'djradio',
                    component: Djradio
                },
                {
                    path:'/findmusic/artist',
                    name:'artist',
                    component: Artist
                },
                {
                    path:'/findmusic/album',
                    name:'album',
                    component: Album
                }
            ]
        },
        {
            path: "/mymusic",
            name: "mymusic",
            component: MyMusic
        },
        {
            path: "/friends",
            name: "friends",
            component: Friends
        },
        {
            path: "/shop",
            name: "shop",
            component: Shop
        },
        {
            path: "/musicman",
            name: "musicman",
            component: MusicMan
        },
        {
            path: "/download",
            name: "download",
            component: Download
        },
        {
            path: "/",
            redirect: "/findmusic"
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});

router.beforeEach((to, from, next) => {
    // 做些什么，通常权限控制就在这里做哦

    // 必须写next()哦，不然你的页面就会白白的，而且不报错，俗称"代码下毒"
    next();
});

export default router;
