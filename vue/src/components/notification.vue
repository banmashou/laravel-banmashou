<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('site')
const show = ref(false)

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="">還沒有房產你的昨天認定還是地方超過評估才能圖書館無派曝光能源，筆記本，蔬菜你就，每月簡單，硬體文本。</a>
        <a href="">也許專題指南屬性節目出去指導學校天天魅力加拿大沒人，手裡內地，因此性質放棄區別，這段本公司點點，討。</a>
        <a href="">思維責任編輯就在成立變化，被人不好好了再度部隊物業衣服生態團結總經理，走向恢復版權，預計早就地說壓。</a>
      </el-tab-pane>
      <el-tab-pane label="站内通知" name="message"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 py-2 border rounded-sm shadow-md right-[-60px] z-10 w-[300px] text-sm;
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-fuchsia-700;
    }
  }
}
</style>
