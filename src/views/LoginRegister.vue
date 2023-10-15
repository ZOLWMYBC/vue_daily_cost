<template>
  <div class="demo">
    <Log class="log"></Log>
    <!-- ------------登录---------- -->
    <el-form v-if="isLogin" ref="ruleFormLoginRef" :model="loginForm" :rules="rulesLogin" label-width="120px" status-icon
      class="login-register">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Authcode" prop="authcode">
        <el-input v-model.trim="loginForm.authcode" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm(ruleFormLoginRef)">Login</el-button>
        <el-button type="primary" @click="isLogin = !isLogin, resetForm(ruleFormLoginRef)">Register</el-button>
      </el-form-item>
    </el-form>

    <!-- -------------注册----------- -->
    <el-form v-else :model="registerForm" :rules="rulesRegister" ref="ruleFormRegisterRef" label-width="120px" status-icon
      class="login-register">
      <el-form-item label="Username" prop="username">
        <el-input v-model="registerForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Telephone" prop="telephone">
        <el-input v-model.number()="registerForm.telephone" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="registerForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="registerForm.email" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click=" submitRegisterForm(ruleFormRegisterRef)">Register</el-button>
        <el-button type="primary" @click="isLogin = !isLogin, resetForm(ruleFormRegisterRef)">Return</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormLoginRef = ref<FormInstance>()
const ruleFormRegisterRef = ref<FormInstance>()

const isLogin = ref(true)



const loginForm = reactive({
  username: '',
  password: '',
  authcode: '',
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名！'))
  } else
    callback()
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码！'))
  } else
    callback()
}
const validateAuthcode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码！'))
  } else
    callback()
}
const rulesLogin = reactive<FormRules<typeof loginForm>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  authcode: [{ validator: validateAuthcode, trigger: 'blur' }],
})

const submitLoginForm = (formEI: FormInstance | undefined) => {
  // console.log("formEI", formEI);
  if (!formEI) return
  formEI.validate((valid) => {
    // console.log("valid", valid);
    if (valid) {
      console.log('登录成功!')
      ElMessage({
        showClose: true,
        message: '登录成功！',
        type: 'success',
      })
    } else {
      console.log('登录失败!')
      ElMessage({
        showClose: true,
        message: '登录失败！',
        type: 'error',
      })
      return false
    }
  })
}

//----------注册-----------
const registerForm = reactive({
  username: '',
  telephone: '',
  password: '',
  email: ''
})

const validateTelephone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入电话号码！'))
  } else if (value.length !== 11 || isNaN(Number(value))) {
    callback(new Error('请正确输入电话号码！'))
  } else
    callback()
}

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入电子邮箱！'))
  } else
    callback()
}

const rulesRegister = reactive<FormRules<typeof registerForm>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  telephone: [{ validator: validateTelephone, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }]
})

const submitRegisterForm = (formEI: FormInstance | undefined) => {
  if (!formEI) return
  formEI.validate((valid) => {
    if (valid) {
      console.log('注册成功!')
      ElMessage({
        showClose: true,
        message: '注册成功！',
        type: 'success',
      })
    } else {
      console.log('注册失败!')
      ElMessage({
        showClose: true,
        message: '注册失败！',
        type: 'error',
      })
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.demo {
  margin: 0 50%;
  width: 380px;
  height: 600px;
  border: 3px solid black;
  border-radius: 30px;
  box-shadow: 2px 2px rgba(0, 0, 0, .3);
}

.demo .log {
  margin: 10px 150px;
}

.login-register {
  width: 380px;
  height: 500px;
  padding: 20px 30px 0 0;
}
</style>