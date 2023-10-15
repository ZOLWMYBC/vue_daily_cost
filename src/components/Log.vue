<template>
  <div class="demo_logo">
    <el-image :src="url" fit="scale-down" />
  </div>
</template>

<script lang="ts" setup>
const url = "src/components/icons/IconLog.jpg"
</script>

<style scoped>
.demo_logo .el-image {
  display: block;
  width: 100px;
  height: 100px;

}
</style>
