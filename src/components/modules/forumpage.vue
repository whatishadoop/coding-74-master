<template>
  <div>
    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="brand in brands">{{brand}}</li>
      </ul>
    </div>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
        };
      },
      methods: {
        changeLocale() {
          let locale = this.$i18n.locale;
          locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
        }
      }
    };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
