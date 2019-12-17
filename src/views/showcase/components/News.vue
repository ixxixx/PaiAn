<template>
    <div>
        <ul>
            <li><a href="#">最新事件..........</a></li>
            <li><a href="#">烟雾报警有无缺失.........</a></li>
            <li><a href="#">燃气报警有无缺失.........</a></li>
            <li><a href="#">九小场所有无缺失.........</a></li>
            <li><a href="#">灭火器是否有效内.........</a></li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="less">
    li {
        margin-left: 10/96rem;
        list-style:none;
        height: 15/96rem;
        &:nth-child(1) {
            font-size: 10/96rem;
            margin-top: 5/96rem;
            margin-bottom: 5/96rem;
        }
        a {
            color:#fff;
            text-decoration:none;
        }
    }
</style>
