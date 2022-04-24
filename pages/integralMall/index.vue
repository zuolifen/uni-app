<template>
	<view class="integral-mall copy-data" :style="{height:pageHeight}">
		<view class="top" :style="colorStyle">
			<view class="head-bg">
				<image class="header-bg-img" src="/static/images/header-all.png" mode=""></image>
			</view>
			<view class="sys-head">
				<view class="sys-bar" :style="{height:sysHeight}"></view>
				<view class="sys-title" :style="member_style==3?'color:#333':''" @tap="back">
					<image class="goback-img" src="/static/images/goBack.png" mode=""></image>
					积分商城</view>
			</view>
			<view class="head">
				<view class="user-card" :class="member_style==3?'unBg':''">
					<view class="user-info">
						<view class="user-img">
							<!-- 注释这个是加的bnt -->
							<!-- #ifdef H5 -->
							<button class="bntImg" v-if="userInfo.is_complete == 0 && isWeixin"
								@click="getWechatuserinfo">
								<image class="avatar" src='/static/images/f.png'></image>
								<view class="avatarName">获取头像</view>
							</button>
							<!-- #endif -->
							<!-- #ifdef MP -->
							<button class="bntImg" v-if="userInfo.is_complete == 0" @tap="getUserProfile">
								<image class="avatar" src='/static/images/f.png'></image>
								<view class="avatarName">获取头像</view>
							</button>
							<!-- #endif -->
							<!-- #ifndef APP-PLUS -->
							<view v-else class="avatar-box" :class="{on:userInfo.is_money_level}">
								<image class="avatar" :src='userInfo.avatar' v-if="userInfo.avatar"
									@click="goEdit()">
								</image>
								<image v-else class="avatar" src="/static/images/f.png" mode="" @click="goEdit()">
								</image>
								<view class="headwear" v-if="userInfo.is_money_level && userInfo.svip_open">
									<image src="/static/images/headwear.png"></image>
								</view>
							</view>
							<!-- #endif -->
							<!-- #ifdef APP-PLUS -->
							<view class="avatar-box" :class="{on:userInfo.is_money_level}">
								<image class="avatar" :src='userInfo.avatar' v-if="userInfo.avatar"
									@click="goEdit()">
								</image>
								<image v-else class="avatar" src="/static/images/f.png" mode="" @click="goEdit()">
								</image>
								<view class="headwear" v-if="userInfo.is_money_level && userInfo.svip_open">
									<image src="/static/images/headwear.png"></image>
								</view>
							</view>
							<!-- #endif -->
						</view>
						<view class="info">
							<!-- #ifdef MP -->
							<view class="name" v-if="!userInfo.uid" @click="openAuto"
								style="height: 100%; display: flex; align-items: center;">
								请点击授权
							</view>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<view class="name" v-if="!userInfo.uid && isWeixin" @click="openAuto"
								style="height: 100%; display: flex; align-items: center;">
								请点击授权
							</view>
							<!-- #endif -->
							<view class="name" v-if="userInfo.uid">
								{{userInfo.nickname}}
								<image class="live" :src="userInfo.vip_icon" v-if="userInfo.vip_icon"></image>
								<view class="vip" v-if="userInfo.is_money_level> 0 && userInfo.svip_open">
									<image src="/static/images/svip.png"></image>
								</view>
							</view>
							<view class="num" v-if="userInfo.phone" @click="goEdit()">
								<view class="num-txt">ID：{{userInfo.uid}}</view>
								<!-- <view class="icon">
									<image src="/static/images/edit.png" mode=""></image>
								</view> -->
							</view>
							<view class="phone" v-if="!userInfo.phone && isLogin" @tap="bindPhone">绑定手机号</view>
						</view>
						
						

					</view>
				</view>
				
				
			</view>
		</view>
		<!-- 积分商城列表部分 -->
		<view class="integral-mall-content">
			
		</view>
		
	</view>
