<template>
  <div id="app">
  <!-- header 头部 -->
    <div class="headerDiv">
        <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img class="left" src="./images/u1828.png" alt="">
              </div>
            </el-col>
            <el-col :span="10">
               <div class="messageBox" @click="bindMessageEvent()">

               <el-badge :value="msgCount" class="item">
                <img src="./images/leftbar-icon3-normal.png" alt="">
               </el-badge>

              </div>
            </el-col>
            <el-col :span="6">
              <div class="">
                  <div>
                    <!-- <span class="userPic"></span> -->
                    <!-- <img src="./images/user.jpg" style="width: 42px; float:left; margin-top:4px; border-radius:25px; display:inline-block;" /> -->
                    <span class="userNameBox">你好！{{nusername}}</span>
                    <span  class="exitpic" @click="exitmeet">
                       <img  src="./images/u1827.png" alt="">
                    </span>
                    <a href="http://siamtest.evergrandeinformation.com/siam/login" class="exit">退出</a>
                  </div>
              </div>
            </el-col>

        </el-row>
       <!-- <hr> -->
    </div>

  <!-- body 部分 -->
    <div class="main">
      <div class="leftNav">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo">


          <router-link to="/systemManagement/roleManagement">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">角色管理</span>
              </template>
            </el-menu-item>
          </router-link>
          <router-link to="/systemManagement/userManagement">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">用户管理</span>
              </template>
            </el-menu-item>
          </router-link>

          <router-link to="/mortgageManagement/contract">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">合同信息</span>
              </template>
            </el-menu-item>
          </router-link>
          <router-link to="/mortgageManagement/contractDetail">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">合同信息数据表</span>
              </template>
            </el-menu-item>
          </router-link>



          <router-link to="/mortgageManagement/mortgageProgressDetail">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">按揭进度</span>
              </template>
            </el-menu-item>
          </router-link>
          <router-link to="/mortgageManagement/mortgageProgress">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">按揭进度数据表</span>
              </template>
            </el-menu-item>
          </router-link>

          <router-link to="/mortgageBank">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">按揭银行</span>
              </template>
            </el-menu-item>
          </router-link>
          <router-link to="/projectMessage">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">项目信息</span>
              </template>
            </el-menu-item>
          </router-link>
          <router-link to="/index">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">设置密码选择公司</span>
              </template>
            </el-menu-item>
          </router-link>

          <router-link to="/index">
            <el-menu-item index="1">
              <template slot="title">
                <img src="./images/u1858.png" alt="">
                <span class="leftbar">欢迎页面</span>
              </template>
            </el-menu-item>
          </router-link>




          </el-menu>
      </div>
      <div class="rightBox">
      <router-view></router-view>
      </div>
  </div>

  </div>
</template>

<script>
import local from './config/gloup.js';
import axios from 'axios';

