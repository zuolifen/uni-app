<template>
	<view class="goods_details">
			<view class="" @click="back">
				全部景点
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
				
			back(){
				uni.navigateBack()
			}
		},
			
		onLoad(options){
			let id=options.id;
		}
	}
</script>

<style>
	.goods_details{
		margin-top: 30px;
	}
</style>
