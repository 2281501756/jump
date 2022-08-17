<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleGame = () => {
  router.push('/game')
}
const handleTopList = () => {
  router.push('/top/list')
}
</script>

<template>
  <div class="container">
    <div class="title">跳一跳</div>
    <div class="button" @click="handleGame()">开始游戏</div>
    <div class="button">排行榜</div>
    <div class="button">退出</div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #282828;
  color: #fff;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.title {
  font-size: 40px;
}
.button {
  width: 150px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  color: #282828;
  background-color: #fff;
  text-align: center;
}
.button:active {
  transform: scale(0.98);
}
</style>
