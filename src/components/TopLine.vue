<template>
  <div class="line-wrap">
      <div class="line-container">
          <div v-for="(item,index) in navs" :key="index" class="label" :class="{'active':index === activeLabel }" @click="clickHandler(index,item[1])">
              {{item[0]}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    // props:['msg'],
    props:{
        //限定---传值类型,默认值,必须
        navs:{
            type:Array,
            // default:[],
            // required:true 
        }
    },
    data() {
        return {
            activeLabel:0
        }
    },
    mounted(){
        // console.log(this.navs)
    },
    methods: {
        clickHandler(index,url) {
            this.activeLabel = index;
            console.log(url);
            this.$router.push(`${url}`)
        }
    },
}
</script>

<style lang='scss' scoped>
.line-wrap {
    background-color: rgb(194, 12, 12);

    .line-container {
        width: 1100px;
        padding: 5px 0 5px 236px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .label {
            font-size: 12px;
            border-radius: 6px;
            padding: 3px 11px;
            margin-right: 25px;
            color: white;
            cursor: pointer;
        }
        
        .label:hover {
            background-color: rgb(155, 9, 9);
        }
        .active {
            background-color: rgb(155, 9, 9);
        }

    }
}
</style>