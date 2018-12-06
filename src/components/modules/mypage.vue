<template>
  <div>
    {{$t('brands.adi')}}
    <br/>
    <div>
      <v-barchart></v-barchart>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import barchart from 'components/chart/barchart';

  export default {
    components: {
      'v-barchart': barchart
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>
