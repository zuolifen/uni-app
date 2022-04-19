<template>
	<view class="lvyouclock">
			<lvClockExchange :headerText="headerText"></lvClockExchange>
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
			}
		}
	}
</script>

<style lang="scss">
	
</style>
