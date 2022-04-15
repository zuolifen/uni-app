<template>
	<view>
		<view class="productList" :style="colorStyle">
			<view class='index-wrapper acea-row row-between-wrapper' >
				<view class='title acea-row row-between-wrapper'>
					<view class='text'>
						<view class='name line1'>
							<text class="iconfont icon-jingpintuijian1"></text>
							精品路线推荐
						</view>
						<view class='line1 txt-btn'>全新路线,限时折扣</view>
					</view>
					<view class='more' @click="gopage(titleInfo[2].val)">
						查看更多
						<text class='iconfont icon-jiantou'></text>
					</view>
				</view>
				<view class="item-box">
					<view class='item' v-for="(item,index) in bastList" :key="index">
						<view class='pictrue'  @click="goDetail(item.id)">
							<image :src='item.image'></image>
						</view>
						<view>
							<view class='text'  @click="goDetail(item.id)">
								<view class='name line1'>{{item.lvyou_name}}</view>
								<view class='describe'>{{item.lvyou_info}} </view>
							</view>
							<view class="clock-in">
								<view>
									<text>打卡人数:</text>
									<text class="clock-number">{{item.clock_people}}</text>
								</view>
								<view @click="handleLvyouclock(item.id)">
									{{item.is_clock?"已打卡":"立即打卡"}}
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
			<!-- <block v-if="isIframe && !bastList.length">
				<view class='index-wrapper' v-if="isIframe && !fastList.length">
					<view class='title acea-row row-between-wrapper'>
						<view class='text'>
							<view class='name line1'>
								<text class="iconfont icon-jingpintuijian1"></text>
								{{titleInfo[0].val}}
							</view>
							<view class='line1 txt-btn'>{{titleInfo[1].val}}</view>
						</view>
						<navigator class='more' open-type="switchTab" :url="titleInfo[2].val">更多<text
								class='iconfont icon-jiantou'></text></navigator>
					</view>
					<view class='scroll-product'>
						<view class="empty-img">精品推荐，暂无数据</view>
					</view>
				</view>
			</block> -->
		</view>
	</view>
</template>

<script>
	
	let app = getApp()
	import {
		mapState
	} from 'vuex'
	import {
		goShopDetail,
		goPage
	} from '@/libs/order.js'
	import {
		getHomeProducts
	} from '@/api/store.js';
	import {
		handleLvyouclock,getLvyouDetail
	} from "@/api/traveApi.js";
	import goodLists from '@/components/goodList/index.vue'
	import colors from "@/mixins/color";
	export default {
		name: 'goodList',
		props: {
			dataConfig: {
				type: Array,
			}
		},
		mixins: [colors],
		components: {
			goodLists
		},
		created() {

		},
		mounted() {
		},
		watch: {
			dataConfig: {
				immediate: true,
				handler(nVal, oVal) {
					if (nVal) {
						this.bastList = nVal;
					}
				}
			}
		},
		data() {
			return {
				bastList: [],
			}
		},
		methods: {
			// 产品列表
			productslist: function() {
				let that = this;
				let data = {};
				if (that.selectType) {
					data = {
						page: that.page,
						limit: that.limit,
						type: that.type,
						ids: that.ids,
						selectType: that.selectType
					}
				} else {
					data = {
						page: that.page,
						limit: that.numConfig <= that.limit ? that.numConfig : that.limit,
						type: that.type,
						newsOrder: that.newsOrder,
						salesOrder: that.salesOrder,
						selectId: that.selectId,
						selectType: that.selectType
					}
				}
				getHomeProducts(data).then(res => {
					that.bastList = res.data.list;
				}).catch(err => {
					that.$util.Tips({
						title: err
					});
				});
			},
			gopage(url) {
				uni.navigateTo({
					url: url
				})
			},
			handleLvyouclock(id){
				
				handleLvyouclock(id).then(res=>{
					if(res.status === 200){
						uni.navigateTo({
							url: `/pages/lvyouclock/index`
						})
					}
					
				})
			},
			goDetail(id) {
				
					getLvyouDetail(id).then(res => {
						uni.navigateTo({
							url: `/pages/goods_details/index?id=${id}`
						})
					})
				
			}
		}
	}
</script>

<style lang="scss">
	.productList {
		background-color: #fff;
		margin: 20rpx 30rpx;
		border-radius: $uni-border-radius-index;
	}

	.title {
		display: flex;
		margin: 0;
		width: 100%;
		margin: 0 20rpx;

		.text {
			display: flex;

			.name {
				font-size: $uni-index-title-font-size;
				font-weight: bold;
			}

			.txt-btn {
				display: flex;
				align-items: flex-end;
				margin-bottom: 8rpx;
				margin-left: 12rpx;
			}

		}
	}

	.productList .item {
		width: 100%;
		padding: 25rpx 0;
		background-color: #fff;
		border-radius: 10rpx;
		display: flex;
		// border:1rpx solid #eee;
		.clock-in{
			display: flex;
		}
	}

	.productList .item .pictrue {
		position: relative;
		width: 180rpx;
		height: 180rpx;
	}

	.productList .item .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.productList .item:nth-child(even) {
		border-top: 1rpx solid #EEEEEE;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.productList .item .text {
		width: 460rpx;
		padding: 0rpx 17rpx 0rpx 17rpx;
		font-size: 30rpx;
		color: #222;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.name {
			font-size: 32rpx;
			font-weight: 600;
			color: #333;
		}

		.type {
			display: flex;


		}
	}


	.productList .item .text .vip {
		font-size: 22rpx;
		color: var(--view-priceColor);
		margin-top: 7rpx;
		display: flex;
		align-items: center;
	}

	

	.empty-img {
		width: 690rpx;
		height: 300rpx;
		border-radius: 10rpx;
		margin: 26rpx auto 0 auto;
		background-color: #ccc;
		text-align: center;
		line-height: 300rpx;

		.iconfont {
			font-size: 50rpx;
		}
	}

	.font-color {
		color: var(--view-priceColor);
	}

	.item-box {
		margin: 0 auto;
	}
</style>
