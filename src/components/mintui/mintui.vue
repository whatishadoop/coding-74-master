<template>
  <div>
    <mt-header title="修改客户资料">
      <!--这个头部导航栏关键的是mt-header父标签,而该标签内的内容是根据需求写的哦-->
    </mt-header>
    <mt-button type="default" @click="toBack">default</mt-button>
    <!-- tabcontainer -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="首页">
         首页
      </mt-tab-container-item>
      <mt-tab-container-item id="投资">
        投资
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        发现
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <!--<router-link to="/">
          &lt;!&ndash; button &ndash;&gt;
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>-->
        <mt-button type="danger" size="large" @click="goHome">退出</mt-button>
        我的
      </mt-tab-container-item>
      <mt-tab-container-item id="更多">
        更多
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../../common/image/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="投资">
        <img slot="icon" src="../../common/image/logo.png">
        投资
      </mt-tab-item>
      <mt-tab-item id="论坛">
        <img slot="icon" src="../../common/image/logo.png">
        论坛
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../common/image/logo.png">
        我的
      </mt-tab-item>
      <mt-tab-item id="更多">
        <img slot="icon" src="../../common/image/logo.png">
        更多
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        selected: '首页'
      };
    },
    methods: {
      toBack() {
        console.log('hello');
        alert('hello');
      },
      goHome() {
        console.log(this);
        this.$router.go('/');
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