</template>
<script>
	let sysHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	import {
		getMenuList,
		getUserInfo,
		setVisit,
		updateUserInfo
	} from '@/api/user.js';
	import {
		wechatAuthV2,
		getNavigation,
		silenceAuth
	} from '@/api/public.js'
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapState,
		mapGetters
	} from "vuex";
	// #ifdef H5
	import Auth from '@/libs/wechat';
	// #endif
	const app = getApp();
	import dayjs from '@/plugin/dayjs/dayjs.min.js';
	import Routine from '@/libs/routine';
	import colors from '@/mixins/color';
	import tabBar from "@/pages/index/visualization/components/tabBar.vue";
	import {
		getCustomer
	} from '@/utils/index.js'
	export default {
		components: {
			tabBar,
		},
		// computed: mapGetters(['isLogin','cartNum']),
		computed: {
			...mapGetters({
				cartNum: 'cartNum',
				isLogin: 'isLogin'
			})
		},
		filters: {
			coundTime(val) {
				var setTime = val * 1000
				var nowTime = new Date()
				var rest = setTime - nowTime.getTime()
				var day = parseInt(rest / (60 * 60 * 24 * 1000))
				// var hour = parseInt(rest/(60*60*1000)%24) //小时
				return day + '天'
			},
			dateFormat: function(value) {
				return dayjs(value * 1000).format('YYYY-MM-DD');
			}
		},
		mixins: [colors],
		data() {
			return {
				storeMenu: [], // 商家管理
			
				
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				userInfo: {},
				MyMenus: [],
				sysHeight: sysHeight,
				mpHeight: 0,
				showStatus: 1,
				newData: {},
				activeRouter: '',
				// #ifdef H5 || MP
				pageHeight: '100%',
				routineContact: 0,
				// #endif
				// #ifdef APP-PLUS
				pageHeight: app.globalData.windowHeight,
				// #endif
				// #ifdef H5
				isWeixin: Auth.isWeixin(),
				//#endif
				footerSee: false,
				member_style: 1,
				my_banner_status: 1,
				is_diy: uni.getStorageSync('is_diy'),
			}
		},
		onLoad(option) {
			// uni.hideTabBar()
			let that = this;
			if (this.is_diy) {
				if (uni.getStorageSync('FOOTER_BAR')) {
					uni.hideTabBar()
				}
				getNavigation().then(res => {
					this.newData = res.data
					if (this.newData.status && this.newData.status.status) {
						uni.hideTabBar()
					} else {
						uni.showTabBar()
					}
				})
			}

			// #ifdef MP
			// 小程序静默授权
			if (!this.$store.getters.isLogin) {
				Routine.getCode()
					.then(code => {
						Routine.silenceAuth(code).then(res => {
							this.onLoadFun();
						})
					})
					.catch(res => {
						uni.hideLoading();
					});
			}
			// #endif

			// #ifdef H5 || APP-PLUS
			if (that.isLogin == false) {
				toLogin()
			}
			//获取用户信息回来后授权
			let cacheCode = this.$Cache.get('snsapi_userinfo_code');
			let res1 = cacheCode ? option.code != cacheCode : true;
			if (this.isWeixin && option.code && res1 && option.scope === 'snsapi_userinfo') {
				this.$Cache.set('snsapi_userinfo_code', option.code);
				Auth.auth(option.code).then(res => {
					this.getUserInfo();
				}).catch(err => {})
			}
			// #endif
			// #ifdef APP-PLUS
			that.$set(that, 'pageHeight', app.globalData.windowHeight);
			// #endif

			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由
			this.activeRouter = '/' + curRoute

		},
		onReady() {
			let self = this
			// #ifdef MP
			let info = uni.createSelectorQuery().select(".sys-head");
			info.boundingClientRect(function(data) { //data - 各种参数
				self.mpHeight = data.height
			}).exec()
			// #endif
		},
		onShow: function() {
			let that = this;
			// #ifdef APP-PLUS
			uni.getSystemInfo({
				success: function(res) {
					that.pageHeight = res.windowHeight + 'px'
				}
			});
			// #endif
			if (that.isLogin) {
				this.getUserInfo();
				this.getMyMenus();
				this.setVisit();
			};
		},
		onPullDownRefresh() {
			this.onLoadFun();
		},
		methods: {
			getWechatuserinfo() {
				//#ifdef H5
				Auth.isWeixin() && Auth.toAuth('snsapi_userinfo', '/pages/user/index');
				//#endif
			},
			getRoutineUserInfo(e) {
				updateUserInfo({
					userInfo: e.detail.userInfo
				}).then(res => {
					this.getUserInfo();
					return this.$util.Tips('更新用户信息成功');
				}).catch(res => {

				})
			},
			// 记录会员访问
			setVisit() {
				setVisit({
					url: '/pages/user/index'
				}).then(res => {})
			},
			// 打开授权
			openAuto() {
				toLogin();
			},
			// 授权回调
			onLoadFun() {
				this.getUserInfo();
				this.getMyMenus();
				this.setVisit();
			},
			Setting: function() {
				uni.openSetting({
					success: function(res) {}
				});
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			// 绑定手机
			bindPhone() {
				uni.navigateTo({
					url: '/pages/users/user_phone/index'
				})
			},
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data
					that.$store.commit("SETUID", res.data.uid);
					uni.stopPullDownRefresh();
				});
			},
			//小程序授权api替换 getUserInfo
			getUserProfile() {
				uni.showLoading({
					title: '获取中'
				});
				let self = this;
				Routine.getUserProfile()
					.then(res => {
						Routine.getCode()
							.then(code => {
								let userInfo = res.userInfo;
								userInfo.code = code;
								userInfo.spread_spid = app.globalData.spid; //获取推广人ID
								userInfo.spread_code = app.globalData.code; //获取推广人分享二维码ID
								Routine.authUserInfo(userInfo)
									.then(res => {
										if (res.data.key !== undefined && res.data.key) {
											uni.hideLoading();
											self.authKey = res.data.key;
											self.isPhoneBox = true;
										} else {
											uni.hideLoading();
											let time = res.data.expires_time - self.$Cache.time();
											self.$store.commit('LOGIN', {
												token: res.data.token,
												time: time
											});
											this.getUserInfo()
										}
									})
									.catch(res => {
										uni.hideLoading();
										uni.showToast({
											title: res.msg,
											icon: 'none',
											duration: 2000
										});
									});
							})
							.catch(res => {
								uni.hideLoading();
							});
					})
					.catch(res => {
						uni.hideLoading();
					});
			},
		
			getMyMenus: function() {
				let that = this;
				// if (this.MyMenus.length) return;
				getMenuList().then(res => {
					let storeMenu = []
					let myMenu = []
					res.data.routine_my_menus.forEach((el, index, arr) => {
						if (el.url == '/pages/admin/order/index' || el.url ==
							'/pages/admin/order_cancellation/index' || el.name ==
							'客服接待') {
							storeMenu.push(el)
						} else {
							myMenu.push(el)
						}
					})
					this.member_style = Number(res.data.diy_data.value)
					this.my_banner_status = res.data.diy_data.my_banner_status
					let order01 = {
						dfk: 'icon-daifukuan',
						dfh: 'icon-daifahuo',
						dsh: 'icon-daishouhuo',
						dpj: 'icon-daipingjia',
						sh: 'icon-a-shouhoutuikuan'
					}
					let order02 = {
						dfk: 'icon-daifukuan-lan',
						dfh: 'icon-daifahuo-lan',
						dsh: 'icon-daishouhuo-lan',
						dpj: 'icon-daipingjia-lan',
						sh: 'icon-shouhou-tuikuan-lan'
					}
					let order03 = {
						dfk: 'icon-daifukuan-ju',
						dfh: 'icon-daifahuo-ju',
						dsh: 'icon-daishouhuo-ju',
						dpj: 'icon-daipingjia-ju',
						sh: 'icon-shouhou-tuikuan-ju'
					}
					let order04 = {
						dfk: 'icon-daifukuan-fen',
						dfh: 'icon-daifahuo-fen',
						dsh: 'icon-daishouhuo-fen',
						dpj: 'icon-daipingjia-fen',
						sh: 'icon-a-shouhoutuikuan-fen'
					}
					let order05 = {
						dfk: 'icon-daifukuan-lv',
						dfh: 'icon-daifahuo-lv',
						dsh: 'icon-daishouhuo-lv',
						dpj: 'icon-daipingjia-lv',
						sh: 'icon-shouhou-tuikuan-lv'
					}
					switch (res.data.diy_data.order_status) {
						case 1:
							this.switchTab(order01)
							break
						case 2:
							this.switchTab(order02)
							break
						case 3:
							this.switchTab(order03)
							break
						case 4:
							this.switchTab(order04)
							break
						case 5:
							this.switchTab(order05)
							break
					}
					that.$set(that, 'MyMenus', myMenu);
					that.$set(that, 'storeMenu', storeMenu);
					this.routineContact = Number(res.data.routine_contact_type)
				});
			},
			// 编辑页面
			goEdit() {
				if (this.isLogin == false) {
					toLogin();
				} else {
					uni.navigateTo({
						url: '/pages/users/user_info/index'
					})
				}

			},
			
			
			back(){
				uni.navigateBack()
			},
			
		}
	}
