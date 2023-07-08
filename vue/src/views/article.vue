<script setup lang="ts">
import Article from '@/apis/articleApi'

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...

const articles = ref()

Article.article().then(({ result }) => (articles.value = result))

const del = (index: number) => {
  articles.value.splice(index, 1)
}
</script>

<template>
  <div class="article">
    <AnimateList tag="ul" :duration="0.5" :delay="0.2">
      <li :data-index="index" v-for="(article, index) of articles" :key="article.id">
        {{ article.title }}
        <i class="fas fa-circle-xmark" @click="del(index)"></i>
      </li>
    </AnimateList>
  </div>
</template>

<style lang="scss">
.article {
  padding: 30px;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #34495e;
  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin-bottom: 20px;
      background-color: #8e44ad;
      color: #fff;
      border-radius: 5px;

      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
