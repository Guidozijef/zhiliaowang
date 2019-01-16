// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// 导入axios
import axios from 'axios';
Vue.prototype.$http = axios;

// 导入Vue-Blu组件
import VueBlu from 'vue-blu';
import 'vue-blu/dist/css/vue-blu.min.css';
Vue.use(VueBlu);

// 导入element组件
import { Carousel, CarouselItem, Icon } from 'element-ui';
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Icon.name, Icon);

import './assets/defind.scss'; // 自定义去掉body的margin

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App, Carousel },
	template: '<App/>'
});
