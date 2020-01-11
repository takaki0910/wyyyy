<template>
	<div class="home">
		<TopLine></TopLine>
		<input v-model="musicWords" type="text" @keyup.enter="doSearch"/>
	</div>
</template>

<script>
	import TopLine from "@/components/TopLine";
	import {getKeywordMusic,getKeywordMusic1} from  '../api/common.js'

	export default {
		name: "home",
		components: {
			TopLine
		},
		data() {
			return {
				musicWords:''
			};
		},
		computed: {
			
		},
		mounted() {
		},
		methods: {
			async doSearch(){
				// const result = await getKeywordMusic('/search',{keywords:this.musicWords})
				const result1 = await getKeywordMusic1(this.musicWords)
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
