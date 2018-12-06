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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {  // 普通属性国际化切换无效果
        brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
      };
    },
    methods: {
      changeLocale() {
        let locale = this.$i18n.locale;
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
      }
    },
    computed: {
      nike() {  // js中引用国际化放在计算属性中
        return this.$t('brands.nike');
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
