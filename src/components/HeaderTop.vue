<template>
    <div class="header-wrap">
        <div class="header">
            <div class="logo">
                <i class="el-icon-moon-night"></i> 很酷的Music
            </div>
            <ul>
                <li><router-link to="/findmusic">发现音乐</router-link></li>
                <li>
                    <router-link to="/mymusic">我的音乐</router-link>
                </li>
                <li>
                    <router-link to="/friends">朋友</router-link>
                </li>
                <li>
                    <router-link to="/shop">商城</router-link>
                </li>
                <li>
                    <router-link to="/musicman">音乐人</router-link>
                </li>
                <li class="hidden-sm-and-down">
                    <router-link to="/download">
                        <i class="hot"></i> 下载客户端
                    </router-link>
                </li>
            </ul>
            <Search />
            <p>登录</p>
        </div>
    </div>
</template>

<script>
//响应式 模块隐藏
import "element-ui/lib/theme-chalk/display.css";
import Search from "./Search";
export default {
    components: {
        Search
    }
};
</script>

<style lang="scss" scoped>
.header-wrap {
    height: 60px;
    background-color: rgb(36, 36, 36);
    display: flex;
    justify-content: center;

    .header {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .logo {
            font-size: 28px;
            color: white;
            line-height: 60px;
            margin-right: 25px;
        }
        ul {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 70px;

            li {
                height: 100%;
                line-height: 60px;
                padding: 0 15px;

                a {
                    font-size: 16px;
                    color: white;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: nowrap;
                }
            }
            li:hover {
                background-color: #000;
            }
            li:last-child {
                position: relative;

                .hot {
                    width: 31px;
                    height: 17px;
                    background-image: url("../assets/img/common/hot.png");
                    position: absolute;
                    border-radius: 10px;
                    right: -18px;
                    top: 6px;
                }
            }
        }
        p {
            //弹性一字排开 最后一个元素右对齐
            margin-left: auto;
        }
    }
}
</style>
