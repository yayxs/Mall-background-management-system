<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      console.log(this.formData);
      const res = await this.$http.post("auth/manager_login", this.formData);
      const data = res.data;

      const { code, token } = data;

      if (code == "success") {
        localStorage.setItem("token", token);
        this.$message.success("登陆成功");
        this.$router.push({ name: "home" });
      } else {
        this.$message.error("信息输入错误");
      }
    }
  }
};
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-form .login-button {
  width: 100%;
}
</style>
