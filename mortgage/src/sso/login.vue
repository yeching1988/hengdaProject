<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
// import originJSONP from 'jsonp'
// let Base64 = require('js-base64').Base64;
// import md5 from 'js-md5';
import local from '../config/gloup.js'
export default {
  data () {
    return{
      uuid: '',
      loginName: ''
    }
  },
  created: function(){
    this.getusermeassage();
  },
  methods:{
    getToken() {
      if (sessionStorage.getItem(Base64.encode("token"))){
        return Base64.decode(sessionStorage.getItem(Base64.encode("token")))
      }else {
        return null
      }
    },
    setToken(token) {
      sessionStorage.setItem(Base64.encode("token"), Base64.encode(token))
    },
    getParams(url) {
        let theRequest = new Object();
        if (!url)
            url = location.href;
        if (url.indexOf("?") !== -1)
        {
            var str = url.substr(url.indexOf("?") + 1) + "&";
            var strs = str.split("&");
            for (var i = 0; i < strs.length - 1; i++)
            {
                var key = strs[i].substring(0, strs[i].indexOf("="));
                var val = strs[i].substring(strs[i].indexOf("=") + 1);
                theRequest[key] = val;
            }
        }
        return theRequest;
    },
    getToken(){
    },
    getusermeassage(){
      let self = this;
      var params = this.getParams();
      let cooks = document.cookie;
      //获取地址栏上的userName
      var useruuid = 'de36debb-1685-440c-b384-12b10dea0e02';// params.uuid;
      var userName = '080527780';//params.loginName;
      // let token = useruuid;
      let listurl = local.localUrl + 'sso/login?uuid=' + useruuid + '&loginName=' +  userName;
        $.ajax({  
            url: listurl,  
            type: 'GET',
          }).done(function(data) {
            //从后端取值
            let newtoken = data.data.user.token;
            document.cookie = data.data.user.token;
            //user名字
            let username = data.data.user.username;
            //userid
            let userId = data.data.user.userId;
            //存储系统时间
            let systemTime = data.data.currentDate;
            //菜单导航
            let newNav = data.data.user.menuList;
            //保存到本地
            localStorage.setItem('cooktoken', newtoken);
            localStorage.setItem('cookNav', newNav);
            localStorage.setItem('userid', userId);
            localStorage.setItem('username', username);
            //取本地保存的值
            window.location.href ='/#/fixMeeting';
          }).fail(function(res) {

          }); 
    }
  }
}
</script>

<style>
</style>
