<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { echart1, echart2 } from './echart'
import * as echarts from 'echarts'

interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}

const cards = ref<ICard[]>([
  { title: '总人数', price: 23343, icon: 'fas fa-address-card', iconColor: 'text-violet-500', totalTitle: '总人数', total: 3892982 },
  { title: '销售额', price: 18393, icon: 'fas fa-apple-alt', iconColor: 'text-green-600', totalTitle: '总销售额', total: 9387382 },
  { title: '订单数', price: 3803, icon: 'fas fa-award', iconColor: 'text-blue-500', totalTitle: '总订单数', total: 83493 },
  { title: '评论数', price: 8994, icon: 'fas fa-baseball-ball', iconColor: 'text-red-500', totalTitle: '总评论数', total: 48920 },
])

nextTick(() => {
  echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1)
  echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart1)
})
</script>

<template>
  <div>
    <div class="grid md:grid-cols-4 gap-3 bg-gray-100">
      <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(card, index) of cards" :key="index" class="cursor-pointer">
        <template #header>
          <div class="flex justify-between items-center">
            {{ card.title }}
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>

        <section class="flex mt-3 justify-between items-center">
          <span class="text-3xl">${{ card.price }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-3xl"></i>
        </section>

        <section class="text-sm mt-6 flex justify-between">
          {{ card.totalTitle }}
          <span>{{ card.total }}</span>
        </section>
      </el-card>
    </div>

    <div class="mt-5 grid md:grid-cols-2 gap-3">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>用户统计</span>
          </div>
        </template>
        <div id="echart1" class="h-72 w-full"></div>
      </el-card>

      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>销售额</span>
          </div>
        </template>
        <div id="echart2" class="h-72 w-full"></div>
      </el-card>
    </div>
  </div>
</template>

<style scoped></style>
