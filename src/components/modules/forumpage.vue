<template>
  <div>
    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="(brand,index) in brands" :key="index">{{brand}}</li>
      </ul>
      <br/>
      <h1>{{nike}}</h1>
    </div>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>
    <button type="button" class="btn btn-success" @click="update">测试</button>
    <!--<div v-world:wbs17022.hehe.haha>

    </div>-->

    <div id="mount-point2">
      xxxxx222
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import barchart from 'components/chart/barchart';

  export default {
    data() {
      return {  // 普通属性国际化切换无效果
        brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')],
        chart: '<v-barchart></v-barchart>',
        chart2: '<div v-world:wbs17022.hehe.haha></div>'
      };
    },
    methods: {
      update() {
        const strs = '<div><div v-world:wbs17022.hehe.haha id="mount-point"></div> 惺惺惜惺惺</div>';
        var MyComponent = Vue.extend({
          template: strs
        });
        new MyComponent().$mount('#mount-point2');
        console.info('已经更新完毕');
      },
      changeLocale() {
        // registerComponent(templateName) {
        var Profile = Vue.extend(barchart);
        // 创建 Profile 实例，并挂载到一个元素上。
        new Profile().$mount('#mount-point');
        let locale = this.$i18n.locale;
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
      }
    },
    computed: {
      nike() {  // js中引用国际化放在计算属性中
        return this.$t('brands.nike');
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.update();
        // const strs = '<div v-world:wbs17022.hehe.haha id="mount-point">惺惺惜惺惺</div>';
        // var MyComponent = Vue.extend({
        //   template: strs
        // });
        // new MyComponent().$mount('#mount-point2');
      });
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