</script>

<style lang="scss">
	page,
	body {
		height: 100%;
		background-color: #fff;
	}
		.user-info {
			height: 100%;
			padding: 0 30rpx;
			.info {
				.name {
					color: #333333 !important;
					font-weight: 600;
				}

				.num {
					color: #333 !important;

					.num-txt {
						height: 38rpx;
						background-color: rgba(51, 51, 51, 0.13);
						padding: 0 12rpx;
						border-radius: 16rpx;
					}
				}
			}
		}

		

	


	.integral-mall {
		display: flex;
		flex-direction: column;
		height: 100%;
			
		.top{
			height: 380rpx;
			width: 100%;
			// background-image: url("~@/static/images/header-all.png");
			background-size: 100% 100%;
			// background-color: #70E038;
			// background-position: left bottom;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
				
			.head-bg{
				height: 380rpx;
				width: 100%;
				position: absolute;
				left: 0;
				top: 0;
					
				.header-bg-img{
					height: 100%;
				}
			}
			.sys-head {
				position: relative;
				width: 100%;

				

				.sys-title {
						z-index: 10;
						position: relative;
						height: 43px;
						line-height: 43px;
						font-size: 36rpx;
						color: #333333;
						padding-left: 30rpx;
						.goback-img{
							width: 18rpx;
							height: 32rpx;
						}
					}
		}
			}
		.head {
			
			
			.user-card {
				position: relative;
				width: 90%;
				height: 166rpx;
				margin: 0 auto;
				background-color:#ffffff;
				border-radius: 10rpx;
				.user-info {
					z-index: 20;
					position: relative;
					display: flex;
					margin-top: 90rpx;
					.headwear {
						position: absolute;
						right: -4rpx;
						top: -14rpx;
						width: 44rpx;
						height: 44rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.live {
						width: 28rpx;
						height: 28rpx;
						margin-left: 20rpx;
					}

					.bntImg {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						text-align: center;
						line-height: 120rpx;
						background-color: unset;
						position: relative;

						.avatarName {
							font-size: 16rpx;
							color: #fff;
							text-align: center;
							background-color: rgba(0, 0, 0, 0.6);
							height: 37rpx;
							line-height: 37rpx;
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
						}
					}
					.user-img{
						display: flex;
						align-items: center;
						.avatar-box {
							position: relative;
							display: flex;
							align-items: center;
							justify-content: center;
							width: 110rpx;
							height: 110rpx;
							border-radius: 50%;
							border:2rpx solid #518566;
							&.on {
								.avatar {
									border: 2px solid #FFAC65;
									border-radius: 50%;
								}
							}
						}
					}	
					.avatar {
						position: relative;
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;

					}

					.info {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						margin-left: 20rpx;
						padding: 15rpx 0;

						.name {
							display: flex;
							align-items: center;
							color: #fff;
							font-size: 31rpx;

							.vip {
								margin-left: 10rpx;

								image {
									width: 78rpx;
									height: 30rpx;
									display: block;
								}
							}
						}

						.num {
							display: flex;
							align-items: center;
							font-size: 26rpx;
							color: rgba(255, 255, 255, 0.6);

							image {
								width: 22rpx;
								height: 23rpx;
								margin-left: 20rpx;
							}
						}
					}
				}

				
			}

			
		}



		.phone {
			color: #fff;
			background-color: #CCC;
			border-radius: 15px;
			width: max-content;
			padding: 0 10px;
		}

		// 个人中心列表
			
		

		
	}

	

	
	.integral-mall {
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
