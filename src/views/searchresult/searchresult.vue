<template>
  <div id="searchresult" class="page" @click="cancelFloat">
      <div class="title">
          <div class="searchInput">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" v-model="keyword"
                v-on:keyup.enter="getByInput">
          </div>
          <div class="tags">
              <div class="tag_item" v-for="item in types" :key="item.value"
                :class="type === item.value ? 'active' : ''"
                @click="changeType(item.value)"
               >
                  {{item.type}}
                  <div class="icon" v-if="(type === item.value)">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="float" v-if="(type === item.value) && open==true">
                      <ul>
                        <li v-for="v in item.recommend" :key="v"
                        @click="changeKeyword(v, item.value)"
                        >
                            <a href="javascript:void(0)">{{v}}</a>
                        </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="result">
          <div class="result_item" v-for="item in resultList" :key="item.porcelainId">
              <div class="main">
                <div class="photo" @click="handleToDetail(item.porcelainId)">
                    <van-image :src="item.photos[0]" class="img">
                        <template v-slot:loading style=font-size:1.5rem;>
                            <!-- <van-loading type="spinner" size="20" /> -->
                            加载中...
                        </template>
                        <template v-slot:error>加载失败</template>
                    </van-image>
                    <!-- <img :src="item.photos[0]"> -->
                </div>
                <div class="text">
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="desc">
                        {{item.poemDescription}}
                    </div>
                </div>
              </div>
            <div class="flower">
                <img src="@/assets/images/hua.png" alt="">
            </div>
          </div>
      </div>
      <Pagination :total="total" :display="pageSize" :current="page" @pagechange="pagechange" :pagegroup=3></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
    components:{
        Pagination
    },
    data(){
        return{
            open:true,
            // 当前分类
            type: 1,
            // 搜索分类
            types: [
                {
                    type: '全部',
                    recommend:[

                    ],
                    value:1
                },
                {
                    type: '名称',
                    recommend:[
                        "壶",
                        "盘",
                        "碟",
                        "碗",
                        "灯",
                        "灯罩",
                        "筒",
                        "立像"
                    ],
                    value: 2
                },
                {
                    type: '器型',
                    recommend:[
                        "壶",
                        "盘",
                        "碟",
                        "碗",
                        "灯",
                        "灯罩",
                        "筒",
                        "立像"
                    ],
                    value: 3
                },
                {
                    type: '年代',
                    recommend:[
                        "乾隆",
                        "光绪",
                        "咸丰",
                        "道光",
                        "同治",
                        "嘉兴",
                        "民国",
                    ],
                    value: 4
                },
                {
                    type: '题材',
                    recommend:[
                        "人物",
                        "植物",
                        "花卉",
                        "动物"
                    ],
                    value: 5
                }
            ],
            // 关键字
            keyword: '',
            // 当前页
            page: 1,
            // 每页呈现数量
            pageSize: 4,
            // 搜索结果
            resultList: [],
            // 总数量
            total: 0
        }
    },
    computed:{
        flower(index) {
            return (index+1)!=4 ? 'true' : 'false'
        }
    },
    mounted(){
        let keyword = this.$route.query.keyword
        if (keyword) {
            this.keyword = keyword
        }
        this.getByInput()
     
    },
    methods:{
        cancelFloat(e){
            let el=e.target;
            if(el.className.indexOf('tag_item')!=-1)return;
            else{
              this.open=false;
            }
        },
        // 改变分类
        changeType(type) {
            this.open=true;
            this.type = type
            // this.getByClick()
        },
        // 点击推荐更改keyword
        changeKeyword(keyword, type) {
            this.keyword = keyword
            this.type = type
            this.getByClick()
        },
        // 页数切换时
        pagechange(value){
            this.page = value
            this.getKeywordSearch()
        },
        // 跳转详情页
        handleToDetail(id) {
            // 传对象测试
            // let obj = JSON.stringify(item)
            this.$router.push({
                name: '详情页',
                query: {
                    // 传对象测试
                    // detail: encodeURIComponent(obj)
                    porcelainId : id
                }
            })
        },
        // 通过手动输入搜索
        getByInput() {
            this.page = 1
            this.getKeywordSearch()
        },
        // 通过点击关键词搜索
        getByClick() {
            this.page = 1
            this.getTypeSearch()
        },
        // 分页获取手动输入关键词搜索的藏品信息
        async getKeywordSearch() {
            try {
                let res = await this.$http.Search.getKeywordSearch({
                    searchKeyword: this.keyword,
                    page: this.page,
                    pageSize: this.pageSize
                })
                console.log(res)
                this.resultList = res.data.data.porcelainList
                this.total = res.data.data.total
                // console.log(this.resultList)
                this.$router.push({
                    query: {
                        keyword: this.keyword
                        }
                    })
                } catch(error) {
                    this.resultList = []
                    console.log(error)
                }
            },
            // 分页获取关键词搜索的藏品信息
            async getTypeSearch() {
                this.loading = true
                try {
                    let res = await this.$http.Search.getKeywordSearch({
                        searchType: this.type,
                        searchKeyword: this.keyword,
                        page: this.page,
                        pageSize: this.pageSize
                    })
                    console.log(res)
                    this.resultList = res.data.data.porcelainList
                    this.total = res.data.data.total
                    this.$router.push({
                        query: {
                            keyword: this.keyword
                            }
                        })
                    // console.log(this.resultList)
                } catch(error) {
                    this.resultList = []
                    console.log(error)
                }
            },
    }
}
</script>

