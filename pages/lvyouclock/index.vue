<template>
	<view class="lvyouclock">
		<view class="hedar-wrap" >
			<view class="goback" @click="back">
				<image class="goback-img" src="/static/images/goBack.png" mode=""></image>
				<text class="">打卡成功</text>
			</view>
		</view>
		<view class="lvyouclock-content">
			打卡成功
		</view>
		<view class="lvyouclock-footer">
			<view class="go-orders go-item" @click="checkOeders">
				查看我的打卡
			</view>
			<view class="go-home go-item" @click="goHome">
				返回首页
			</view>
	
		</view>
	</view>
</template>

<script>
	
	import lvClockExchange from '@/components/lvClockExchange';
	let statusBarHeight = uni.getSystemInfoSync().statusBarHeight * 2 + 'rpx';
	let headHeight = uni.getSystemInfoSync().statusBarHeight * 2 + 110 + 'rpx';
	export default {
		comments:{
			lvClockExchange
		},
		data() {
			return {
				headerText:"打卡成功",
				sysHeight: statusBarHeight,
				headH: headHeight,
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			checkOeders(){
				uni.navigateTo({
					url: `/pages/myClock/index`
				})
			},	
			goHome(){
				uni.navigateTo({
					url: `/pages/index/index`
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.lvyouclock{
		width: 100%;
		height: 100%;
			
		.hedar-wrap{
			width: 100%;
			height: 128rpx;
			margin-top: 48rpx;
			background-image: ('~@/static/images/clockHeader.png');
			background-position: 100% 100%;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			.goback{
					
				padding:50rpx 30rpx 0;
				font-size: 34rpx;
				.goback-img{
					width: 18rpx;
					height: 32rpx;
				}
			}
		}
		.lvyouclock-content{
			margin-top: 100rpx;
			height: calc(100vh - 530rpx);
		}
		
		.lvyouclock-footer{
			width: 100%;
			position: relative;	
			bottom: 0;
			left: 0;
			.go-item{
				width: 90%;
				height: 88rpx;
				color: #fff;
				font-size: 36rpx;
				margin: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 60rpx;
			}	
			.go-orders{
				background-color: #53A087 ;
			}
				
			.go-home{
				color: #53A087;
				border: 4rpx solid #53A087;
				
			}
		}
	}
</style>
