<template>
  <div class="header-wrap">
      <div class="header">
          <div class="logo">只是玩一玩</div>
          <ul>
              <li>总有些人</li>
              <li class="hidden-sm-only">总有些人和</li>
              <li>总有</li>
              <li>总有些</li>
              <li>总有些人</li>
          </ul>
      </div>
  </div>
</template>

<script>
//响应式 模块隐藏
import 'element-ui/lib/theme-chalk/display.css';
export default {

}
</script>

<style lang="scss">
    .header-wrap {
        height: 60px;
        background-color: rgb(36, 36, 36);
        display: flex;
        justify-content: center;

        .header {
            width:1100px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .logo {
                font-size: 28px;
                color: white;
                line-height: 60px;
                margin-right: 25px;
            }
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                
                li {
                    color: white;
                    margin-right: 15px;
                    white-space: nowrap;
                }
            }
        }
    }
</style>