<template>
  <el-container class="editor-container">
    <el-header height="110px">
      <div></div>
      <div></div>
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu :default-openeds="['1']" class="el-menu-vertical-demo" background-color="#f3f3f3">
          <el-submenu index="1">
            <template slot="title">基础图形</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">其他类型</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-card class="box-card">
            <!-- 编辑区 -->
            <div title='编辑区' id="contextBody" style="" class="mapContext text item">
                <!--绘图区-->
                <canvas id="drawCanvas" class="mapContext"></canvas>
            </div>
            <!-- 编辑区-end -->
        </el-card>
      </el-main>
    </el-container>
    <el-footer>
      <span class="footerSpan">欢迎使用GraphEditor在线绘图</span>
    </el-footer>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.box-card {
  width: 480px;
}
.el-menu-vertical-demo {
  margin-left: 0px;
  margin-right: 0px;
  padding:0px;
  overflow: hidden;
}
.el-header {
  box-shadow: 5px 5px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
  line-height: 70px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.footerSpan {
  text-align: center;
  margin-left: 45%;
}
.el-aside {
  background-color: #f3f3f3;
  color: #333;
  line-height: 200px;
}
.el-main {
  background-color: #d8d9dd;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.editor-container {
  height: 100%;
}
</style>
