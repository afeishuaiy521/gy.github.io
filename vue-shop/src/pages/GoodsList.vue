<template>
    <div class="hello">
      <nav-header></nav-header>
      <nav-beader></nav-beader>
      <div class="accessory-result-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby"@click.stop="showFilterPop">筛选</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter" id="filter"v-bind:class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>价格区间:</dt>
                <dd><a href="javascript:void(0)"@click="setPriceFilter('all')" v-bind:class="{'cur':priceCheck == 'all'}">选择价格</a></dd>
                <dd v-for="(item,index) in priceFilter">
                  <a href="javascript:void(0)"@click="setPriceFilter(index)"v-bind:class="{'cur':priceCheck == index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodslist">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    <nav-footer></nav-footer>
    </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/goods-list.css'


  import NavHeader from './../components/Nav-header'
  import NavFooter from './../components/Footer'
  import NavBeader from './../components/NavBeader'
  import axios from 'axios'
    export default {
        data () {
            return {
                goodslist:[],
                priceCheck:"all",
                filterBy:false,
                overLayFlag:false,
                priceFilter:[
                {
                  startPrice:'0.00',
                  endPrice:'100.00'
                },
                {
                  startPrice:'100.00',
                  endPrice:'500.00'
                },
                {
                  startPrice:'500.00',
                  endPrice:'1000.00'
                },
                {
                  startPrice:'1000.00',
                  endPrice:'2000.00'
                },
                {
                  startPrice:'2000.00',
                  endPrice:'3000.00'
                },
                {
                  startPrice:'3000.00',
                  endPrice:'6000.00'
                }
              ],
            }
        },
        mounted(){
          this.getGoodsList();
        },
        components:{
          NavHeader,
          NavFooter,
          NavBeader
        },
        methods:{
              getGoodsList(){
                  axios.get("/goods").then((result)=>{
                      var res = result.data
                      this.goodslist = res.result.list
                  })
              },
              setPriceFilter(index){
                  this.priceCheck = index
              },
              showFilterPop(){
                this.filterBy = true
                this.overLayFlag = true
              },
              closePop(){
                this.filterBy = false
                this.overLayFlag = false
              }
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
