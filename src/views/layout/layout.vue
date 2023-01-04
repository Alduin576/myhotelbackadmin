<template>
  <div class="layout">
    <header class="header headerTitle">
      <div class="title">酒店后台管理系统</div>
      <!-- 用户登录和注销 -->
      <div class="user">
        <span>超级管理员</span> |
        <span>注销</span>
      </div>
    </header>
    <div class="line"></div>
    <div class="mainbody">
      <el-menu
        :default-active="activeMenu"
        mode="vertical"
        class="el-menu-vertical-demo slidebar"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item index="home">
          <i class="el-icon-menu"></i>
          <span slot="title">数据中心</span>
        </el-menu-item>
        <!-- 此时index=room无效 -->
        <el-submenu index="room">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>房间管理</span>
          </template>
          <el-menu-item index="room_total">房间总览</el-menu-item>
          <el-menu-item index="room_add">房间新增</el-menu-item>
          <el-menu-item index="room_update">房间修改</el-menu-item>
        </el-submenu>
        <el-menu-item index="user">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="config">
          <i class="el-icon-document"></i>
          <span slot="title">配置中心</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "home",
    };
  },
  mounted() {},
  created() {},

  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      this.push(key);
    },
    push(path) {
      this.$router.push({ path: path }).catch((err) => {});
      this.activeMenu = path;
    },
  },
};
</script>

<style>
.headerTitle {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.header .title {
  font-size: 2rem;
}
.header .user {
  font-size: 1.3rem;
}

.mainbody {
  display: flex;
}
.mainbody .content {
  padding: 1rem 1rem;
}
.layout .mainbody .slidebar{
  padding: 0.5rem;
}
</style>