<template>
    <div id="app">
        <el-container>
            <el-header>
				<HeaderTop/>
			</el-header>
            <el-main>
                <Layout>
                    <router-view />
                </Layout>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import HeaderTop from './components/HeaderTop'
import Layout from "@/layouts";
export default {
    name: "App",
    components: {
		Layout,
		HeaderTop
    }
};
</script>

<style lang="scss">
@import "./style/normalize.scss";
@import "./style/reset.scss";
@import "./style/common.scss";
@import "~@/assets/iconfont/iconfont.css";
#app {
    font-size: $font-size-base;
    color: $color-common;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF UI Text",
        "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
}
.el-header {
	padding: 0;
	height: 70px;
}
</style>
