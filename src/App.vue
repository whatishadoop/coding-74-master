<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="src/assets/logo.png">
        <router-link to="/homepage/goods">
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="投资">
        <img slot="icon" src="src/assets/logo.png">
        <router-link to="/investmentpage/">
          投资
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="论坛">
        <img slot="icon" src="src/assets/logo.png">
        <router-link to="/forumpage">
          论坛
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="src/assets/logo.png">
        <router-link to="/mypage">
          我的
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="更多">
        <img slot="icon" src="src/assets/logo.png">
        <router-link to="/morepage">
          更多
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import homepage from 'components/modules/homepage';
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
    },
    components: {
      'v-homepage': homepage
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
