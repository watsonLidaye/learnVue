<template>
	<div class="footer">

		<div class="footer_header clear">
			<div class="left">
				<ul class="footer_header_ul clear">
					<li>
						<router-link to="/">首页</router-link>
					</li>
					<li>
						<router-link to="/product" >产品中心</router-link>
					</li>
					<li>
						<router-link to="/cexample">案例中心</router-link>
					</li>
					<li>
						<router-link to="/severSupport">服务支持</router-link>
					</li>
					<li>
						<router-link to="/aboutUs">关于我们</router-link>
					</li>
					<li>
						<router-link to="/cooperation">合作联盟</router-link>
					</li>
				</ul>
				<div class="footer_header_text">
					<p>地址:长沙高新区文轩路27号麓谷企业广场A4栋406 </p>
					<p>邮编:410205</p>
					<p>邮箱:support@e2862.com</p>
				</div>
			</div>
			<div class="left  footer_header_join">
				<p>服务热线</p>
				<p>400-8827-898</p>
				<router-link to="/joinUs">加入我们</router-link>
			</div>
			
			<div class="left  footer_header_qr clearfix">
				<div class="foot_img_box1 foot_img_box">
					<img src="../../images/qr01.jpg"/>
					<p>“天下店家”公众号</p>
				</div>
				<div class="foot_img_box2 foot_img_box">
					<img src="../../images/lipeifeng/02.png"/>
					<p>“天下店家”小程序</p>
				</div>
			</div>
		</div>
		<div class="footer_bottom">
			<div >
				Copyright©2017  湖南大业创展科技有限公司 版权所有

				<span class="phone_hide ml30">备案号：湘ICP备17006867号-1</span>
			</div>
			<div class="pc_hide">
				备案号：湘ICP备17006867号-1
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'header',
		data (){
			return {

			}
		},
		methods: {
			tab(){
				console.log('点击了')
			}
		},
	}
</script>
<style>
	@media screen and (min-width: 750px){

		.footer {
			width: 100%;
			min-width: 1200px;
			background: #f1f1f1;
			border-top: 2px solid #d8d8d8;
		}

		.footer_header {
			width: 1180px;
			height: 100%;
			margin: 0 auto;
			position: relative;
			text-align: center;
			padding-top: 30px;
			padding-bottom: 20px;
		}

		.footer_header>div:first-child,
		.footer_header>div:last-child {
			width: 40%;
		}

		.footer_header>div:nth-child(2) {
			width: 20%;
		}

		.footer_header_ul {
			margin-bottom: 25px;
		}

		.footer_header_ul>li {
			float: left;
			font-size: 14px;
			color: #3a3a3a;
			padding: 0 10px;
			border-right: 1px solid #ddd;
		}

		.footer_header_ul>li:first-child {
			padding-left: 0;
		}

		.footer_header_ul>li:last-child {
			border: 0;
		}

		.footer_header_ul>li a {
			color: #3a3a3a;
		}

		.footer_header_text {
			color: #3a3a3a;
			font-size: 14px;
			text-align: left;
		}

		.footer_header_text p {
			margin-bottom: 15px;
		}

		.footer_header_join {
			text-align: center;
			font-size: 14px;
		}

		.footer_header_join p:first-child {
			margin-bottom: 10px;
		}

		.footer_header_join p:nth-child(2) {
			margin-bottom: 28px;
			font-size: 24px;
		}

		.footer_header_join a {
			width: 150px;
			height: 34px;
			line-height: 34px;
			border-radius: 17px;
			background: #fff;
			font-size: 16px;
			display: inline-block;
			transition: all .4s ease;
		}
		.footer_header_join a:hover {
			cursor: pointer;
			color: #fff;
			background: #ef3939;
		}
		.inline-block {
			display: inline-block;
		}

		.footer_header_qr {
			font-size: 14px;
			text-align: right;
		}
		.footer_header_qr img {
			width: 113px;
			height: 116px;
		}
		.footer_header_qr p {
			width: 100%;
			text-align: center;
		}

		.footer_header_qr>div:first-child {
			margin-right: 65px;
		}
		.foot_img_box{
			float: left
		}
		.footer_bottom {
			width: 100%;
			min-width: 1200px;
			height: 50px;
			background: #3a3a3a;
		}
		.social_bottom img{
			width: 86px;
			height: 86px;
		}


		.footer_bottom div {
			line-height: 50px;
			margin: 0 auto;
			width: 1180px;
			font-size: 14px;
			color: #fff;

		}
		.ml30{
			margin-left: 30px;
		}
	}
	@media screen and (max-width:749px){

		.footer {
			width: 100%;
			background: #f1f1f1;
			border-top: .03rem solid #eee;
		}

		.footer_header {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			position: relative;
			text-align: center;
			padding-top: .52rem;
			padding-bottom: .34rem;

		}
		.example_qr img{
			width: 4rem;
			height: 4rem;
		}

		.footer_header>div:first-child
		{
			width: 100%;
		}

		.footer_header>div:nth-child(2) {
			width: 20%;
			display: none;
		}

		.footer_header_ul {
			margin-bottom: .25rem;
			margin: 0 auto;
			width: 6.9rem;
			padding-bottom: .48rem;
			border-bottom: .03rem solid #bfbfbf;
		}

		.footer_header_ul>li {
			float: left;
			font-size: .24rem;
			color: #3a3a3a;
			padding: 0 ;
			border-right: 0;
			text-align: left;
			padding-right: .25rem;
		}

		.footer_header_ul>li:first-child {
			padding-left: 0;

		}

		.footer_header_ul>li:last-child {
			border: 0;
			padding-right: 0rem;
		}

		.footer_header_ul>li a {
			color: #3a3a3a;
			font-size: .24rem;
		}

		.footer_header_text {
			color: #3a3a3a;
			font-size: .22rem;
			text-align: left;
			padding-left: .32rem;
			padding-top: .35rem;
		}

		.footer_header_text p {
			margin-bottom: .15rem;
		}
		.footer_header_text p:first-child {
			margin-bottom: .15rem;
		}
		.footer_header_join {
			text-align: center;
			font-size: .14rem;
		}

		.footer_header_join p:first-child {
			margin-bottom: .1rem;
		}

		.footer_header_join p:nth-child(2) {
			margin-bottom: .28rem;
			font-size: .24rem;

		}

		.footer_header_join p:last-child {
			width: 1.5rem;
			height: .34rem;
			line-height: .34rem;
			border-radius: .17rem;
			background: #fff;
			font-size: .16rem;
			display: inline-block;
		}
		.inline-block{
			display: inline-block;
		}
		.footer_header_qr{
			position: absolute;
			right: .3rem;
			bottom: .15rem;
		}
		.footer_header_qr p{
			font-size: .18rem;
		}
		.footer_header_qr img{
			width: 1.16rem;
			height: 1.16rem;
		}
		.footer_header_qr>div:first-child{

			display: none;
		}
		.footer_bottom{
			width: 100%;
			background: #3a3a3a;
			padding: .2rem 0;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}
		.footer_bottom div{
			line-height: .5rem;
			margin: 0 auto;
			width: 6.9rem;
			font-size: .2rem;
			color: #fff;
			text-align: center;
		}

		.phone_hide{
			display: none;
		}

	}
</style>