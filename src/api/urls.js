//专门用来管理api接口

const MUSIC_SEARCH = '/search?keywords='   //搜索框搜索歌名
const MUSIC_BANNER = '/banner'   //获取轮播图数据
const PERSONALIZED = '/personalized?time='+Date.now() //获取推荐歌单
const NEWALBUM = '/top/album?offset=0&limit=10' //获取前10条新碟数据

export {
    MUSIC_SEARCH,
    MUSIC_BANNER,
    PERSONALIZED,
    NEWALBUM
}