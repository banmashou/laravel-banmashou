<script setup lang="ts">
// import { onMounted } from 'vue'

import { http } from './plugins/axios';

http.request({url: 'abc'}).then(r => {
	console.log(r)
})

// import userApi from './apis/userApi'

// onMounted(async () => {
//   const res = await fetch(`http://localhost:5173/api/get`).then((r) => r.json())
//   console.log(res)
// })
// onMounted(async () => {
//   const response = await userApi.login()
//   console.log(response)
// })
</script>

<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<style></style>
