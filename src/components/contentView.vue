<template>
	<transition name='slide-right'>
	<div class="content">
		<div class="content-wrapper" v-if='bookAvaiable'>
			<div class="content-item" v-for='(item,index) in navigation.toc'
			  v-on:click='jumpTo(item.href)'>
				<span class="text">{{item.label}}</span>
			</div>
		</div>
		<div class="empty" v-else>加载中...</div>
	</div>
	</transition >
</template>	
<script type="text/javascript">
	export default {
		props:{
			'ifShowContent': Boolean,
			'navigation': Object,
			'bookAvaiable': Boolean
		},
		methods: {
			jumpTo(target){
				this.$emit('jumpTo',target);
			}
		}
	}
</script>
<style lang='scss' scoped>
@import '../assets/style/global';
	.content {
		 position: absolute;
        top: 0;
        left: 0;
		       
        z-index: 102;
        display: flex;
        width: 70%;
        height: 100%;
        background: white;
        .content-wrapper .content-item {
          height: px2rem(14);
        	span {
        	 font-size: px2rem(12);
            }
       
		}
		
        
	}
</style>