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
                <div class="recomment-container">
                    <div
                        class="recommend-wrap"
                        v-for="item in recommentDataList"
                        :key="item.id"
                    >
                        <div class="pic">
                            <img :src="item.picUrl" alt="" />
                            <span>
                                <i class="icon"></i>
                                <p>{{ item.playCount | formateCount }}万</p>
                                <a href="javascript:;" title="播放"></a>
                            </span>
                        </div>
                        <a href="javascript:;" class="recommend-title">{{
                            item.name
                        }}</a>
                    </div>
                </div>
                <NavsHeader show="false"
                    ><span class="words">新碟上架</span></NavsHeader
                >
                <div class="ablum-container">
                    <el-carousel
                        ref="sliderDom"
                        arrow="never"
                        :autoplay="false"
                        trigger="click"
                        indicator-position="none"
                    >
                        <el-carousel-item
                            v-for="(item, index) in albumList"
                            :key="index"
                        >
                            <!-- 编辑 -->
                            <ul class="items-wrap">
                                <li
                                    class="items"
                                    v-for="(subItem, subIndex) in item"
                                    :key="subIndex"
                                >
                                    <div class="pic-container">
                                        <img
                                            class="img"
                                            :src="
                                                subItem.picUrl +
                                                    '?param=100y100'
                                            "
                                            alt=""
                                        />
                                        <a href="javascript:;"></a>
                                    </div>
                                    <p>{{ subItem.name }}</p>
                                    <span>{{ subItem.artists[0].name }}</span>
                                </li>
                            </ul>
                        </el-carousel-item>
                    </el-carousel>
                    <i class="el-icon-caret-left" @click="doSlider('left')"></i>
                    <i
                        class="el-icon-caret-right"
                        @click="doSlider('right')"
                    ></i>
                </div>
                <NavsHeader show="false"
                    ><span class="words">榜单</span></NavsHeader
                >
            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>

<script>
import {
    getBannerData,
    getRecommentData,
    getNewAlbumData
} from "../../api/common";
import NavsHeader from "../../components/NavsHeader";

export default {
    components: {
        NavsHeader
    },
    filters: {
        formateCount(val) {
            return Math.ceil(val / 10000);
        }
    },
    data() {
        return {
            //轮播图
            bannerList: [],
            // 动态绑定背景图片
            bg_url: "",
            //推荐歌单
            recommentDataList: [],
            //新碟数据
            albumList: []
        };
    },
    mounted() {
        this.getBannerList();
        this.getRecommentDataList();
        this.getAlbumList();
    },
    methods: {
        getBannerList() {
            // return false;
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
        getRecommentDataList() {
            // return false;
            getRecommentData().then(res => {
                console.log(res);
                this.recommentDataList = res.result.slice(0, 10);
            });
        },
        doBannerChange(index) {
            // console.log(index);
            this.bg_url = this.bannerList[index].bg_image;
        },
        doSlider(direction) {
            direction === "left"
                ? this.$refs.sliderDom.prev()
                : this.$refs.sliderDom.next();
        },
        getAlbumList() {
            // return false;
            getNewAlbumData().then(res => {
                let cacheData = [];
                cacheData.push(
                    res.albums.filter((item, index) => {
                        return index <= 4;
                    })
                );
                cacheData.push(
                    res.albums.filter((item, index) => {
                        return index > 4;
                    })
                );
                console.log("new", cacheData);
                this.albumList = cacheData;
            });
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
        background-color: #fff;
        height: 1666px;
        display: flex;

        .content-left {
            width: 846px;
            height: 100%;
            padding: 0 20px;

            .recomment-container {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .recommend-wrap {
                    width: 140px;
                    margin-bottom: 20px;

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

            .ablum-container {
                width: 100%;
                height: 188px;
                padding: 10px 35px;
                background-color: rgb(245, 245, 245);
                border: 1px solid rgb(211, 211, 211);
                position: relative;

                /deep/ .el-carousel {
                    height: 168px;

                    .el-carousel__container {
                        height: 168px;

                        .el-carousel__item {
                            height: 168px;

                            .items-wrap {
                                height: 100%;
                                padding-top: 23px;
                                display: flex;
                                justify-content: space-around;

                                .items {
                                    height: 150px;
                                    width: 118px;
                                    background: url("../../assets/img/index.png")
                                        no-repeat -260px 100px;

                                    .pic-container {
                                        widows: 100%;
                                        height: 100px;
                                        margin-bottom: 8px;
                                        position: relative;
                                        z-index: 0;

                                        .img {
                                            width: 100px;
                                            height: 100px;
                                        }
                                        a {
                                            width: 100%;
                                            height: 100%;
                                            position: absolute;
                                            left: 0;
                                            top: 0;
                                            background: url("../../assets/img/coverall.png")
                                                no-repeat 0 -570px;
                                        }
                                    }

                                    p {
                                        font-size: 12px;
                                        margin-bottom: 3px;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                    span {
                                        font-size: 12px;
                                        color: rgb(102, 102, 102);
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        // a标签的title属性 可以悬停显示,这里需要更换为a标签
                                    }
                                }
                            }
                        }
                    }
                }

                .el-icon-caret-left {
                    position: absolute;
                    cursor: pointer;
                    padding: 4px;
                    font-size: 18px;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .el-icon-caret-right {
                    position: absolute;
                    cursor: pointer;
                    padding: 4px;
                    font-size: 18px;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
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
