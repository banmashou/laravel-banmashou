<script setup lang="ts"></script>

<template>
  <div class="h-screen !w-screen bg-gray-700 flex flex-col justify-center items-center !-mt-0">
    <img src="/images/bms.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <HdFormButton class="danger ml-2" @click="$router.push({ name: RouteEnum.ADMIN })"> 访问后台 </HdFormButton>
      <HdFormButton class="primary ml-2" @click="$router.push({ name: RouteEnum.LOGIN })"> 用户登录 </HdFormButton>
      <HdFormButton class="success ml-2" @click="$router.push({ name: RouteEnum.MEMBER })"> 修改资料 </HdFormButton>
    </div>
    <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-6">斑马兽努力学习！</div>
  </div>
</template>
