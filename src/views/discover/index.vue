<template>
    <div class="wrapper">
        <div
            class="slider-container"
            :style="{ 'background-image': 'url(' + url + ')' }"
        >
            <el-carousel :interval="5000" arrow="always" trigger="click">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="http://p1.music.126.net/El56giZfsh9EmFFD_hVPnA==/109951164617485189.jpg?imageView&quality=89" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 动态绑定背景图片
            url:
                "http://p1.music.126.net/hQQKpcOzDSWuQ5QHcjtJIQ==/109951164617443489.jpg?imageView&blur=40x20"
        };
    },
    mounted() {}
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

        .el-carousel {
            width: 1100px;
            height: 286px;
            //超出隐藏,否则会抖动
            overflow: hidden;
            
            //缩小轮播图显示区域
            .el-carousel__item {
                padding-left: 60px;
                padding-right: 260px;
            }

            /deep/ .el-carousel__indicators--horizontal {
                left: 40%;
            }
        }
    }
}
</style>
