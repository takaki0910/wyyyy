<template>
    <div class="header-wrap">
        <div class="header">
            <div class="logo">
                <i class="el-icon-moon-night"></i> 很酷的Music
            </div>
            <ul>
                <li v-for="(item,index) in headList" :key="index" @click="clickHandler(index)">
                    <router-link :to="item[1]">
                        <div class="hot" v-if="index === headList.length-1"></div>
                        {{item[0]}}
                        </router-link>
                    <i class="tri" v-if="index === activeSection"></i>
                </li>
                <!-- <li>
                    <router-link to="/findmusic">发现音乐</router-link>
                    <i class="tri"></i>
                </li>
                <li>
                    <router-link to="/mymusic">我的音乐</router-link>
                    <i class="tri"></i>
                </li>
                <li>
                    <router-link to="/friends">朋友</router-link>
                    <i class="tri"></i>
                </li>
                <li>
                    <router-link to="/shop">商城</router-link>
                    <i class="tri"></i>
                </li>
                <li>
                    <router-link to="/musicman">音乐人</router-link>
                    <i class="tri"></i>
                </li>
                <li class="hidden-sm-and-down">
                    <router-link to="/download">
                        <div class="hot"></div>
                        下载客户端
                    </router-link>
                    <i class="tri"></i>
                </li> -->
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
    },
    data() {
        return {
            headList: [
                ["发现音乐",'/findmusic'],
                ["我的音乐",'/mymusic'],
                ["朋友",'/friends'],
                ["商城",'/shop'],
                ["音乐人",'/musicman'],
                ["下载客户端",'/download']
            ],
            activeSection:0
        };
    },
    mounted() {},
    methods: {
        clickHandler(index){
            this.activeSection = index;
        }
    },
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
                position: relative;

                i {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    display: block;
                    width: 0;
                    height: 0;
                    border: 6px rgb(194, 12, 12) solid;
                    border-color: transparent transparent rgb(194, 12, 12)
                        transparent;
                }

                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    padding: 0 15px;
                    font-size: 16px;
                    color: white;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: nowrap;
                }
                .active {
                    background-color: #000;
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
