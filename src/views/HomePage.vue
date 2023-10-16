<template>
  <div class="demo">

    <div class=" w3-cell-row">
      <!-- 左列 -->
      <div class="demo-left w3-container w3-cell m3 ">
        <div class="left-btn-top">

          <el-button class="img-btn">20</el-button>
        </div>

        <div class="w3-container m3 w3-cell w3-cell-bottom">
          <el-button>
            <el-icon :size="30">
              <Document />
            </el-icon>
          </el-button>
          <span>明细</span>
        </div>
      </div>
      <!-- 中间 -->
      <div class="demo-center w3-container  w3-cell w3-cell-row m3">

        <div class="w3-container m3 w3-cell w3-cell-bottom ">
          <el-button><el-icon :size="30">
              <List />
            </el-icon></el-button>
          <span>账单</span>
        </div>

        <div class="w3-container m3  w3-cell w3-cell-bottom home-add">
          <el-button><el-icon :size="70">
              <CirclePlusFilled />
            </el-icon></el-button>

        </div>
        <div class="w3-container m3  w3-cell w3-cell-bottom">
          <el-button><el-icon :size="30">
              <Money />
            </el-icon></el-button>
          <span>存钱</span>
        </div>
      </div>
      <!-- 右边 -->
      <div class="demo-right w3-container  w3-cell m3">
        <div class="right-btn-top">
          <div class="demo-right-btn1">
            <el-button>
              <el-icon :size="30">
                <Menu />
              </el-icon>
            </el-button>
          </div>
          <div class="demo-right-btn2">
            <el-button>
              <el-icon :size="30">
                <Coin />
              </el-icon>
            </el-button>
          </div>
          <div class="demo-right-btn3">
            <el-button>
              <el-icon :size="30">
                <Calendar />
              </el-icon>
            </el-button>
          </div>
        </div>
        <div class="w3-container m3 w3-cell w3-cell-bottom">
          <el-button><el-icon :size="30">
              <HomeFilled />
            </el-icon></el-button>
          <span>我的</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.demo {
  background-image: url(src/components/icons/IconLog.jpg);
  background-repeat: round;
}

.demo-left,
.demo-center,
.demo-right {
  /* border: 1px solid red; */
  padding: 0;
}


.img-btn {
  margin-left: 5px;
  height: 40px;
  width: 50px;
  line-height: 40px;
  background-image: url(../components/icons/IconLog.jpg);

}

.demo-right-btn2 {
  margin: 15px 0;
}

.demo-right-btn1,
.demo-right-btn2,
.demo-right-btn3 {
  text-align: center;
}

.right-btn-top,
.left-btn-top {
  padding-top: 20px;
  height: 200px;
}

.w3-cell-row {
  margin: 5px 0 10px 0;
}

.w3-cell-row .w3-container {
  height: 575px;
}

.demo-left .w3-container,
.demo-right .w3-container {
  height: 375px;
}

.w3-container .el-button {
  padding: 0;
}

.home-add {
  padding-bottom: 50px;
}
</style>