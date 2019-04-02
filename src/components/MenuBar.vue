<template>
   <div class='menu-bar'>
   <transition name='slide-up'>
    <div class="menu-wrapper"  v-bind:class="{'hide-box-shadow':ifSettingShow||!ifTitleMenuShow}" v-show='ifTitleMenuShow' >
        <div class="icon-wrapper">
          <svg class="icon" aria-hidden="true " v-on:click='showSetting(3)'>
              <use xlink:href="#icon-sanheng"></use>
            </svg>
        </div>
    
        <div class="icon-wrapper">
          <svg class="icon" aria-hidden="true" v-on:click='showSetting(2)'>
              <use xlink:href="#icon-jindu1"></use>
            </svg>
        </div>
        <div class="icon-wrapper">
          <svg class="icon icon-bright " aria-hidden="true" v-on:click='showSetting(1)'>
              <use xlink:href="#icon-taiyang"></use>
            </svg>
        </div>
        <div class="icon-wrapper">
         <span class='icon-a' v-on:click='showSetting(0)'>A</span>
        </div>     </div>
   </transition>
   <transition name='slide-up'>
     <div class="setting-wrapper" v-show='ifSettingShow'>  
     <div class="setting-font-size" v-if='showTag===0'>
         <div class="preview" v-bind:style="{'fontSize':fontSizeList[0].fontsize+'px'}">A</div>
         <div class="select-wrapper" v-for='(item,index) in fontSizeList' v-on:click='setFontsize(item.fontsize)'>
           <div class="line"></div>
           <div class="point-wrapper">
              <div class="point" v-show='defaultFontsize===item.fontsize'>
                <div class="small-point"></div>
              </div>         
           </div>
            <div class="line"></div>
         </div>
         <div class="preview" v-bind:style="{'fontSize':fontSizeList[fontSizeList.length-1].fontsize+'px'}">A</div>
      </div>
      <div class="setting-theme" v-else-if='showTag===1'> 
         <div class="theme-item" v-for='(item,index) in themeList'
          v-on:click='setTheme(index)'>  
              <div class="preview" v-bind:style="{'background': item.style.body.background}" v-bind:class="{'no-border': item.style.body.background!=='#fff'}"> </div>
              <div class="text" v-bind:class="{'selected': index===defaultTheme}"> {{item.name}} </div>
         </div> 
      </div>  
      <div class="setting-progress" v-else-if='showTag===2'>
        <div class="progress-wrapper"> 
         <input class="progress" type='range' max='100' min='0' step='1'
             v-on:change='onProgressChange($event.target.value)'
             v-on:input='onProgressInput($event.target.value)' 
             v-bind:value='progress'
             v-bind:disable='!bookAvaiable'
             ref='progress'> 
          </div> 
          <div class="text-wrapper"> 
                <span>  {{bookAvaiable? progress+'%':'加载中...'}} </span>
          </div>  
        </div></div>    
   </transition>
    <contentView v-show='ifShowContent'
      :ifShowContent='ifShowContent'
      :navigation='navigation'
      :bookAvaiable='bookAvaiable'
       v-on:jumpTo='jumpTo'> 
   </contentView>
   <transition name='fade'>
    <div class="content-mask" v-show='ifShowContent' 
        v-on:click='hideContent'></div>
    </transition>
  </div>
</template>

<script>
import contentView from './contentView'
export default {
  components: {
    contentView
 
  },
    data(){
      return {
        ifSettingShow: false,
        showTag: 0,
        progress: 0,
        ifShowContent: false
      }
    },
    props: {
      'ifTitleMenuShow': {
        type: Boolean,
        default: false
      },
      'fontSizeList': Array,
      'defaultFontsize': Number,
      'defaultTheme': Number,
      'themeList': Array,
      'bookAvaiable':Boolean,
       'navigation': Object
    },
    methods: {
      hideSetting(){
        this.ifSettingShow=false;
        
      },
      /*子组件调用父组件函数*/
      setFontsize(fontsize){
         this.$emit('setFontSize',fontsize);
       
      },
      setTheme(index){
        this.$emit('setTheme',index);
      
      },
      showSetting(tag){
        this.showTag=tag;
        if(this.showTag===3){
          this.ifSettingShow=false;
          this.ifShowContent=true;
          console.log('222')
        }else{
          this.ifSettingShow=true;
        }
      },
      onProgressInput(progress){
         
         this.progress=progress;
         this.$refs.progress.style.backgroundSize='${this.progress}% 100%'
      },
      onProgressChange(progress){
         this.$emit('onProgressChange',progress)
      },
      hideContent(){
        this.ifShowContent=false;
      },
      jumpTo(target){
        this.$emit('jumpTo',target);
      }

    }
  }
