<template>
  <div id="app">
    <!-- 示例内容 -->
    <h1>拉勾教育</h1>
    <!-- 根路由出⼝，⽤于渲染路由组件 -->
    <router-view />

    <!-- element 的按钮组件，测试后删除 -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
// @import '@/styles/variables.scss';
div {
  color: $warning-color;
}
</style>
