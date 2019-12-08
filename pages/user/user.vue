<template>
	<view>
		<block v-if="!Object.keys(USERINFO).length">
			 <button open-type="getUserInfo" @getuserinfo="getuserinfo">用户授权</button>
		</block>
		<block v-else>
			<view>{{USERINFO.nickName}}</view>
			<image :src="USERINFO.avatarUrl" mode="aspectFill"></image>
		</block>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['USERINFO']),
		onLoad(){
			console.log('page load')
			console.log(getApp().globalData.author)
		},
		onShow(){
			console.log('page show')
		},
		methods:{
			...mapMutations(['SET_USERINFO']),
			getuserinfo(e){
				const {
					detail:{
						errMsg,
						userInfo
					},
				}=e
				console.log(e)
				if(errMsg==='getUserInfo:ok'){
					uni.showToast({
					    title: '授权成功',
					    duration: 2000
					})
					try {
						this.SET_USERINFO({
							userInfo
						})
					    uni.setStorageSync('userInfo', userInfo)
					} catch (e) {}
				}
			}
		}
	}
</script>
<style lang="scss">
	view{
		view{
			font-size: 50px;
		}
	}
</style>
