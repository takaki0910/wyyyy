<template>
    <div class="wrap">
        <div class="header">
            <img
                src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                alt=""
            />
            <div class="words">
                <slot></slot>
                <p>
                    <i class="el-icon-video-play"></i>
                    <i class="el-icon-folder-add"></i>
                </p>
            </div>
        </div>
        <ul class="list">
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li"></li>
            <li class="li">查看全部></li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
    height: 100%;
    background-color: rgb(244, 244, 244);

    .header {
        height: 120px;
        padding: 20px 0 0 19px;
        display: flex;

        img {
            width: 80px;
            height: 80px;
            margin-right: 15px;
        }

        .words {
            padding-top: 15px;
            
            a {
                text-decoration: none;
                color: #222;
                font-weight: 550;
                display: block;
                margin-bottom: 10px;
            }

            i {
                font-weight: bold;
                font-size: 20px;
                color: rgb(172, 172, 172);
                margin-right: 12px;
            }

            i:hover {
                color: #555;
            }
        }
    }

    .list {
        .li {
            height: 32px;
        }
        .li:nth-child(odd) {
            background-color: rgb(232, 232, 232);
        }
        .li:last-child {
            font-size: 12px;
            color: #222;
            padding-right: 20px;
            text-align: right;
            line-height: 32px;
        }
    }
}
</style>
