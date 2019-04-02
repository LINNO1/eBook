<template>
  <div class='title-bar'>
    
 <transition name='slide-down'>
   <div class="title-wrapper" v-show='ifTitleMenuShow'>
      <div class="left">
            <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-back"></use>
            </svg>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg>
        </div>
        <div class="icon-wrapper">
          <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-renbudaiwaiquan"></use>
            </svg>
        </div>
        <div class="icon-wrapper">
             <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-sandian"></use>
             </svg>
        </div>
      </div>
   </div>
</transition>


 </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props: {
      'ifTitleMenuShow': {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style lang='scss' scoped>
@import '../assets/style/global';
.title-bar {
 position: relative;
.title-wrapper {
          position: absolute;
          left: 0;
          top: 0;
          z-index:101;
          display: flex;
          width: 100%;
          height: px2rem(48);
          background: white;
          box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,.15);
          .left {
            flex: 0 0 px2rem(60);
            @include center;
          }
          .center {
          background: red;
          }
          .right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .icon-wrapper {
                flex: 0 0 px2rem(40);
                 @include center;
            }
          }
      }
    }
</style>
