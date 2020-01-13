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
    </div>
</template>

<script>
import { getBannerData } from "../../api/common";

export default {
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
                    background-position: 1px -289px;
                }

                p {
                    position: absolute;
                    white-space: nowrap;
                    bottom: 18px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 12px;
                    color: rgb(141, 141, 141)
                }
            }
        }
    }
}
</style>
