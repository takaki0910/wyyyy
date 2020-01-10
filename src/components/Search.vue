<template>
    <el-input
        v-model="searchInput"
        prefix-icon="el-icon-search"
        :placeholder="placeholder"
        @keyup.enter="doSearch"
        @blur="leaveSearch"
    />
</template>

<script>
export default {
    data() {
        return {
            searchInput: "",
            placeholder:'音乐/视频/电台/用户'
        };
    },
    methods:{
        doSearch(){
            
        },
        leaveSearch(){
            if(this.searchInput.trim()==='') this.placeholder = '音乐/视频/电台/用户'
        }
    }
};
</script>

<style lang="scss" scoped>
.el-input {
    width: 160px;
    font-size: 12px;
    border-radius: 12px;
    overflow: hidden;

    // 去除焦点的边框,需要深度
    /deep/ .el-input__inner {
        height: 32px;
        border: 0;
    }
    
    // 会被影响一起深度,左边logo
    /deep/ .el-input__prefix {
        top: -3px;
    }
}

::-webkit-el-input-placeholder {
    color: red;
}
</style>
