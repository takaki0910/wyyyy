<template>
    <div class="wrapper">
        <div
            class="slider-container"
            :style="{ 'background-image': 'url(' + bg_url + ')' }"
        >
            <div class="main-content">
                <!-- 跑马灯 -->
                <el-carousel
                    :interval="3000"
                    arrow="always"
                    trigger="click"
                    @change="doBannerChange"
                >
                    <el-carousel-item
                        v-for="item in bannerList"
                        :key="item.encodeId"
                    >
                        <img :src="item.imageUrl" alt="" />
                    </el-carousel-item>
                </el-carousel>
                <!-- 客户端下载 -->
                <div class="download">
                    <a class="download-btn" href="javascript:;"></a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <NavsHeader show="true"
                    ><span class="words">热门推荐</span></NavsHeader
                >
                <div class="recommend-wrap">
                    <div class="pic">
                        <img
                            src="https://p2.music.126.net/js2KR2eVHz-RONCLpBLL3Q==/109951164622725596.jpg"
                            alt=""
                        />
                        <span>
                            <i class="icon"></i>
                            <p>66万</p>
                            <a href="javascript:;" title="播放"></a>
                        </span>
                    </div>
                    <a href="javascript:;" class="recommend-title"
                        >[华语速爆新歌] 最新华语音乐推荐</a
                    >
                </div>
            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>

<script>
import { getBannerData } from "../../api/common";
import NavsHeader from "../../components/NavsHeader";

export default {
    components: {
        NavsHeader
    },
    data() {
        return {
            bannerList: [],
            // 动态绑定背景图片
            bg_url: ""
        };
    },
    mounted() {
        this.getBannerList();
    },
    methods: {
        getBannerList() {
            return false;
            getBannerData().then(res => {
                console.log(res);
                const newData = res.banners;
                newData.forEach((item, index) => {
                    item["bg_image"] =
                        item["imageUrl"] + "?imageView&blur=40x20";
                });
                this.bannerList = newData;
                //初始化第一张的通栏背景
                this.bg_url = this.bannerList[0].bg_image;
            });
        },
        doBannerChange(index) {
            // console.log(index);
            this.bg_url = this.bannerList[index].bg_image;
        }
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 1288px;

    .slider-container {
        background-position: center center;
        background-size: 6000px;
        display: flex;
        justify-content: center;

        .main-content {
            width: 1100px;
            height: 286px;
            display: flex;

            .el-carousel {
                width: 846px;
                height: 286px;
                //超出隐藏,否则会抖动
                overflow: hidden;

                //缩小轮播图显示区域
                .el-carousel__item {
                    // 当窗口缩小时限定高度固定,否则图片会等比例缩小
                    min-height: 286px;
                    img {
                        width: 100%;
                        height: 286px;
                    }
                }

                /deep/ .el-carousel__indicators--horizontal {
                    left: 50%;
                }
            }
            .download {
                width: 254px;
                height: 286px;
                border-bottom: 2px solid rgb(16, 8, 8);
                position: relative;
                background: url("../../assets/img/download.png") no-repeat 0 0;

                .download-btn {
                    position: absolute;
                    display: block;
                    width: 215px;
                    height: 56px;
                    background: url("../../assets/img/download.png") no-repeat 0
                        60px;
                    left: 18px;
                    bottom: 45px;
                }
                .download-btn:hover {
                    background-position: 1px -287px;
                }

                p {
                    position: absolute;
                    white-space: nowrap;
                    bottom: 18px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 12px;
                    color: rgb(141, 141, 141);
                }
            }
        }
    }

    .content {
        width: 1100px;
        margin: 0 auto;
        border: 1px solid rgb(211, 211, 211);
        height: 666px;
        display: flex;

        .content-left {
            width: 846px;
            height: 100%;
            padding: 0 20px;

            .recommend-wrap {
                width: 140px;

                .pic {
                    width: 140px;
                    height: 140px;
                    margin-bottom: 10px;
                    position: relative;
                    img {
                        width: 140px;
                        height: 140px;
                    }

                    span {
                        height: 27px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background: url("../../assets/img/coverall.png") 0 -537px;
                        display: flex;
                        align-items: center;

                        .icon {
                            width: 14px;
                            height: 11px;
                            margin: 9px 8px;
                            background: url("../../assets/img/iconall.png")
                                no-repeat 0 -24px;
                        }

                        p {
                            font-size: 12px;
                            color: #ccc;
                        }

                        a {
                            width: 16px;
                            height: 17px;
                            margin-left: auto;
                            margin-right: 8px;
                            background: url("../../assets/img/iconall.png")
                                no-repeat 0 0;
                        }
                    }
                }

                .recommend-title {
                    color: #000;
                    font-size: 14px;
                    text-decoration: none;
                }
                .recommend-title:hover {
                    text-decoration: underline;
                }
            }
        }

        .content-right {
            height: 100%;
            border-left: 1px solid rgb(211, 211, 211);
        }
    }
}
</style>
