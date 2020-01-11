<template>
    <div class="home">
        <TopLine :navs="navs"></TopLine>
        <!-- <input v-model="musicWords" type="text" @keyup.enter="doSearch"/> -->
		<router-view></router-view>
    </div>
</template>

<script>
import TopLine from "@/components/TopLine";
import { getKeywordMusic, getKeywordMusic1 } from "../api/common.js";
const discoverList = [
    ["推荐", "/findmusic"],
    ["排行榜", "/findmusic/toplist"],
    ["歌单", "/findmusic/playlist"],
    ["主播电台", "/findmusic/djradio"],
    ["歌手", "/findmusic/artist"],
    ["新碟上架", "/findmusic/album"]
];

export default {
    name: "home",
    components: {
        TopLine
    },
    data() {
        return {
            // musicWords:'',
            navs: discoverList
        };
    },
    computed: {},
    mounted() {},
    methods: {
        async doSearch() {
            // const result = await getKeywordMusic('/search',{keywords:this.musicWords})
            const result1 = await getKeywordMusic1(this.musicWords);
            console.log(result1);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/iconfont/iconfont.css";

.home {
}
</style>
