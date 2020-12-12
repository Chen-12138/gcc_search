<template>
<div id="search" class="page">
    <div class="title">
        <div class="back" @click="handleBack">&lt;</div>
        <div class="searchInput">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" v-model="keyword" v-on:keyup.enter="search">
        </div>
    </div>
    <div class="match">
        <div class="match_item" v-for="item in resultList" :key="item.porcelainId">
            <img src="@/assets/images/bk.png" />
            <span v-hightlight:[item.name]="keyword">{{item.name}}</span>
        </div>
    </div>
    <div class="history">
        <div class="his_title">
            <div class="flower">
                <img src="@/assets/images/hua.png" alt="">
            </div>
            <span>历史记录</span>
        </div>
        <div class="his">
            <div class="his_item" :class="(index+1)%3===2?'middle':''" 
            v-for="(item,index) in searchHistory" :key="item"
            @click="tag(item)">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            keyword:'',
            resultList:[]
        }
    },
    computed:{
        ...mapGetters(['searchHistory'])
    },
    watch:{
        keyword(newVal, oldVal){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword || this.keyword.split(' ').join('').length == 0){
                this.resultList = []
                return
            }
            this.timer = setTimeout(() => {
                this.getKeywordSearch()
            }, 100);
        }
    },
    methods:{
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory',
            'clearSearchHistory'
        ]),
        // 返回上一页
        handleBack(){
            this.$router.back()
        },
        // 搜索
        search() {
            if (this.keyword.split(" ").join("").length !== 0) {
                this.$router.push({
                name: "搜索结果",
                query: {
                    keyword: this.keyword
                }
                });
                this.saveSearchHistory(this.keyword)
                this.keyword = "";
            }
        },
        // 点击标签搜索
        tag(keyword) {
            this.saveSearchHistory(keyword)
            this.$router.push({
                name: '搜索结果',
                query: {
                    keyword
                }
            })
        },
        // 分页获取手动输入关键词搜索的藏品信息
        async getKeywordSearch() {
            try {
                let res = await this.$http.Search.getKeywordSearch({
                    searchKeyword: this.keyword,
                    page: 1,
                    pageSize: 10
                })
                console.log(res)
                let List = res.data.data.porcelainList
                let match = this.keyword
                let reg = new RegExp(match,'g')
                for(var i = 0;i<List.length;i++){
                    if(!List[i].name.match(reg)){
                        List.splice(i,1)
                    }
                }
                this.resultList = List
                } catch(error) {
                    this.resultList = []
                    console.log(error)
                }
            },
    }
}
</script>

<style lang="scss" scoped>
#search{
    background-image: url("../../assets/images/background/home.jpg");
    height: 100vh;
    padding-left: 10px;
    padding-right: 10px;
    .title{
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid#F9E3D7;
        padding-left: 15px;
        .back{
            font-size: 24px;
            color:  #F9E3D7;
            margin-right: 16px;
        }
        .searchInput{
            position: relative;
            i{
                font-size: 16px;
                position: absolute;
                left: 10px;
                line-height: 27px;
                color: #F9E3D7;
            }
            input{
                padding-left: 28px;
                width: 278px;
                height: 27px;
                border-radius: 10px;
                border: 1px solid #F9E3D7;
                outline: none;
                background-color: transparent;
                font-size: 13px;
                color: #F9E3D7
            }
        }
    }
    .match{
        margin-bottom: 12px;
        .match_item{
            height: 38px;
            border-bottom: 1px solid #913427;
            display: flex;
            align-items: center;
            padding-left: 14px;
            img{
                width: 24px;
                height: 12px;
                margin-right: 10px;
            }
            span{
                font-size: 16px;
                color:  #edcab2;
            }
        }
    }
    .history{
        .his_title{
            margin-left: 12px;
            margin-bottom: 16px;
            display: flex;
            .flower{
                z-index: 1;
                display: flex;
                align-items: center;
                margin-right: 12px;
                img{
                    width: 18px;
                    height: 20px;
                }
            }
            span{
                font-size: 16px;
                color: #f9e3d7;
            }
        }
        .his{
            display: flex;
            flex-wrap: wrap;
            padding: 0 10px;
            .his_item{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 28px;
                border: 1px solid #F9E3D7;
                border-radius: 10px;
                margin-bottom: 18px;
                span{
                    width: 65px;
                    font-size: 12px;
                    color: #f9e3d7;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                &.middle{
                    margin: 0 46px;
                }
            }
        }
    }
}

</style>