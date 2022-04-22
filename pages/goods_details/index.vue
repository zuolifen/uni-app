<template>
	<view class="goods_details">
		<view class="details-header" @click="back" :style="{height:headH}">
			<image class="header-goback" src="data:image/png;base64,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" mode=""></image>
			<text>全部景点</text>
		</view>
		<view class="details-header-image">
			<!-- header轮播图 -->
			<swiper :autoplay="autoplay" indicator-dots="true" :circular="circular" :interval="interval" :duration="duration"
				indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff" :style="'height:'+ (imageH) +'rpx;'">
				<block v-for="(item,index) in bastBanner">
					<swiper-item :key='index'>
						<view style='width:100%;height:100%;' hover-class='none'>
							<image :src="item" class="slide-image" :style="'height:'+ (imageH) +'rpx;'" />
						</view>
					</swiper-item>
				</block>
			</swiper>
			<!-- header描述 -->
			<view class="header-info">
				<view class="header-info-title line1">
					{{headerTitle}}
				</view>
				<view class="header-info-des line1">
					{{headerDes}}
				</view>
				<view class="header-info-clock">
					<text>打卡人数:</text>
					<text class="number">{{clockPeople}}</text>
					<text>人</text>
				</view>
			</view>
		</view>
		<!-- 分割层 -->
		<view class="split-line"></view>
		<!--商品介绍 -->
		<view class="details-content">
			<view class="content-header">
				<text class="line"></text>
				<text>商品介绍</text>
				<text class="line"></text>
			</view>
			<view class="content"> 
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<!-- 显示是否打卡 -->
		<view class="details-clock">
			<view class="clock-wrap" @click="handleLvyouclock(lvyouDetails.id)">
				<view class="" v-if="is_clock">
					已打卡
				</view>
				<view class="" v-else="is_clock">
					立即打卡
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let statusBarHeight = uni.getSystemInfoSync().statusBarHeight * 2 + 'rpx';
	let headHeight = uni.getSystemInfoSync().statusBarHeight * 2 + 110 + 'rpx';
	import {
		getLvyouclock,getLvyouDetail
	} from "@/api/traveApi.js";
	export default {
		data() {
			return {
				indicatorDots: false,
				circular: true,
				autoplay: false,
				interval: 3000,
				duration: 500,
				bastBanner: [], //图片轮播数据
				name: this.$options.name,
				isIframe: false,
				isShow: true,
				imageH: 750,
				sysHeight: statusBarHeight,
				headH: headHeight,
				lvyouDetails:{},
				headerTitle:"",
				headerDes:"",
				clockPeople:null,
				content:"",
				is_clock:null
			}
		},
		methods: {
				
			back(){
				uni.navigateBack()
			},
			handleLvyouclock(id){
				getLvyouclock(id).then(res=>{
					
					if(res.status === 200){
						uni.navigateTo({
							url: `/pages/lvyouclock/index`
						})
					}
					
				})
			},
			
		},
			
		onLoad(options){
			let id=options.id;
			let that =this;
			getLvyouDetail(id).then((res)=>{
				that.lvyouDetails = res.data;
				that.bastBanner = res.data.slider_image;
				that.headerTitle=res.data.lvyou_name;
				that.headerDes=res.data.lvyou_info;
				that.clockPeople=res.data.clock_people;
				that.content=res.data.description;
				that.is_clock=res.data.is_clock;
			})
		}
	}
</script>

<style lang="scss">
	.goods_details{
		.details-header{
			margin-top: 48rpx;
			width:100%;
			background-image: url(../../static/images/clockHeader.png);
			background-size: 100% 100;
			font-size: 34rpx;
			display: flex;
			align-items: center;
			padding: 20rpx;
			.header-goback{
				width: 26rpx;
				height: 43rpx;
			}
		}
		.details-header-image{
			.slide-image{
				object-fit:contain;
			}
				
			.header-info{
				padding: 30rpx 30rpx 70rpx;
				.header-info-title{
					font-size: 36rpx;
					font-weight: 600;
					color: #333;
					margin-bottom: 20rpx;
				}
					
				.header-info-clock{
					margin-top: 26rpx;
					font-size: 40rpx;
					color: #EC1515;
					font-weight: 600;
					.number{
						font-size: 46rpx;
					}
					
				}
			}
		}
		.split-line{
			width: 100%;
			height: 18rpx;
			background-color: #ddd;
		}
		// 商品介绍
		.details-content{
			
			.content-header{
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #333333;
				font-size: 30rpx;
				font-weight: 600;
				.line{
					height: 1rpx;
					width: 46rpx;
					background-color: #333333;
					margin: 0 14rpx;
				}
			}
		}
		//是否打卡
		
		.details-clock{
			width: 100%;
			display: flex;
			justify-content: center;
			.clock-wrap{
				width: 90%;
				height: 88rpx;
				background-image: url(../../static/images/clockBg.png);
				background-size: 100% 100%;
				color: #fff;
				font-size: 36rpx;
				margin: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			
		}
	}
</style>
