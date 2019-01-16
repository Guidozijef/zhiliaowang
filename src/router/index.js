import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import GoodsInfo from '../components/Goods/GoodsInfo.vue';
import Search from '../components/Search/Search.vue';
import Login from '../components/Login/Login.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{ path: '/', redirect: '/home' }, // 定义首页的链接
		{ path: '/home', name: 'Home', component: Home },
		{ path: '/itgoodsinfo/:id', name: 'itgoodsinfo', component: GoodsInfo },
		{ path: '/search/:id', component: Search, name: 'search' },
		{ path: '/List/:id', component: Search },
		{ path: '/login/', component: Login }
	]
});
