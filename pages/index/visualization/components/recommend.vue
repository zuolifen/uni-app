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
					<view class='item' v-for="(item,index) in bastList" :key="index" @click="goDetail(item)">
						<view class='pictrue'>
							<image :src='item.image'></image>
						</view>
						<view>
							<view class='text'>
								<view class='name line1'>{{item.store_name}}</view>
								<view class='describe'>景点描述 </view>
							</view>
							<view class="clock-in">
								<view>
									<text>打卡人数:</text>
									<text class="clock-number">99</text>
								</view>
								<view>
									立即打卡
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
			<block v-if="isIframe && !bastList.length">
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
			</block>
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
	import goodLists from '@/components/goodList/index.vue'
	import colors from "@/mixins/color";
	export default {
		name: 'goodList',
		props: {
			dataConfig: {
				type: Object,
				default: () => {}
			}
		},
		mixins: [colors],
		components: {
			goodLists
		},
		created() {

		},
		mounted() {},
		watch: {
			dataConfig: {
				immediate: true,
				handler(nVal, oVal) {
					if (nVal) {
						this.isShow = nVal.isShow.val;
						this.selectType = nVal.tabConfig.tabVal;
						this.$set(this, 'selectId', nVal.selectConfig.activeValue || '');
						this.$set(this, 'type', nVal.selectSortConfig.activeValue);
						this.salesOrder = nVal.goodsSort.type == 1 ? 'desc' : '';
						this.newsOrder = nVal.goodsSort.type == 2 ? 'news' : '';
						this.ids = nVal.ids ? nVal.ids.join(',') : '';
						this.numConfig = nVal.numConfig.val;
						this.titleInfo = nVal.titleInfo.list;
						this.productslist();
					}
				}
			}
		},
		data() {
			return {
				circular: true,
				interval: 3000,
				duration: 500,
				bastList: [],
				name: this.$options.name,
				isShow: true,
				isIframe: app.globalData.isIframe,
				selectType: 0,
				selectId: '',
				salesOrder: '',
				newsOrder: '',
				ids: '',
				page: 1,
				limit: this.$config.LIMIT,
				type: '',
				numConfig: 0,
				titleInfo: []
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
			goDetail(item) {
				goPage().then(res => {
					goShopDetail(item, this.uid).then(res => {
						uni.navigateTo({
							url: `/pages/goods_details/index?id=${item.id}`
						})
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
