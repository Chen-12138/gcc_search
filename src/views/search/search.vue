<template>
<div id="search" class="page">
    <div class="title">
        <div class="back" @click="handleBack">&lt;</div>
        <div class="searchInput">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" v-model="keyword" v-on:keyup.enter="search" placeholder="请输入关键词搜索">
        </div>
    </div>
    <div class="match">
        <div class="match_item" v-for="item in resultList" :key="item.porcelainId"
        @click="handleToDetail(item.porcelainId,item.name)"
        >
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
        // 跳转详情页
        handleToDetail(id,name) {
            this.saveSearchHistory(name)
            this.$router.push({
                name: '详情页',
                query: {
                    porcelainId : id
                }
            })
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
                // for(var i = 0;i<List.length;i++){
                //     if(!List[i].name.match(reg)){
                //         List.splice(i,1)
                //     }
                // }
                List = List.filter(item=>item.name.match(reg))
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
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    .title{
        display: flex;
        align-items: center;
        padding-bottom: 0.625rem;
        border-bottom: 0.0625rem solid#F9E3D7;
        padding-left: 0.9375rem;
        .back{
            font-size: 1.5rem;
            color:  #F9E3D7;
            margin-right: 1rem;
        }
        .searchInput{
            position: relative;
            i{
                font-size: 1rem;
                position: absolute;
                left: 0.625rem;
                line-height: 1.6875rem;
                color: #F9E3D7;
            }
            input{
                padding-left: 1.75rem;
                width: 17.375rem;
                height: 1.6875rem;
                border-radius: 0.625rem;
                border: 0.0625rem solid #F9E3D7;
                outline: none;
                background-color: transparent;
                font-size: 0.8125rem;
                color: #F9E3D7
            }
        }
    }
    .match{
        margin-bottom: 0.75rem;
        .match_item{
            height: 2.375rem;
            border-bottom: 0.0625rem solid #913427;
            display: flex;
            align-items: center;
            padding-left: 0.875rem;
            img{
                width: 1.5rem;
                height: 0.75rem;
                margin-right: 0.625rem;
            }
            span{
                font-size: 1rem;
                color:  #edcab2;
            }
        }
    }
    .history{
        .his_title{
            margin-left: 0.75rem;
            margin-bottom: 1rem;
            display: flex;
            .flower{
                z-index: 1;
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
                img{
                    width: 1.125rem;
                    height: 1.25rem;
                }
            }
            span{
                font-size: 1rem;
                color: #f9e3d7;
            }
        }
        .his{
            display: flex;
            flex-wrap: wrap;
            padding: 0 0.625rem;
            .his_item{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5rem;
                height: 1.75rem;
                border: 0.0625rem solid #F9E3D7;
                border-radius: 0.625rem;
                margin-bottom: 1.125rem;
                span{
                    width: 4.0625rem;
                    font-size: 0.75rem;
                    color: #f9e3d7;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                &.middle{
                    margin: 0 2.875rem;
                }
            }
        }
    }
}
// placeholder的样式
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:   #F9E3D7 !important;

}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #F9E3D7 !important;

}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:   #F9E3D7 !important;

}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:  #F9E3D7 !important;

}
::-ms-input-placeholder { /* Microsoft Edge */
    color:   #F9E3D7 !important;

}
</style>