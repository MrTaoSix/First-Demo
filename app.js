// 实例化vue 对象

new Vue({
	el: "#vue-app",
	data: {
		age: 24,
		x: 0,
		y: 0
	},
	methods: {
		add: function(num) {
			this.age += num;
		},
		subtract: function(num) {
			this.age -= num;
		},
		updateXY: function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
	}
});


/**
 * el:element  需要获取的元素，一定是html中的根容器元素
 * data: 用于存储数据
 * methods: 用于存储各种方法
 * date-binding:给属性绑定对应的值
 */
