<template>
	<div id="header">
		<!--顶部导航-->
		<div class="pc_top clearfix pc_box">
			<!--顶部导航的左侧logo-->
			<div class="pc_top_left">
				<a href="" class="pc_top_left_a">
					<img src="../../images/LOGO.png" alt=""  >
				</a>
			</div>
			<!--顶部导航中间的列表-->
			<div class="pc_top_center clearfix">
				<router-link v-for="(item, index) in top" class="pc_top_list slider_list_act" :to="{path:item.type}" @click.native='tab' v-model="clickValue" :data-id='index' :class="{pc_top_list_bor:index==clickValue}" :key='index'>{{item.name}}</router-link>
			</div>
			<!--顶部导航的右侧的电话-->
			<div class="pc_top_right clearfix">
				<img class="pc_top_right_img" src="../../images/pc_tel.png" alt="">
				<p class="pc_top_right_p">400-8827-898</p>
			</div>
		</div>

		<!--=============手机界面=====================-->
		<!--手机顶部导航-->
		<div class="tel_box tel_top clearfix">
			<a class="tel_top_a" href="">
				<img src="../../images/LOGO_tel.png" alt="">
			</a>

			<div class="tel_top_right" @click="showZ">
				<img  src="../../images/open.png" alt="" class="switch_slider">
			</div>
		</div>
		<!--遮罩层-->
		<div class="tel_box w_100 zhezhao" :class="{block:show_ma,none:!show_ma}" id="shade" :style="{height:screenHeight+'px'}" @click="showZ"></div>
		<!--侧边导航-->
		<div  id="slider" class="tel_box slider transition_slid" :class="{siler_out:show_ma,siler_in:!show_ma}" :style="{height:screenHeight+'px'}">
			<!--侧边栏第一行-->
			<div class="slider_one clearfix slider_border">
				<img class="switch_slider" src="../../images/close.png" alt="" @click="showZ">
			</div>
			<!--侧边栏第1行-->
			<router-link  class="slider_list slider_border " to="/"  @click.native="showZ">首页 </router-link>
			<!--侧边栏第2行-->
			<a class="slider_list slider_border " href="/product"  @click.native="showZ">
				产品中心
			</a>
			<!--侧边栏第3行-->
			<a class="slider_list slider_border" href="/cexample" @click.native="showZ">
				案例展示
			</a>
			<!--侧边栏第4行-->
			<a class="slider_list slider_border" href="/severSupport" @click.native="showZ">
				服务支持
			</a>
			<!--侧边栏第5行-->
			<a class="slider_list slider_border" href="/aboutUs" @click.native="showZ">
				关于我们
			</a>
			<!--侧边栏第6行-->
			<a class="slider_list slider_border" href="/cooperation" @click.native="showZ">
				合作加盟
			</a>

			<!--侧边栏的电话显示-->
			<div class="slider_phone">
				<img class="slider_phone_img" src="../../images/yuanmu/phone_tel.png" alt="">
				<span class="slider_phone_span">400-8827-898</span>
			</div>
		</div>

	</div>
</template>
<script>

	export default{
		name:'header',
		data (){
			return {
				top:[
					{
						type:'/',
						name:'首页',
					},
					{
						type:'/product',
						name:'产品中心',
					},
					{
						type:'/cexample',
						name:'案例展示',
					},
					{
						type:'/severSupport',
						name:'服务支持',
					},
					{
						type:'/aboutUs',
						name:'关于我们',
					},
					{
						type:'/cooperation',
						name:'合作加盟',
					},
				],
				clickValue:0,
				show_ma:false,
				screenWidth: document.body.clientWidth,
				screenHeight:document.documentElement.clientHeight,
			}
		},
		methods:{
			tab(e){	
				this.clickValue=parseInt(e.target.getAttribute('data-id'))
			},
			showZ(){
				let change=this.show_ma
				this.show_ma=!change
			}
		}
	}
