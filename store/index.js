import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		USERINFO:{}
    },
	mutations:{
		SET_USERINFO(state,{userInfo}){
			state.USERINFO=userInfo
		}
	}
    
})

export default store
