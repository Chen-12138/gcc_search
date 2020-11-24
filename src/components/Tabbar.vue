<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/home">
                <i class="iconfont icon-dianying"></i>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/classification">
                <i class="iconfont icon-dianying"></i>
                <p>分类</p>
            </router-link>
            <router-link tag="li" to="/search">
                <i class="iconfont icon-yingyuan"></i>
                <p>搜索</p>
            </router-link>
            <router-link tag="li" to="/my">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name : 'TabBar'
}
</script>

<style scoped>
#footer{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
#footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
#footer ul li{ flex:1; height:40px;}
#footer ul li.active{ color: #f03d37;}
#footer ul li.router-link-active{ color: #f03d37;}
#footer ul i{ font-size: 20px;}
#footer ul p{ font-size: 12px; line-height: 18px;}
</style>