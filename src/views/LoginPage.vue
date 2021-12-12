<template>
  <van-form @submit="onSubmit">
    <van-field v-model="state.mobile" name="mobile" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
    <van-field v-model="state.password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { login } from 'src/api/auth'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ABOUT',
  setup() {
    const router = useRouter()

    const state = reactive({
      mobile: '',
      password: '',
    })

    const onSubmit = (values) => {
      console.log('submit', values)
      login(values)
        .then((res) => {
          localStorage.setItem('token', res.data.data.token)
          router.push('/HomePage')
        })
        .catch((e) => {
          const { code, errors, message } = e.response.data
          let errorStr = ''
          errors.forEach((error) => {
            const { code, field, message } = error
            errorStr += `code:${code},field:${field},message:${message}`
          })
          Toast({
            message: `状态码:${e.response.status}
            code:${code}
            errors:${errorStr}
            message:${message}`,
            duration: 10 * 1000,
          })
        })
    }

    return { state, onSubmit }
  },
})
</script>
<style lang="less" scoped>
</style>