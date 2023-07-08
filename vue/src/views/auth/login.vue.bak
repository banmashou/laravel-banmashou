<script setup lang="ts">
import utils from '@/utils'
// import { reactive } from 'vue'

// const form = reactive<{ account: string; password: string | number }>({
//   account: '',
//   password: '',
// })
import v from '@/plugins/validate'
const { Form, Field, ErrorMessage } = v
// const schema = v.yup.object({
//   account: v.yup.string().required().email().label('账号'),
//   password: v.yup.string().required().min(3).label('密码'),
// })
const schema = {
  account: {
    required: true,
    regex: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  },
  password: { required: true, min: 3 },
}

const onSubmit = async (values: any) => {
  utils.user.login(values)
}
</script>
<script lang="ts">
export default { route: { name: 'login', meta: { guest: true } } }
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-center">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
          <div class="mt-8">
            <Field name="account" autocomplete value="admin@banmashou.com" label="账号" placeholder="请输入邮箱或手机号" class="bm-input" />
            <ErrorMessage name="account" as="div" class="bm-error" />
            <Field name="password" autocomplete value="admin888" label="密码" placeholder="请输入密码" type="password" class="bm-input mt-3" />
            <ErrorMessage name="password" as="div" class="bm-error" />
          </div>
          <BmButton class="w-full" />
          <div class="flex justify-center mt-3">
            <icon-wechat theme="outline" size="14" fill="#fff" class="bg-green-600 text-white rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <BmLink />
          <BmLink />
          <BmLink />
          <BmLink />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </Form>
</template>

<style lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0;
}
</style>