</script>
<style>
body{
	height: 100%;
}
.block{
	display: block;
}
.w_100{
	width: 100%;
}
.none{
	display: none;
}
@media screen and (min-width: 750px) {
 	#header {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #ffffff;
		border-bottom: 1px solid #dddddd;
	}

	.pc_top {
		width: 1200px;
		height: 90px;
		margin: 0 auto;
		min-width: 1200px;
	}

	.pc_top_left {
		float: left;
		width: 200px;
		height: 90px;
	}

	.pc_top_left_a {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.pc_top_left_a>img {
		height: 46px;
		width: 185px;
		margin-top: 22px;
	}

	.pc_top_center {
		float: left;
		height: 90px;
		margin-left: 100px;
	}

	.pc_top_list {
		float: left;
		font-size: 16px;
		line-height: 89px;
		padding: 0 22px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.pc_top_list:hover {
		color: #EF3939;
		cursor: pointer;
	}

	.pc_top_list_bor {
		color: #ef3939 !important;
	}

	.pc_top_right {
		float: left;
		height: 90px;
		margin-left: 50px;
	}

	.pc_top_right_img {
		width: 18px;
		height: 23px;
		margin-top: 33px;
		float: left;
	}

	.pc_top_right_p {
		float: left;
		font-size: 16px;
		line-height: 90px;
		margin-left: 10px;
	}

	.pc_login {
		float: left;
		width: 58px;
		height: 24px;
		border: 1px solid #b2b2b2;
		border-radius: 12px;
		text-align: center;
		font-size: 14px;
		color: #333333;
		margin: 33px 0 0 30px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	} 
	.tel_box{
		display: none
	}
}
@media screen and (max-width: 749px){
	.tel_box{
		border-bottom: .01rem solid #b2b2b2
	}
	.pc_top{
		display: none
	}

.pc_box{
    display: none !important;
}

.tel_top{
    width: 100%;
    height: 1.2rem;
}
.tel_top_a{
    float: left;
    display: inline-block;
    width: 2.4rem;
    height: .6rem;
    margin-left: .3rem;
    margin-top: .3rem;
}
.tel_top_a>img{
    display: block;
    width: 100%;
    height: 100%;
}
.tel_top_right{
    float: right;
    margin-right: .3rem;
    width: .48rem;
    height: .3rem;
    margin-top: .45rem;
}
.tel_top_right>img{
    display: block;
    width: 100%;
    height: 100%;
}
/*侧边栏*/
.slider{
    position: fixed;
    top: 0;
    background-color: #ffffff;
    z-index: 999;
    width: 5rem;
    border-left: 1px solid #dddddd;

}
.siler_in{
	right: -5rem;
}
.siler_out{
	right: 0rem;
}
.transition_slid{
	transition: all .1s linear;
}
/*侧边栏底部边框*/
  .slider_border{
      border-bottom: 1px solid #dddddd;
  }
.slider_one{
    width: 5rem;
    height: 1.2rem;
}
.slider_one>img{
    float: right;
    margin-right: .36rem;
    width: .35rem;
    height: .35rem;
    margin-top: .42rem;
}
/*手机界面侧边栏的列表*/
.slider_list{
    padding: .35rem 0 .35rem .4rem;
    font-size: .3rem;
    line-height: .3rem;
    color: #333333;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
/*手机界面侧边栏 手机显示*/
.slider_phone{
    position: relative;
    margin:2rem 0 0 .3rem;
    width: 4.38rem;
    height: 1.04rem;
    border: 1px solid #dddddd;
    vertical-align: middle;
}
.slider_phone_img{
    position: absolute;
    display: inline-block;
    top:.29rem;
    left: .35rem;
    /*margin: .29rem 0 0 .35rem;*/
    width: .36rem;
    height: .46rem;
}
.slider_phone_span{
    position: absolute;
    top: .34rem;
    left: .9rem;
    display: inline-block;
    font-size: .36rem;
    line-height: .36rem;
    /*margin: .34rem 0 0 .2rem;*/
}
.zhezhao{
	position: fixed;
	top: 0;
	background: rgba(0,0,0,.5);
	z-index: 100
}
l_top_right:hover{
	cursor: pointer;
}
#slider .slider_list {
	width: 100%;
	display: block;
}
.introduce_view{
	width: 6.9rem;
	padding-top: .3rem;
	margin: 0 auto;

}
.introduce_view>div{
	float: left;
	width: 50%;
	border-radius: .04rem;
	box-sizing: border-box;
	padding-top: .4rem;
	text-align:center ;
}
.w60h60{
	width: .6rem;
	height: .6rem;

}
.introduce_view p{
	font-size: .26rem;
	color:#888;
}
}
</style>