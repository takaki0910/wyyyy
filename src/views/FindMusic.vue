<template>
	<div class="home">
		<input v-model="musicWords" type="text" @keyup.enter="doSearch"/>
	</div>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld";
	import {getKeywordMusic,getKeywordMusic1} from  '../api/common.js'

	export default {
		name: "home",
		components: {
			HelloWorld
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
		display: flex;
		flex-flow: column;
		align-items: center;
		text-align: center;
		line-height: 1.2;
	}
</style>
