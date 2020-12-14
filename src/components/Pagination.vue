<template>
  <nav>
	<ul class="pagination">
		<li class="prev" :class="{'disabled': (current==1)}" @click="setCurrent(current-1)">上一页</li>
		<li class="item" v-for="(p,index) in grouplist" :key="index" :class="{'active': (current==p.val)}" @click="setCurrent(p.val)"></li>
		<li class="next" :class="{'disabled': (current==page)}" @click="setCurrent(current+1)">下一页</li>
	</ul>
</nav>
</template>

<script>
export default {
    data() {
		return {
			current: this.currentPage,
		}
	},
	props: {
		// 数目总条数
		total: {
			type: Number,
			default: 0
		},
		// 每一页显示10条数据
		display: {
			type: Number,
			default: 10,
		},
		// 当前处于哪一页
		currentPage: {
			type: Number,
			default: 1,
		},
		// 分页数目
		// 默认可视为5页
		pagegroup: {
			type: Number,
			default: 3,
		}
	},
	mounted(){
		console.log(this.currentPage)
	},
	// 如何计算总页数
	// 总页数目是随着后台数据的变化而变化的所以需要计算属性，实时计算
	computed: {
		// 获取总页数
		page() {
			return Math.ceil(this.total / this.display);
		},
		// 获取页码
		grouplist() {
			// 总页数
			let len = this.page,
				// 距离中间那个数的偏移量
				count = Math.floor(this.pagegroup / 2),
				// 以当前页为中间数
				center = this.current,
				// 临时数组
				temp = [],
				// 返回的数组
				list = [];
			// 判断当总页数<=分页数的情况
			if(len <= this.pagegroup){
				while(len--){
					temp.push({
						txt: this.page-len,
						val: this.page-len
					})
				}

				return temp;
			}
			// 否则就是len>分页数目的情况
			while(len--){
				temp.push(this.page-len);
			}
			// 找出当前页在这个数据中位置
			let idx = temp.indexOf(center);
			// 判断这个位置与中间偏离的大小
			// 计算出中间值
			(idx < count) && (center = center + count - idx);
			(this.current > this.page - count) && (center = this.page - count)
			// 从当前位置减去偏移量再减去1就是数组索引，
			// 获取this.pagegroup长度数组
			temp = temp.splice(center - count - 1, this.pagegroup);

			do{
				// 拼接数据
				let t = temp.shift();
				list.push({
					txt: t,
					val: t
				})
			}while(temp.length)

	        return list;
		}
	},
	methods: {
		setCurrent(idx) {
			if (this.current != idx && idx > 0 && idx < this.page + 1) {
				// 判断当前页码不等于本身，和大于零，而且要小于总页数的时候，才触发
	          this.current = idx;
	          this.$emit('pagechange', this.current);
	        }
		}
	}
}
</script>

<style lang="scss" scoped>
.pagination{
	overflow: hidden;
    display: table;
    margin: 0 auto;
    display: flex;
    justify-content: center;
	align-items: center;
	margin-top: 1.25rem;
    margin-bottom: 1.875rem;
    /*width: 100%;*/
    .prev,.next{
        padding: 0.5rem 1.125rem;
        height: 1.5625rem;
        border-radius: 1.25rem;
        background: rgba( #edcab2, 0.37);
        font-size: 0.625rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #F9E3D7;
        line-height: 0.4688rem;
    }
    .prev{
        margin-right: 0.625rem;
    }
    .next{
        margin-left: 0.75rem;
    }
    .item{
        width: 1.25rem;
        height: 0.375rem;
        border-radius: 0.1875rem;
        background: #42210b;
        margin-left: 0.1875rem;
        &.active{
            background: #53ad9e;
        }
    }
    .active {
		background: rgb(25, 137, 250);
	}
}
</style>