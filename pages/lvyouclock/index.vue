<template>
	<view class="lvyouclock">
			<view class="lvyouclock-header">
				<view @click="back">
					<image></image>
				</view>
			</view>
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
		comments:{
		},
		data() {
			return {
				headerText:"打卡成功"
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.lvyouclock{
		.lvyouclock-header{
			height: 127rpx;
			width: 100%;
			background-image: url(../../static/images/clock/clockHeader.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		
	}
</style>
