<template>
  <div class="ebook">
    <TitleBar :ifTitleMenuShow='ifTitleMenuShow' >  </TitleBar>
    <div class="read-wrapper">
        <div id="read"></div>

        <div class="mask">
            <div class="left" v-on:click='prePage'></div>
            <div class="center" v-on:click='toggleTitleMenu'></div>
            <div class="right" v-on:click='nextPage'></div>
        </div>
    </div>
    <MenuBar :ifTitleMenuShow='ifTitleMenuShow' 
             :fontSizeList='fontSizeList'
     :defaultFontsize='defaultFontsize' ref='menuBar'
     :themeList='themeList'
     :defaultTheme='defaultTheme'
     :bookAvaiable='bookAvaiable'
      :navigation='navigation'
     v-on:setFontSize='setFontSize'
     v-on:setTheme='setTheme'
     v-on:onProgressChange='onProgressChange'

     v-on:jumpTo='jumpTo'>  </MenuBar>
    </div>
</template>

<script>
 import Epub from 'epubjs'
 import TitleBar from './components/TitleBar'
 import MenuBar from './components/MenuBar'
 global.ePub=Epub 
 const DOWNLOAD_URL='../static/V358.epub'
export default {
  name: 'App',
  data(){
   return{
      ifTitleMenuShow: true,
      fontSizeList: [{
        fontsize: 12
      },
      {
        fontsize: 14
      },
      {
        fontsize: 16
      },
      {
        fontsize: 18
      },
      {
        fontsize: 20
      },
      {
        fontsize: 24
      }
    ],
    defaultFontsize: 16,
    themeList: [
      { name: 'default',
        style: {
          body:{
          'color': '#000',
          'background': '#fff'
        }
         }
      },
      { name: 'eye',
        style: {
          body:{
            ' color': '#000',
              'background': '#cebbaa'
          }    
        }
      },
      { name: 'night',
        style: {
          body:{
          'color': '#fff',
          'background': '#000'
        }
         }
      },
      { name: 'gold',
        style: {
          body:{
          'color': '#000',
         ' background': 'rgb(241,236,226)'
        }
         }
      }
     ],
     defaultTheme: 0,
     bookAvaiable: false,
     navigation: {}
   
      }

  },
  components: {
    TitleBar,
    MenuBar
 
  },
  methods: {
    showEpub(){
        this.book=new Epub(DOWNLOAD_URL);
        this.rendition=this.book.renderTo('read',{
        width: window.innerWidth,
        height: window.innerHeight
        });
        this.rendition.display();
      /*获取 theme 对象， 用来设置字体大小和主题*/
        this.themes=this.rendition.themes;
        this.setFontSize(this.defaultFontsize);
        this.registerTheme();
        this.setTheme(this.defaultTheme);
        /*通过epubjs 的钩子函数获取location， 用来定位*/
        this.book.ready.then(()=>{
          this.navigation=this.book.navigation;   
          return this.book.locations.generate();
        }).then(result=>{

          this.locations=this.book.locations;
          this.bookAvaiable=true;
          console.log(this.locations)
        })
    },
    prePage(){
      if(this.rendition){
          this.rendition.prev();
         
      }            
    },
    nextPage(){
      if(this.rendition){
          this.rendition.next();
      }    
    },
    /*父组件调用子组件函数*/
    toggleTitleMenu(){
       this.ifTitleMenuShow=!this.ifTitleMenuShow;
       if(!this.ifTitleMenuShow){
      
           this.$refs.menuBar.hideSetting();
       }
    },
    setFontSize(fontsize){
      this.defaultFontsize=fontsize;
      if(this.themes){
        this.themes.fontSize(this.defaultFontsize+'px');
       
      }
    },
    registerTheme(){
      console.log(this.themeList)
      this.themeList.forEach(theme=>{
        this.themes.register(theme.name,theme.style);
      
      })
    },
    setTheme(index){
      this.themes.select(this.themeList[index].name);
      this.defaultTheme=index;

    },
    onProgressChange(progress){
      const percentage = progress/100;
      console.log(this.locations)
      const location =percentage>0? this.locations.cfiFromPercentage(percentage): 0;
      this.rendition.display(location);

    },
    jumpTo(href){
      this.rendition.display(href);
      this.hideTitleMenu();
    },
    hideTitleMenu(){
      this.ifTitleMenuShow=false;
      /*调用子组件的方法*/
      this.$refs.menuBar.hideSetting();
      this.$refs.menuBar.hideContent();
    }
  },
  mounted(){
    this.showEpub();
  }
}


</script>

<style lang='scss' scoped>
   @import 'assets/style/global';
   .ebook {
      position: relative;
      .read-wrapper {
          .mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
             display: flex;
            .left {
              flex: 0 0 px2rem(80);             
            }
            .center {
              flex: 1;
            }
            .right {
              flex: 0 0 px2rem(80);            
            }
          }
      }
      
   }
</style>