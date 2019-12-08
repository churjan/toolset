<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		globalData: {  
			author: 'Churjan'  
		},  
		methods:{
			...mapMutations(['SET_USERINFO'])
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.getSetting({
			   success:({authSetting})=>{
			      if(authSetting['scope.userInfo']){
					  console.log('用户授权过')
					  try {
					      const userInfo = uni.getStorageSync('userInfo') || {}
					      this.SET_USERINFO({userInfo})
					  } catch (e) {}
				  }
			   }
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
		
	}
</script>

<style>
	/*每个页面公共css */
</style>
