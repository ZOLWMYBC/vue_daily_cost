<template>
  <div class="demo demo-bgi">

    <header class="home-header">
      <div class="header-left">
        <el-button class="img-btn" icon="Trophy">20</el-button>
      </div>
      <div class="header-right">
        <el-button class="btn" icon="Menu"></el-button>
        <el-button class="btn" icon="Coin"></el-button>
        <el-button class="btn" icon="Calendar"></el-button>
      </div>

    </header>

    <footer class="home-footer">
      <div class=" footer-btn">
        <el-button class="btn" icon="Document">
        </el-button>
        <span>明细</span>
      </div>
      <div class="footer-btn">
        <el-button class="btn" icon="List"></el-button>
        <span>账单</span>
      </div>
      <div class="footer-btn ">
        <el-button class="btn" icon="CirclePlus"></el-button>
      </div>
      <div class="footer-btn">
        <el-button class="btn" icon="Money"></el-button>
        <span>存钱</span>
      </div>
      <div class="footer-btn">
        <el-button class="btn" icon="HomeFilled"></el-button>
        <span>我的</span>
      </div>

    </footer>
  </div>
</template>

<script>
this.$axios({
  method: "post",
  url: "", // 接口地址
  data: {
    keyword: "1"   // 传接口参数
  }
})
  .then(response => {
    console.log(response, "success");   // 成功的返回      
  })
  .catch(error => console.log(error, "error")); // 失败的返回

export default {

}
</script>

<style>
.demo-bgi {
  background-image: url(src/components/icons/IconLog.jpg);
  background-repeat: round;
}

.home-header {
  display: flex;
  height: 300px;
  width: 100%;
  /* background-color: pink; */
}

.header-left {
  padding: 20px;
  width: 80%;
  height: 100%;
}

.header-right {
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;

}

.home-footer {
  display: flex;
  position: relative;
  height: calc(100% - 300px);
  width: 100%;
  padding: 10px 10px;


}

.footer-btn {
  display: flex;
  flex-direction: column;
  padding: 200px 10px 0px 10px;
  text-align: center;
}

.btn {
  height: 30px;
  width: 30px;
  padding: 20px;
  font-size: 15px;
  text-align: center;
}
</style>