</script>

<style lang='scss' scoped>
@import '../assets/style/global';
.menu-bar {

    .menu-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 101;
            display: flex;
            width: 100%;
            height: px2rem(48);
            background: white;
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
            .icon-wrapper {
              flex: 1;
               @include center;
               .icon-a {
                 font-size: px2rem(20);
               }
             }
         &.hide-box-shadow {
              box-shadow: none;
            }
       }
      .setting-wrapper {
        z-index: 102;
        position: absolute;
        bottom: px2rem(48);
        left: 0;
        width: 100%;
        height: px2rem(60);
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
        background: white;
        .setting-font-size {
              display: flex;
              height: 100%;
              .preview {
                   flex: 0 0 px2rem(40);
                   @include center;
               }
               .select-wrapper {
                  flex: 1;
                  display: flex;
                  align-item: center;
                  .line {
                     flex: 1;
                     height: px2rem(30);
                     border-bottom: px2rem(1) solid #ccc;
                  }
                  .point-wrapper {
                     flex: 0 0 0;
                     width: 0;
                     height: px2rem(7);
                     border-left:  px2rem(1) solid #ccc;
                     position: relative;
                     top: px2rem(30);
                     .point {
                       position: absolute;
                       top: px2rem(-11);
                       left:  px2rem(-12);
                       width: px2rem(20);
                       height: px2rem(20);
                       border: px2rem(1) solid #ccc;
                       box-shadow: 0 px2rem(4) px2rem(4) rgba(0 ,0 ,0 ,.15);
                       border-radius: 50%;
                       @include center;
                       .small-point {
                          width: px2rem(5);
                          height: px2rem(5);
                          border: px2rem(1) solid #ccc;
                          border-radius: 50%;
                          background-color: #ccc;
                      }
                     }

                  }
               }
        }
        .setting-theme {
          height: 100%;
          display: flex;
          .theme-item {
            flex: 1;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            padding: px2rem(5);
            .preview {
              flex: 1;
              border: px2rem(1) solid #ccc;
              box-sizing: border-box;
              &.no-border {
                border: none;
              }
            }
            .text {
              flex: 0 0 px2rem(20);
              font-size: px2rem(14);
              color: #ccc;
              @include center;
              &.selected {
                color: #333;
              }
            }
          }
        }
        .setting-progress {
          position: relative;
          width: 100%;
          height: 100%;
        
          .progress-wrapper {           
            width: 100%;
            
            @include center
            padding: px2rem(12) px2rem(30);
            box-sizing: border-box;
            .progress {
              width: 100%;
              -webkit-appearance: none;
              height: px2rem(2);
              background:-webkit-linear-gradient(#999,#999) no-repeat, #ddd;
              background-size: 0 100%;
              &:focus { outline: none; }
              &::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  height: px2rem(10);
                  width: px2rem(10);
                  border-radius: 50%;
                  background: white;
                  box-shadow: 0 4px 4px 0 rgba(0,0,0,.15);
                  border: px2rem(1) solid #ddd;
               }
             }     
         }
             .text-wrapper {
                   width: 100%;
                   text-align: center;
                 
                    span {
                        font-size: px2rem(14);
                   
                   }
           
              }
    
          }
        }

      }
      .content-mask {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 101;
        display: flex;
        width: 100%;
        height: 100%;
    
        background: rgba(51,51,51,.8);
      }
  
</style>


