<script lang="ts" setup>
import { Game } from '../logic'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const scored = ref(0)
const gameover = ref(false)
const router = useRouter()
let game: any = null
const handleClick = () => {
  scored.value = -1
  gameover.value = false
  if (game) game._restart()
}
const goHome = () => {
  router.push('/')
}
onMounted(() => {
  game = new Game()

  game.init()
  game._addSuccessFn(() => {
    scored.value++
  })
  game._addFailedFn(() => {
    gameover.value = true
  })
})
</script>

<template>
  <div class="game-ui">
    <div class="scored">得分:{{ scored }}</div>
    <div v-show="gameover" class="mark">
      <div class="mark-dialog">
        <div>本次得分</div>
        <div>{{ scored }}</div>
        <div style="display: flex; justify-content: space-between">
          <button @click="handleClick()">再来一次</button>
          <button @click="goHome()">返回主页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-ui {
  user-select: none;
  position: absolute;
}
.scored {
  position: absolute;
  width: 100%;
  top: 20px;
  color: #fff;
  font-size: 26px;
  text-align: center;
}
.mark {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mark-dialog {
  height: 400px;
  width: 400px;
  background-color: #111;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
}
.mark-dialog > div {
  text-align: center;
}

.mark-dialog > div:nth-child(2) {
  font-size: 120px;
}
.mark-dialog button {
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 25px;
  color: #111;
  background-color: #fff;
}
.mark-dialog button:active {
  transform: scale(0.98);
}
</style>