export default {

    name: 'app',
    computed: {
    },
    data () {
        return {
            userName: 'test',
            nusername: '',
            bb: true,
            aa:0,
            menus: [],
            msgCount : 0,
            navMenus: [
                {
                name: '我的会议',
                value: '01',
                menuUrl: '/userMeeting/index/week'
                },
                {
                name: '会议室管理',
                value: '02',
                menuUrl: '/messageCenter'
                },
                {
                name: '消息中心',
                value: '03',
                menuUrl: ''
                },
                {
                name: '会议预约',
                value: '09',
                menuUrl: '/fixMeeting'
                },
                {
                    name: '系统管理',
                    value: '04',
                    menuUrl: '',
                    childs: [
                        {
                        name: '第一层子级',
                        value: '第一层uuid',
                        menuUrl: '/systemManage/ruleManage'
                        },
                        {
                        name:'第一层子级',
                        value: '第一层子级00o',
                        menuUrl: '/systemManage/massageCenter'
                        }
                    ]
                },
                {
                name: '系统分析',
                value: '05',
                menuUrl: ''
                }
            ],

            data:[
                {
                    label: '系统管理',
                    children: [
                    {
                        label: '角色管理'
                    },
                    {
                        label: '预约规则管理'
                    },
                    {
                        label: '会议室区域管理'
                    }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },

            messageData : []
        }
    },
    created: function(){
        this.getnavfun();
        this.getMessagecount();

    },
    mounted () {
        this.init();

    },
    methods: {
        getMessagecount(){
            let self = this;
            let url = local.localUrl + 'meetMessages/findMsgremind';
            axios({
                method: 'POST',
                url: url,
            }).then(function(data){
                if(data.data.success){
                    self.msgCount = data.data.data.count;
                    self.msgCount = self.msgCount== 0 ? '': self.msgCount;
                }
            }).catch(function(err){

            });
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
        exitmeet(){
        },
        getnavfun(){
            let self = this;
            let dd = localStorage.getItem("cookNav");
            this.menus = JSON.parse(dd);
            // console.log(this.menus);
            let dl = JSON.parse(dd);
            let navdata = localStorage.getItem('cookNav');
        },
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleC(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleNodeClick(data) {
            // console.log(data);
        },
        init(){

        },
        bindMessageEvent : function(){
            var th = this;
            var $app = $("#app");
            var $msgBtn = $app.find(".headerDiv").find(".messageBox").find(".item");
            var url;
            var node;
            node = document.createElement("div");
            node.id = "messageCenter_box";
            node.className = "messageCenter-box";
            node.innerHTML = '<i class="arrow-out"></i>\
                              <i class="arrow-in"></i>\
                              <div id="messageCenter_box_content">\
                                <div id="messageCenter_box_content2"></div>\
                              </div>';
            $app.append(node);
            /*获取消息*/
            var getMessage = function(){
                let url = local.localUrl + 'meetMessages/findMsgremind';
                axios({
                    method: 'POST',
                    url: url,
                }).then(function(data){
                    if(data.data.success){
                        var i;
                        var messageData = data.data.data.list;
                        var len = messageData.length;
                        $msgBtn.find("sup").html(data.data.data.count);
                        for(i=0;i<len;i++){
                             html = htmlTpl;
                            if(messageData[i].applicanttype==1){
                                    html=htmlReadTpl;
                            }
                            html = html.replace(/{msgContent}/g,messageData[i].msgContent);
                            html = html.replace(/{msgId}/g,messageData[i].id);
                            html = html.replace(/{appid}/g,messageData[i].appid);
                            htmls += html;
                        }
                        let url=local.localUrl;
                        htmls+="<div id='messageCenter_box_bottom'><a href='#/messageCenter'>查看所有审批</a></div>";
                        $("#messageCenter_box_content2").html(htmls);
                        th.scroll.refresh();
                    }
                }).catch(function(err){
                });
            }

            $(node).on("click","span",function(){
                var value = this.getAttribute("value");
                var appIdNode = this.parentNode;
                var condition = {};
                var url;
                condition.msgid = appIdNode.getAttribute("data-msgid");
                condition.appid=appIdNode.getAttribute("data-appid");
                if(value=="join"){
                    condition.status = 1;
                }
                else if(value=="unJoin"){
                    condition.status = 2;
                }else if(value=='isRead'){
                    condition.status='3';
                }
                url = local.localUrl + 'meetMessages/updateStatus';
                axios({
                    method: 'POST',
                    url: url,
                    data: condition,
                }).then(function(data){
                    if(data.data.success){
                        getMessage();
                    }
                }).catch(function(err){
                    this.$message({ type: 'info', message: '服务器调用出错，请联系管理员'});
                });
            });

            this.scroll = new wScrollBar("#messageCenter_box_content",{
                contentId:"#messageCenter_box_content2",
                background:"#eee",
                color:"#ccc"
            });
            var htmls = '',html;
            var htmlTpl = '<div class="msgCenter-items">\
                            <div class="msgCenter-item" title="{msgContent}">{msgContent}</div>\
                            <div class="msgCenter-buttons" data-msgid="{msgId}" data-appid="{appid}">\
                                <span value="join">参加</span>\
                                <span value="unJoin">不参加</span></div>\
                        </div>';
            var htmlReadTpl='<div class="msgCenter-items">\
                            <div class="msgCenter-item" title="{msgContent}">{msgContent}</div>\
                            <div class="msgReadCenter-buttons" data-msgid="{msgId}" data-appid="{appid}">\
                                <span value="isRead">了解</span>\
                               </div>\
                        </div>';
            getMessage();

            $msgBtn.on("click",function(){
                $("#messageCenter_box").css("left",($msgBtn[0].offsetLeft-225)+"px");
                $("#messageCenter_box").show();
                th.scroll.refresh();
            });
            $(document).on("click",function(e){
                if(!$msgBtn[0].contains(target))
                {
                     $("#messageCenter_box").hide();
                }
            })
            // $(document).on("click",function(e){

            //     let self = th;
            //     var target = e.target||e.srcElement;


            //   if(self.aa>0){
            //     self.bb = false;
            //   }
            //    alert(!self.bb+"2");
            //   //alert(e.target.id);
            //     // if(!$msgBtn[0].contains(target))
            //     // {
            //     //      $("#messageCenter_box").hide();
            //     // }
            //     if(!self.bb){
            //          $("#messageCenter_box").hide();
            //     }else{
            //          $("#messageCenter_box").show();
            //     }
            // });

            // $('#messageCenter_box').on("click",function(e){
            //     let self = th;
            //     self.aa = 1;
            //     var target = e.target||e.srcElement;
            //     alert(self.bb+"1");
            //     if(!$msgBtn[0].contains(target))
            //     {
            //         self.bb = fasle;
            //           // $("#messageCenter_box").style.display ='block';
            //            $("#messageCenter_box").show();
            //     }else{
            //         self.bb = false;
            //     }
            // });

        }
    }
}
</script>

<style>
html,body{
    height:100%;
    width:100%;
    overflow:hidden;
    font-family:"Microsoft Yahei";
    font-size:12px;
}
#app{
    height:100%;
    position:relative;
}
.headerDiv{
    background-color:#fafbfc;
    width:100%;
    height: 60px;
    border-bottom: 1px solid #e2e3e6;
}
.main{
    position:absolute;
    top:61px;
    left:0;
    right:0;
    bottom:0;
}

.bg-purple{
width: 110px;
height: 28px;
margin-left:26px;
margin-top:10px;
}
 .messageBox{
  margin-left: 99%;
}
.messageBox .el-badge__content.is-fixed.is-dot{
  top:0px;
}
.userNameBox{
    margin-top: 12px;
    display: inline-block;
    margin-left: 15px;
    margin-right: 120px;
    font-size:16px;
}

/**
**左侧导航
**icon
**/
/********/
.iconspan{
  width: 22px;
  height:22px;
  display: inline-block;
}
.leftbar-icon1-normal{
  background: url("./images/leftbar-icon1-normal.png");
}
.leftbar-icon2-normal{
  background: url("./images/leftbar-icon2-normal.png");
}
.leftbar-icon3-normal{
  background: url("./images/leftbar-icon3-normal.png");
}
.leftbar-icon6-normal{
    background: url("./images/leftbar-icon6-normal.png");
}
.leftbar-icon5-normal{
  background: url("./images/leftbar-icon5-normal.png");
}
.leftbar-icon7-normal{
  background: url("./images/leftbar-icon7-normal.png");
}
.leftNav{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    width:160px;
    border-right:1px solid #e9ebf0;
    background-color:#fafbfc;
}
.leftNav .el-submenu__title, .leftNav .el-menu{
    border-right:none;
    background-color:#fafbfc;
}
.leftNav .el-submenu__title, .leftNav .el-menu-item{
    height:50px;
    line-height: 50px;
}
.leftNav .el-submenu__title, .leftNav .el-menu-item:hover{
    background-color:#4da1ff;
    color:#fff;
}
.leftNav .el-submenu .el-submenu__title .subitemtitle{
    color: #303133;
}
/****
*****右侧内容区
*******/
.rightBox{
    position: absolute;
    top:0;
    left:161px;
    right:0;
    bottom:0;
    overflow:auto;
    background-color:#f3f5f8;
    overflow-x: hidden;
}
.item {
  /* float:left; */
  margin-top: 15px;
  margin-right: 40px;
  cursor:pointer;
  position: relative;
}
.router-link-exact-active{
  text-decoration: none;
}
.leftbar{
    margin-left:10px;
}
.userPic{
  background: url("./images/user.jpg") ;
  background-size:42px 40px;
  width: 42px;
  height:40px;
  float:left;
  margin-top:4px;
  border-radius:25px;
  display:inline-block;
}

.messageCenter-box{
    position: absolute!important;
    top:55px;
    left:666px;
    width:300px;
    height: 324px;
    background-color: #FFF;
    box-shadow: 0px 0px 50px 1px #ccc;
    display:none;
    z-index: 5000;
}

#messageCenter_box_bottom{
    top:55px;
    left:666px;
    width:300px;
    height: 20px;
    text-align: center;
}

.messageCenter-box #messageCenter_box_content{
    width:300px;
    height: 324px;
}
.messageCenter-box i.arrow-out{
    position: absolute;
    left: 215px;
    top: -10px;
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ccc;
}
.messageCenter-box i.arrow-in{
    position: absolute;
    left: 215px;
    top: -9px;
    display: block;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #FFF;
}


.messageCenter-box .msgCenter-items .msgCenter-item{
    margin-top:10px;
    padding:5px;
    line-height: 22px;
    height: 60px;
    position: relative;
    overflow: hidden;
}
.messageCenter-box .msgCenter-items .msgCenter-buttons{
    height: 50px;
    line-height: 50px;
    margin-bottom:5px;
    border-bottom:1px solid #ccc;

}



.messageCenter-box .msgCenter-items .msgCenter-buttons span{
    border:1px solid #4DA1FF;
    border-radius: 3px;
    padding-left:10px;
    padding-top:3px;
    padding-bottom:3px;
    padding-right: 10px;
    margin-left:10px;
    cursor:pointer;
}

.messageCenter-box .msgCenter-items .msgReadCenter-buttons{
    height: 50px;
    line-height: 50px;
    margin-bottom:5px;
    border-bottom:1px solid #ccc;

}
.messageCenter-box .msgCenter-items .msgReadCenter-buttons span{
    border:1px solid #4DA1FF;
    border-radius: 3px;
    padding-left:10px;
    padding-top:3px;
    padding-bottom:3px;
    padding-right: 10px;
    margin-left:220px;
    cursor:pointer;
}


.messageCenter-box .msgCenter-items .msgCenter-item:after{
    content:"";
    display:block;
    position: absolute;
    bottom:0;
    right: 0;
}

.rolemanage {
  height: 50px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  line-height: 50px;
  background: #ffffff;
  padding-left: 15px;
  font-size: 16px;
  font-weight: bold;
}
.el-dialog--center .el-dialog__header {
  height: 44px!important;
  background: #fafbfc;
  padding: 0 15px 0px;
  line-height: 44px;
}
.el-table tr{height: 60px}
</style>