<style lang="scss" scoped>
#searchresult{
    background-image: url("../../assets/images/background/home.jpg");
    // height: 100vh;
    .title{
        display: flex;
        margin-left: 1.75rem;
        margin-right: 1.5625rem;
        margin-bottom: 0.625rem;
        padding-bottom: 0.375rem;
        border-bottom: 0.0625rem solid#F9E3D7;
        align-items: center;
        .searchInput{
            position: relative;
            text-align: left;
            display: flex;
            align-items: center;
            i{
                font-size: 0.625rem;
                position: absolute;
                // top: 0.2188rem;
                left: 0.3125rem;
                
                line-height: 1.6875rem;
                color: #F9E3D7;
            }
            input{
                padding-left: 1rem;
                width: 5.125rem;
                height: 0.9375rem;
                background: transparent;
                border-radius: 0.625rem;
                border: 0.0625rem solid #edcab2;
                font-size: 0.625rem;
                color:  #f9e3d7;
            }
        }
        .tags{
            display: flex;
            align-items: center;
            .tag_item{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 2.5rem;
                height: 0.9375rem;
                font-size: 0.625rem;
                border-radius: 0.625rem;
                border: 0.0625rem solid #edcab2;
                margin-left: 0.5rem;
                color: #f9e3d7;
                .icon{
                 color: #f9e3d7;
                 position: absolute;
                 left:50%;
                 top:100%;
                 transform: translate(-50%,-20%);
                }
                &.active{
                    width: 2.8125rem;
                    height: 1rem;
                    font-size: 0.75rem;
                    color: #4C3E2B;
                    background:  #edcab2;
                    z-index: 3;
                    .float{
                        opacity: 1;
                        visibility: visible;
                    }
                }
                .float{
                    position: absolute;
                    top: 1.3125rem;
                    width: 2.5rem;
                    // height: 6.125rem;
                    background: #edcab2;
                    font-size: 0.5625rem;
                    color: #4C3E2B;
                    border-radius: 0.375rem;
                    visibility: hidden;
                    li{
                        padding: 0.125rem 0;
                        height: 1.25rem;
                    }
                }
            }
        }
    }
    .result{
        .result_item{
            overflow: hidden;
            &:nth-last-child(1){
                .flower{
                    display: none;
                }
            }
            .main{
                margin: 0 auto;
                width: 20.5rem;
                display: flex;
                background: rgba(#a44344, 0.55);
                border-radius: 0.625rem;
                flex-direction: row;
                padding-bottom: 1.875rem;
                .photo{
                    margin-top: 0.3125rem;
                    margin-left: 0.4375rem;
                    width: 9.3125rem;
                    height: 10.5rem;
                    border: 0.0625rem solid#eec4b2;
                    overflow: hidden;
                    border-radius: 0.3125rem;
                    .img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .text{
                    text-align: left;
                    color: #f9e3d7;
                    margin-top: 1.125rem;
                    margin-left: 0.375rem;
                    width: 10rem;
                    .name{
                        text-align: left;
                        padding-left: 0.5rem;
                        font-size: 0.75rem;
                        margin-bottom: 0.9375rem;
                    }
                    .desc{
                        font-size: 0.625rem;
                    }
                }
            }

            .flower{
                z-index: 1;
                margin: 1.75rem 0;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.125rem;
                    height: 1.25rem;
                }
            }
        }
    }
}
</style>