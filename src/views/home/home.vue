<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <!-- <img src="/static/logo.png" alt> -->
          </div>
        </el-col>
        <el-col :span="19" class="middle">
          <h2>剁手商城后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a href="#" class="loginout" @click.prevent="handleSignout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <el-menu class="menu" :unique-opened="true" :router="true">
          <el-submenu v-for="item in menus" :key="item.id" :index="''+item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName}}</span>
            </template>

            <!-- <el-menu-item v-for="item1 in item.children" :key="item1.id" :index=""/" + item1.path">
              <i class="el-icon-menu"></i>
              {{ item1.authName }}
            </el-menu-item>-->
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!--视图容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },
  beforeCreate() {
    // 从session中获取token 判断是否有token
    const token = localStorage.getItem("token");
    if (!token) {
      // 返回登录页
      this.$router.push({ name: "login" });
      // this.message.warning("请先登录");
    }
  },
  created() {
    // this.loadData();
  },
  methods: {
    handleSignout() {
      // 删除localStorage中的token
      localStorage.clear();
      // 跳转到登录页
      this.$router.push({ name: "login" });
      // 提示
      this.$message.success("退出成功");
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
  padding: 0;
}

.header .middle {
  line-height: 60px;
  color: #fff;
  text-align: center;
}

.header .loginout {
  line-height: 60px;
  text-decoration: none;
}

.aside {
  background-color: #d3dce6;
}
.aside .menu {
  height: 100%;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
