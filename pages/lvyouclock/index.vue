<template>
	<view class="lvyouclock">
			<view @click="back">打卡成功</view>
			<view class="">
				打卡成功
			</view>
			<view class="">
				查看我的打卡
				
			</view>
			<view class="" >
				返回首页
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
		}
	}
</script>

<style>
	.lvyouclock{
		margin-top: 30px;
	}
</style>
