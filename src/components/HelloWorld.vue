

<template>

  <div class="hello">
    <!--pc端界面的轮播图-->
 <!--    <div class="swpier">
      <div class="banner clear"  :style="{width:widthsh,minWidth:min_widthcd,left:leftPo}" style="background-size: 100% 100%;position:relative">
      <div v-if="!item.img3" v-for="(item,index) in swpier" class="banner_item left" style="background-size: 100% 100%;" :style="{backgroundImage: 'url(' +item.img1+')',width:item_width}" key="index">
          <h2 class="banner1">{{item.title}}</h2>
          <h3 class="banner2">{{item.content}}</h3>
        </div>
        <div v-if="item.img3" v-for="(item,index) in swpier" class="banner_item left" :style="{backgroundImage: 'url(' +item.img3+')'}" key="index">
          <h2>{{item.title}}</h2>
          <h3>{{item.content}}</h3>
          <h4>{{item.little}}</h4>
          <img :src='item.img4'>
        </div>
      </div>
    </div> -->
      <indexbanner></indexbanner>
    <!--产品优势-->
    <div class=" pc_advantage">
      <div class="pc_advantage_box">
        <!--产品优势-->
        <p class="pc_advantage_box_p1">产品优势</p>
        <span class="list_span phone_xiahuaxian1"></span>
        <p class="pc_advantage_box_p21 pc_advantage_box_p2">针对商家运营和运营活动开发的小程序制作平台，无需技术门槛，便可拥有更实用、更高频功能 的“小程序”，帮助商户的线上营销提升到新高度。</p>
        <!--产品优势的图标文字列表-->
        <ul class="pc_advantage_list clearfix">
          <li class="pc_advantage_li total_hide transition_de1">
            <img class="youshi_icon1" src="../images/yuanmu/adv1.png" alt="">
            <p class="pc_advantage_li_p1">电商系统</p>
            <div class="pc_advantage_li_p2">可以管理产品分类、添加产品、紧急下架产品等。</div>
          </li>
          <li class="pc_advantage_li pc_advantage_list_ml20 phone_youshi_li2 total_hide transition_de1">
            <img class="youshi_icon2" id="pc_advantage_li_img2" src="../images/yuanmu/adv2.png" alt="">
            <p class="pc_advantage_li_p1">信息直达</p>
            <div class="pc_advantage_li_p2">使用微信自身通知体系，商户活动直达用户，又不会造成干扰。</div>
          </li>
          <li class="pc_advantage_li pc_advantage_list_ml20 total_hide transition_de1">
            <img class="youshi_icon3" id="pc_advantage_li_img3" src="../images/yuanmu/adv3.png" alt="">
            <p class="pc_advantage_li_p1">即用即走</p>
            <div class="pc_advantage_li_p2">轻量化微信服务应用，每一功能操作步骤不超过两步。</div>
          </li>
          <li class="pc_advantage_li pc_advantage_list_ml20 phone_youshi_li2 total_hide transition_de1">
            <img class="youshi_icon3" id="pc_advantage_li_img4" src="../images/yuanmu/adv4.png" alt="">
            <p class="pc_advantage_li_p1">与微信内部功能互补</p>
            <div id="pc_advantage_li_pp4" class="pc_advantage_li_p2">原有的服务号/订阅号负责店铺推广、文章传播，而小程序则实现与用户交互，产生消费的过程。</div>
          </li>
        </ul>
      </div>
    </div>
    <!--=================PC端解决方案=================-->
    <div class="pc_solution">
      <div class="pc_solution_box">
        <p class="pc_advantage_box_p1">行业解决方案</p>
        <span class="list_span phone_xiahuaxian2"></span>
        <p class="pc_advantage_box_p22 pc_advantage_box_p2">针对不同的行业，提供专业的微信小程序服务方案</p>
        <div class="index_over">
          <ul class="pc_solution_list clearfix">
            <li class="pc_solution_li ">
              <img class="pc_solution_img1" src="../images/yuanmu/sol1.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor project_borr">
                <img class="pc_solution_li_icon1 phone_solution_li_icon1 wh2118" src="../images/yuanmu/solIcon1.png" alt="">
                <p class="pc_solution_li_p1">便利店</p>
              </div>

            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol2.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon2 phone_solution_li_icon1 wh2118" src="../images/yuanmu/solIcon2.png" alt="">
                <p class="pc_solution_li_p1">商超</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol3.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon3 phone_solution_li_icon1  wh1821 " src="../images/yuanmu/solIcon3.png" alt="">
                <p class="pc_solution_li_p1">餐饮</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol4.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon4 phone_solution_li_icon1 wh2019" src="../images/yuanmu/solIcon4.png" alt="">
                <p class="pc_solution_li_p1">娱乐公园</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol5.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon5 phone_solution_li_icon1 wh1721" src="../images/yuanmu/solIcon5.png" alt="">
                <p class="pc_solution_li_p1">婚纱影楼</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol6.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon6 phone_solution_li_icon1 wh1919" src="../images/yuanmu/solIcon6.png" alt="">
                <p class="pc_solution_li_p1">旅游</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol7.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon7 wh1818 phone_solution_li_icon1" src="../images/yuanmu/solIcon7.png" alt="">
                <p class="pc_solution_li_p1">家具建材</p>
              </div>
            </li>
            <li class="pc_solution_li">
              <img class="pc_solution_img1" src="../images/yuanmu/sol8.png" alt="">
              <div class="pc_solution_li_box pc_solution_li_bor">
                <img class="pc_solution_li_icon8 phone_solution_li_icon1 wh2017" src="../images/yuanmu/solIcon8.png" alt="">
                <p class="pc_solution_li_p1">酒店</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <!--==========================-->
    <!--============PC端服务模块============-->
    <div class=" pc_service">
      <div class="pc_service_box">
        <!--服务-->
        <p class="pc_service_box_p1">主动式服务</p>
        <span class="list_span2 phone_xiahuaxian3"></span>
        <p class="pc_service_box_p2">告别被动式服务，为每个客户提供一对一的保姆式服务</p>

        <div class="pc_service_box_list clearfix">
          <img class="pc_service_box_list_xian " src="../images/yuanmu/xian.png" alt="">
          <div class="pc_service_box_li total_hide transition_de1">
            <img class="pc_service_box_li_img" src="../images/yuanmu/ser1.png" alt="">
            <p class="pc_service_box_li_p1">打通微信 互联升级</p>
            <p class="pc_service_box_li_p2">打通微信应用号，升级公众号功能 模板化创建，完美结合时代潮流</p>
          </div>
          <div class="pc_service_box_li total_hide transition_de1">
            <img class="pc_service_box_li_img" src="../images/yuanmu/ser2.png" alt="">
            <p class="pc_service_box_li_p1">行业广泛 模板多样</p>
            <p class="pc_service_box_li_p2">涵盖多种行业，商家轻松选择 多样化组件 最大程度满足商家个性化需求</p>
          </div>
          <div class="pc_service_box_li total_hide transition_de1">
            <img class="pc_service_box_li_img" src="../images/yuanmu/ser3.png" alt="">
            <p class="pc_service_box_li_p1">专业设计 精致互动</p>
            <p class="pc_service_box_li_p2">专注移动平台应用开发，重构轻盈互动 轻设计理念 世界触手可及</p>
          </div>
          <div class="pc_service_box_li total_hide transition_de1">
            <img class="pc_service_box_li_img" src="../images/yuanmu/ser4.png" alt="">
            <p class="pc_service_box_li_p1">线上支付 轻松购物</p>
            <p class="pc_service_box_li_p2">微信担保交易，出入账明细 灵活购物车，开启愉快购物体验</p>
          </div>
        </div>
      </div>
    </div>
    <!--============PC端成功案例=============-->
    <div class=" pc_case">
      <div class="pc_case_box">
        <p class="pc_advantage_box_p1">成功案例</p>
        <span class="list_span phone_xiahuaxian1"></span>
        <p class="pc_advantage_box_p23  pc_advantage_box_p2">可借鉴的实践案例，让用户乐在社群中</p>
        <ul id="exampleList" class="pc_case_box_list clearfix">
        </ul>
        <a href="example.html" class="pc_case_more">
          <p class="more_p">查看更多</p><img class="more_img" src="../images/yuanmu/jiantou.png" alt=""></a>
        </div>
      </div>
    </div>
  </template>

  <script>
  import indexbanner from '../../components/tpl/banner'
    export default {
      name: 'hello',
      components: {
        indexbanner
      },
      data () {
        return {
         swpier:[
          {
            img1:'static/banner_index_1.png',
            img2:'static/images/index_banner/banner_index_2.png',
            title:'店,无处不在',
            content:'又触手可及',
          },
          {
            img3:'static/images/yuanmu/banner2_bg.png',
            img4:'static/images/yuanmu/banner2.icon.png',
            title:'"天下店家"微信广告解决方案',
            content:'让您轻松获取目标用户',
          },
          {
            img3:'static/images/yuanmu/phone/banner3_bg.png',
            img4:'static/images/yuanmu/banner3.icon.png',
            title:'微信公众号',
            content:'开启商家互动营销新场景',
            little:'INTERACTIVE MARKETING'
          },
          {
            img3:'static/images/yuanmu/banner_bg4.png',
            img4:'static/images/yuanmu/banner4.icon.png',
            title:'微信支付解决方案',
            content:'让您的店铺便捷交易',
          },
         ],
          width: 100+'%',
          min_width:1200+'px',
          color_x:"#000",
          banner_postion:0
       }
     },
     computed:{
     widthsh(){
      return this.swpier.length*100+'%'
     },
       min_widthcd(){
         return this.swpier.length*1200+'px'
       } ,
       item_width(){
        return 100/this.swpier.length+'%'
       },
       leftPo(){
        return this.banner_postion+'%'
       }
     },
     watch:{

     },
     methods:{
       
     }
   }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
  @media screen and (min-width: 750px){
    .hello{
      padding-top: 90px;
    }
    .swpier{
      width: 100%;
    }
    .banner{
      width: 100%;
      height: 560px;
      
    }
    .banner_item{
      width: 25%;
      height: 560px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      color: #fff;
      position: relative;
    }
    .banner1{
          position: absolute;
    font-size: 36px;
    line-height: 36px;
    color: #ffffff;
    top: 100px;
    left: 50%;
    }
    .banner2{
          position: absolute;
    font-size: 72px;
    line-height: 72px;
    color: #ffffff;
    top: 180px;
    left: 50%;
    }
    /*=============产品优势==============*/

    .pc_advantage {
      width: 100%;
      height: 650px;
      min-width: 1200px;
    }

    .pc_advantage_box {
      padding-top: 80px;
      width: 1200px;
      height: 650px;
      margin: 0 auto;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .pc_advantage_box_p1 {
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      color: #333333;
    }

    .list_span {
      display: block;
      width: 40px;
      height: 1px;
      margin: 0 auto;
      margin-top: 10px;
      background-color: #cccccc;
    }

    .pc_advantage_box_p2 {
      margin: 0 auto;
      margin-top: 15px;
      width: 588px;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      color: #888888;
    }

    .pc_advantage_list {
      margin: 75px 10px 0 10px;
      height: 290px;
    }

    .pc_advantage_li:hover {
      margin-top: -20px;
      -webkit-box-shadow: 0 5px 15px #dddddd;
      -moz-box-shadow: 0 5px 15px #dddddd;
      box-shadow: 0 5px 15px #dddddd;
    }

    .pc_advantage_li {
      width: 278px;
      height: 288px;
      border: 1px solid #dddddd;
      border-radius: 5px;
      float: left;
      -webkit-transition: margin 0.1s, box-shadow .1s;
      -moz-transition: margin 0.1s, box-shadow .1s;
      -ms-transition: margin 0.1s, box-shadow .1s;
      -o-transition: margin 0.1s, box-shadow .1s;
      transition: margin 0.1s, box-shadow .1s;
    }

    .pc_advantage_list_ml20 {
      margin-left: 20px;
    }

    .pc_advantage_li>img {
      display: block;
      margin: 0 auto;
      margin-top: 50px;
      width: 59px;
      height: 54px;
    }

    .pc_advantage_li_p1 {
      margin-top: 38px;
      font-size: 20px;
      line-height: 20px;
      font-weight: bold;
      color: #333333;
      text-align: center;
    }

    .pc_advantage_li_p2 {
      margin: 0 auto;
      padding: 0;
      margin-top: 20px;
      width: 200px;
      font-size: 14px;
      color: #888888;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #pc_advantage_li_img2 {
      width: 70px;
    }

    #pc_advantage_li_img3 {
      width: 70px;
    }

    #pc_advantage_li_img4 {
      width: 61px;
    }

    #pc_advantage_li_pp4 {
      width: 220px;
    }

    /*===========PC端解决方案==============*/

    .pc_solution {
      width: 100%;
      height: 650px;
      background-color: #f1f1f1;
      min-width: 1200px;
    }

    .pc_solution_box {
      width: 1200px;
      height: 650px;
      padding-top: 80px;
      margin: 0 auto;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .pc_solution_list {
      width: 1120px;
      height: 330px;
      margin: 0 auto;
      margin-top: 50px;
      transition: width .8s;
      -webkit-transition: width .8s;
      -moz-transition: width .8s;
    }

    .pc_solution_list:hover {
      width: 1250px;
    }

    .pc_solution_li {
      float: left;
      height: 330px;
      width: 140px;
      overflow: hidden;
      transition: width .8s;
      -webkit-transition: width .8s;
      -moz-transition: width .8s;
      background-color: #ffffff;
      position: relative;
    }

    .pc_solution_li:hover {
      width: 220px;
    }


    /*.pc_solution_img1{*/


      /*position: absolute;*/


      /*left: 50%;*/


      /*top: 0;*/


      /*transform: translateX(-50%);*/


      /*}*/

      .pc_solution_li_box {
        width: 100%;
        height: 80px;
        box-sizing: border-box;
      }

      .pc_solution_li_icon1 {
        width: 21px;
        height: 18px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_p1 {
        width: 100%;
        text-align: center;
        font-size: 18px;
        color: #3a3a3a;
        position: absolute;
        top: 290px;
      }

      .pc_solution_li_bor {
        border-right: 1px solid #f1f1f1;
      }

      .pc_solution_li_icon2 {
        width: 21px;
        height: 18px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon3 {
        width: 18px;
        height: 21px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon4 {
        width: 20px;
        height: 19px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon5 {
        width: 17px;
        height: 21px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon6 {
        width: 19px;
        height: 19px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon7 {
        width: 18px;
        height: 18px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_solution_li_icon8 {
        width: 20px;
        height: 17px;
        position: absolute;
        left: 50%;
        top: 270px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }


      /*PC端服务模块*/

      .pc_service {
        width: 100%;
        height: 580px;
        min-width: 1200px;
        background-color: #313131;
      }

      .pc_service_box {
        padding-top: 80px;
        margin: 0 auto;
        width: 1200px;
        height: 580px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      .pc_service_box_p1 {
        text-align: center;
        font-size: 40px;
        color: #ffffff;
        line-height: 40px;
      }

      .list_span2 {
        display: block;
        width: 40px;
        height: 1px;
        margin: 0 auto;
        margin-top: 10px;
        background-color: #5a5a5a;
      }

      .pc_service_box_p2 {
        margin: 0 auto;
        margin-top: 15px;
        width: 588px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        color: rgba(256, 256, 256, .8);
      }

      .pc_service_box_list {
        margin: 0 10px;
        height: 220px;
        position: relative;
        margin-top: 140px;
      }

      .pc_service_box_list_xian {
        position: absolute;
        left: 50%;
        top: 0;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_service_box_li {
        width: 25%;
        height: 220px;
        position: relative;
        float: left;
      }

      .pc_service_box_li_img {
        position: absolute;
        display: block;
        width: 82px;
        height: 82px;
        margin: 0 auto;
        top: -41px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .pc_service_box_li_p1 {
        position: absolute;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
        width: 100%;
        top: 75px;
      }

      .pc_service_box_li_p2 {
        position: absolute;
        font-size: 14px;
        line-height: 20px;
        color: rgba(256, 256, 256, .66);
        text-align: center;
        width: 256px;
        top: 120px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }


      /*PC端案例模块*/

      .pc_case {
        width: 100%;
        height: 580px;
        overflow: hidden;
        min-width: 1200px;
      }

      .pc_case_box {
        width: 1200px;
        margin: 0 auto;
        height: 580px;
        padding-top: 80px;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      .pc_case_box_list {
        margin: 50px 10px 0;
      }

      .pc_case_box_list>li {
        margin-right: 15px;
      }

      .pc_case_box_li {
        width: 278px;
        height: 198px;
        float: left;
        border: 1px solid #eeeeee;
        position: relative;
      }

      .pc_case_box_li_p {
        font-size: 16px;
        line-height: 20px;
        margin-top: 21px;
        text-align: center;
        color: #333333;
      }

      .pc_case_box_li_img {
        display: inline-block;
        width: 278px;
        height: 138px;
      }

      .pc_case_box_li_zz {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 999;
        display: none;
      }

      .pc_case_box_li_zz_img {
        width: 158px;
        height: 158px;
        margin: 22px 0 0 62px;
      }

      .ml {
        margin-left: 20px;
      }

      .pc_case_more {
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        width: 150px;
        height: 40px;
        line-height: 40px;
        background-color: #EF3939;
        text-align: center;
        border-radius: 75px;
        position: relative;
        overflow: hidden;
        transition: width .3s;
        /*box-shadow: 5px 5px 10px #888888;*/
      }

      .pc_case_more:hover {
        color: #ffffff;
        width: 155px;
      }

      .more_p {
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        left: 40px;
      }

      .more_img {
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 18px;
        right: 30px;
        bottom: -20px;
      }

      .swiper-pagination-bullet-active {
        background-color: #EF3939 !important;
      }

      .swiper-pagination-bullet {
        background-color: #ffffff;
        opacity: 1!important;
      }


    }

  @media screen and (max-width: 749px){
      .hello{
        width: 7.5rem;
        overflow: hidden;
      }

      /*手机端产品优势*/
      .pc_advantage{
        width: 100%;
        padding-top: .7rem;
        padding-bottom: .8rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .pc_advantage_box_p1{
        font-size: .48rem;
        line-height: .48rem;
        color: #333333;
        text-align: center;
      }
      .phone_xiahuaxian1{
        display: block;
        width: .4rem;
        height: .03rem;
        margin: 0 auto;
        margin-top: .15rem;
        background-color: #5a5a5a;
      }
      .pc_advantage_box_p21{
        font-size: .26rem;
        line-height: .4rem;
        width: 6.22rem;
        margin: 0 auto;
        text-align: center;
        margin-top: .1rem;
        color: #888888;
      }
      .pc_advantage_list{
        margin: 0.2rem .3rem 0 .3rem;
      }
      .pc_advantage_li{
        width: 3.28rem;
        height: 3.38rem;
        border: 1px solid #dddddd;
        border-radius: .1rem;
        float: left;
        margin-top: .3rem;
      }
      .youshi_icon1{
        margin: 0 auto;
        margin-top: .4rem;
        display: block;
        width: .7rem;
        height: .64rem;
      }
      .phone_youshi_li2{
        width: 3.28rem;
        height: 3.38rem;
        border: 1px solid #eeeeee;
        border-radius: .1rem;
        float: right;
        margin-top: .3rem;
      }
      .pc_advantage_li_p1{
        font-size: .3rem;
        line-height: .3rem;
        margin-top: .26rem;
        color: #333333;
        text-align: center;
        font-weight: bold;
      }
      .pc_advantage_li_p2{
        font-size: .24rem;
        line-height: .3rem;
        color: #888888;
        margin: 0 auto;
        margin-top: .28rem;
        width: 2.65rem;
        text-align: center;
      }
      .youshi_icon2{
        margin: 0 auto;
        margin-top: .44rem;
        display: block;
        width: .8rem;
        height: .6rem;
      }
      .youshi_icon3{
        margin: 0 auto;
        margin-top: .35rem;
        display: block;
        width: .85rem;
        height: .75rem;
      }
      /*行业解决方案*/
      .pc_solution{
        width: 100%;
        padding: .8rem 0 .9rem 0;
        background-color: #f1f1f1;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .pc_advantage_box_p1{
        font-size: .48rem;
        line-height: .5rem;
        text-align: center;
        color: #333333 ;
      }
      /*手机端第二种下户线*/
      .phone_xiahuaxian2{
        display: block;
        width: .4rem;
        height: .03rem;
        margin: 0 auto;
        margin-top: .15rem;
        background-color: #c1c1c1;
      }
      .pc_advantage_box_p22{
        font-size: .22rem;
        line-height: .3rem;
        margin: 0 auto;
        margin-top: .15rem;
        text-align: center;
        color: #888888;
      }
      /*行业解决方案*/
      .pc_solution{
        width: 100%;
        padding: .8rem 0 .9rem 0;
        background-color: #f1f1f1;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .pc_advantage_box_p1{
        font-size: .48rem;
        line-height: .5rem;
        text-align: center;
        color: #333333 ;
      }
      /*手机端第二种下户线*/
      .phone_xiahuaxian2{
        display: block;
        width: .4rem;
        height: .03rem;
        margin: 0 auto;
        margin-top: .15rem;
        background-color: #c1c1c1;
      }
      .pc_advantage_box_p22{
        font-size: .22rem;
        line-height: .3rem;
        margin: 0 auto;
        margin-top: .15rem;
        text-align: center;
        color: #888888;
      }
      /*解决方案的轮播*/
      .pc_solution_list{
        margin-top: .4rem;
        width: 16rem;

      }
      .pc_solution_li{
        width: 2rem;
        box-sizing: border-box;
        float: left;
      }
      .pc_solution_img1{
        width: 2rem;
        height: 2.5rem;
      }
      .pc_solution_li_box{
        background-color: #ffffff;
        padding-bottom: .2rem;
        padding-top: .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .phone_solution_li_icon1{
        display: block;
        margin: 0 auto;
      }
      .pc_solution_li_p1{
        margin-top: .1rem;
        font-size: .28rem;
        text-align: center;
        color: #3a3a3a;
      }
      .project_borr{
        border-right: 1px solid #f1f1f1;
      }
      .index_over {
        width: 100%;
        overflow-y: hidden;
      }
      .index_over::-webkit-scrollbar {display:none}

      /*手机端服务模块*/
      .pc_service{
        width: 100%;
        padding-top: .7rem;
        background-color: #313131;
        padding-bottom: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .pc_service_box_p1{
        font-size: .48rem;
        line-height: .5rem;
        color: #ffffff;
        text-align: center;
      }
      /*手机端第二种下划线*/
      .phone_xiahuaxian3{
        display: block;
        width: .4rem;
        height: .03rem;
        margin: 0 auto;
        margin-top: .15rem;
        background-color: #5a5a5a;
      }
      .pc_service_box_p2{
        font-size: .26rem;
        color: rgba(256,256,256,.8);
        text-align: center;
        margin-top: .2rem;
      }
      .pc_service_box_list{
        margin: .5rem .3rem 0 .3rem;
      }
      .pc_service_box_li{
        width: 50%;
        height: 4.4rem;
        float: left;
        box-sizing: border-box;
      }
      .pc_service_box_li_img{
        display: block;
        width: 1.24rem;
        height: 1.24rem;
        margin: 0 auto;
        margin-top: .6rem;
      }
      .pc_service_box_li_p1{
        font-size: .28rem;
        color: #ffffff;
        margin-top: .38rem;
        text-align: center;
      }
      .pc_service_box_list_xian{
        display: none;
      }
      .pc_service_box_li_p2{
        width: 2.8rem;
        margin: 0 auto;
        font-size: .22rem;
        color: rgba(256,256,256,.66);
        margin-top: .2rem;
        text-align: center;
      }


      /*手机端的成功案例*/
      .pc_case{
        padding-top: .76rem;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .phone_case_p1{
        font-size: .48rem;
        line-height: .48rem;
        color: #333333;
        text-align: center;
      }
      .pc_advantage_box_p23{
        margin-top: .18rem;
        font-size: .26rem;
        line-height: .25rem;
        color: #888888;
        text-align: center;
        margin-bottom: .3rem;
      }
      .phone_case_list{
        margin: .58rem .3rem 0 .3rem;
      }
      .pc_case_box_li{
        margin-top: .3rem ;
        width: 3.3rem;
        height: 2.34rem;
        border: .01rem solid #f3f3f3;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
      }
      .phone_case_float1{
        float: left;
        margin-left: .3rem;
      }
      .phone_case_float2{
        float: right;
        margin-right: .3rem;
      }
      .pc_case_box_li_img{
        width: 3.3rem;
        height: 1.65rem;
      }

      .pc_case_box_li_p{
        margin-top: .2rem;
        font-size: .22rem;
        color: #333333;
        text-align: center;
        line-height: .22rem;
      }
      .pc_case_box_li_zz{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 999;
      }

      .pc_case_box_li_zz>img{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50% ,-50%);
        -moz-transform: translate(-50% ,-50%);
        -ms-transform: translate(-50% ,-50%);
        -o-transform: translate(-50% ,-50%);
        transform: translate(-50% ,-50%);
      }



      .li_block{
        display: block;
      }

      .pc_case_box_li_zz_img{
        display: none;
      }
      .pc_case_more{
        display: block;
        margin: 0 auto;
        margin-top: .4rem;
        margin-bottom: .4rem;
        width: 2.25rem;
        height: .6rem;
        background-color: #EF3939;
        border-radius: .5rem;
        color: #ffffff;
        font-size: .3rem;
        text-align: center;
        line-height: .6rem;
      }
      .pc_min{
       min-width: 1200px;
     }
     .pc_min2{
      min-width: 1400px;
      }
      .wh2118{
        width: .21rem;
        height: .18rem;
      }
      .wh1821{
        width: .18rem;
        height: .21rem;
      }
      .wh2019{
        width: .2rem;
        height: .19rem;
      }
      .wh1721{
        width: .17rem;
        height: .21rem;
      }
      .wh1919{
        width: .19rem;
        height: .19rem;
      }
      .wh1818{
        width: .18rem;
        height: .18rem;
      }
      .wh2017{
        width: .2rem;
        height: .17rem;
      }
  }
</style>
