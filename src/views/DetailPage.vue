<template>
  <div class="demo">
    <div class="header">
      <el-button class="btn" style="width: 50px;height: 50px; font-size: 50px;" icon="Memo" circle></el-button>
      <span>
        <h4>2023年10月的账目明细 </h4>
      </span>
      <el-button class="btn" style="width: 30px;height: 30px; font-size: 30px;" icon="Clock" circle></el-button>
    </div>
    <div class="main">
      <div class="main-surplus">
        <!-- <el-calendar class="surplus-calendar" ref="calendar">
          <template #header="{ date }"><span>{{ date }}</span></template>
        </el-calendar> -->
      </div>
      <div class="main-search">
        <el-button class="search-btn" icon="Search" round>搜索账单/备注/分类等</el-button>
        <el-button class="search-create" icon="Plus">新建</el-button>
      </div>
      <div class="main-list">

      </div>
    </div>

    <div class="footer ">
      <div class="demo-btn demo-detail">
        <el-button class="btn" icon="Document" circle>
        </el-button>
        <span>明细/日历</span>
      </div>
      <div class="demo-btn demo-statistics">
        <el-button class="btn" icon="PieChart" circle></el-button>
        <span>统计</span>
      </div>
      <div class="demo-btn demo-asset">
        <el-button class="btn" icon="Collection" circle></el-button>
        <span>资产</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import type { CalendarDateType, CalendarInstance } from 'element-plus'
// const search_input = ref('')
// const calendar = ref<CalendarInstance>()
// const selectDate = (val: CalendarDateType) => {
//   if (!calendar.value) return
//   calendar.value.selectDate(val)
// }

</script>

<style>
.header {
  width: 100%;
  height: 70px;
  /* border: 1px solid red; */
}

.demo .btn {
  margin: 10px 10px;
  width: 30px;
  height: 30px;
  border: none;
  font-size: 40px;
}

.header span {
  display: inline-block;
  width: 254px;
  height: 50px;
  text-align: right;
  line-height: 50px;
}

.main {
  padding: 0 8px;
  width: 380px;
  height: 440px;
  /* background-color: pink; */
}

.main-surplus {
  height: 200px;
}

.main .main-surplus .surplus-calendar .el-calendar__body {
  height: 200px;
}

.main-search {
  height: 40px;
}

.main .main-search .search-btn {
  margin: 0;
  padding-right: 100px;
  font-size: 14px;
}

.main .main-search .search-create {
  margin: 0;
  border: none;
  color: red;
  font-size: 14px;
}

.main-list {
  height: 200px;
}

.footer {
  display: flex;
  width: 380px;
  height: 90px;
  /* border: 1px solid red; */
  /* background-color: blue; */
}

.demo-btn {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

.footer .demo-statistics {
  padding: 0 65px;
}

.demo-btn span {
  text-align: center;
}
</style>