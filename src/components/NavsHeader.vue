<template>
  <div class="navs-wrap">
      <i class="el-icon-service"></i>
      <slot></slot>
      <ul v-if="show === 'true'">
          <li>华语</li>
          <li>流行</li>
          <li>摇滚</li>
          <li>民谣</li>
          <li>电子</li>
      </ul>
      <span class="more">更多+</span>
  </div>
</template>

<script>
export default {
    props:{
        show:{
            type:String,
            default:'false'
        }
    }
}
</script>

<style lang="scss" scoped>
$red:rgb(193, 13, 12);

.navs-wrap {
    padding-top: 20px;
    padding-bottom: 2px;
    height: 50px;
    border-bottom: 2px solid $red;
    display: flex;
    align-items: center;

    i {
        color: $red;
        font-weight: bold;
        margin-right: 6px;
    }

    .words {
        font-size: 20px;
        margin-right: 25px;
    }

    ul {
        display: flex;
        align-items: center;

        li {
            font-size: 12px;
            margin-right: 20px;
            cursor: pointer;
        }
    }

    .more {
        font-size: 12px;
        color: $red;
        margin-left: auto;
    }
}
</style>