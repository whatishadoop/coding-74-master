<template>
  <div class="header">
    <div class="slider-img">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../common/image/swipe1.jpg" height="120" width="100%"/>
        </mt-swipe-item>
        <mt-swipe-item><img src="../../common/image/swipe2.jpg" height="120" width="100%"/></mt-swipe-item>
        <mt-swipe-item><img src="../../common/image/swipe3.jpg" height="120" width="100%"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{msg}}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--应用展示-->
    <div class="apps">
      <div>
        <img src="../../common/image/chart.png"/>
        <span>统计图表</span>
      </div>
      <div>
        <img src="../../common/image/data.png"/>
        <span>加载更多</span>
      </div>
      <div>
        <img src="../../common/image/note.png"/>
        <span>我的备忘</span>
      </div>
      <div>
        <img src="../../common/image/workflow.png"/>
        <span>其它测试</span>
      </div>
    </div>

    <div class="apps">
      <div>
        <img src="../../common/image/css3.png"/>
        <span>Sass测试</span>
      </div>
      <div>
        <img src="../../common/image/i18n.png"/>
        <span>国际化测试</span>
      </div>
      <div>
        <img src="../../common/image/calendar.png"/>
        <span>日历测试</span>
      </div>
      <div>
        <img src="../../common/image/editor.png"/>
        <span>富文本测试</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">


  export default {
    data() {
      return {
        msg: '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。'
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .header
    position: relative
    overflow: hidden
    color: #fff
    background: rgba(7, 17, 27, 0.5)
    .slider-img
      height: 120px
      width: 100%
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('../../common/image/bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px
    .apps
      display: flex
      flex-direction: row
      justify-content: space-around
      flex-wrap: wrap
      div
        display: flex
        height: 70px
        width: 25%
        justify-content: center
        align-items: center
        span
          margin-top: 5px;
          font-size: 10px;
      img
        height: 40px;
        width: 40px;
</style>
