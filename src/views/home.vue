<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
	</div>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld";

	export default {
		name: "home",
		components: {
			HelloWorld
		},
		data() {
			return {
				
			};
		},
		computed: {
			
		},
		mounted() {
		},
		methods: {
		
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
