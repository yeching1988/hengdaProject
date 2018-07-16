import Vue from 'vue'
import Router from 'vue-router'
import loginindex from '../sso/login'
import index from '../html/index/index'


import projectMessage from  '../html/projectMessage/projectMessage.vue'                  //项目信息
import mortgageBank from  '../html/mortgageBank/mortgageBank.vue'                      //按揭银行

import contract from  '../html/mortgageManagement/contract/contract.vue'                //按揭管理//合同信息
import contractDetail from  '../html/mortgageManagement/contract/contractDetail.vue'                //按揭管理//合同信息数据表
import mortgageProgress from  '../html/mortgageManagement/mortgageProgress/mortgageProgress.vue'          //按揭管理//按揭信息
import mortgageProgressDetail from  '../html/mortgageManagement/mortgageProgress/mortgageProgressDetail.vue'          //按揭管理//按揭信息数据表

import userManagement from  '../html/systemManagement/userManagement/userManagement.vue'             //系统管理//用户管理
import roleManagement from  '../html/systemManagement/roleManagement/index.vue'             //系统管理 //角色管理



Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }



    ,{
      path: '/systemManagement/roleManagement',
      name:'roleManagement',
      component:roleManagement
    },
    {
      path: '/systemManagement/userManagement',
      name:'userManagement',
      component:userManagement
    },
    {
      path: '/mortgageManagement/mortgageProgress',
      name:'mortgageProgress',
      component:mortgageProgress
    },
    {
      path: '/mortgageManagement/mortgageProgressDetail',
      name:'mortgageProgressDetail',
      component:mortgageProgressDetail
    },
    {
      path: '/mortgageManagement/contract',
      name:'contract',
      component:contract
    },
    {
      path: '/mortgageManagement/contractDetail',
      name:'contractDetail',
      component:contractDetail
    },
    {
      path: '/mortgageBank',
      name:'mortgageBank',
      component:mortgageBank
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/projectMessage',
      name:'projectMessage',
      component:projectMessage
    }

    ,
    {
      path: '/sso/login',
      name: 'login',
      component: loginindex
    }






  ]
})

/*
import login from  '../html/login/'            //登陆
import projectMessage from  '../html/projectMessage/'                  //项目信息
import mortgageBank from  '../html/mortgageBank/'                      //按揭银行

import contract from  '../html/mortgageManagement/contract/'                //按揭管理//合同信息
import mortgageProgress from  '../html/mortgageManagement/mortgageProgress/'          //按揭管理//按揭信息

import userManagement from  '../html/systemManagement/userManagement/'             //系统管理//用户管理
import roleManagement from  '../html/systemManagement/roleManagement/'             //系统管理 //角色管理

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },

    {
      path: '/mortgageBank/systemManagement/roleManagement/index',
      name:'roleManagement',
      component:roleManagement
    },
    {
      path: '/mortgageBank/systemManagement/userManagement/index',
      name:'userManagement',
      component:userManagement
    },
    {
      path: '/mortgageBank/mortgageManagement/mortgageProgress/index',
      name:'mortgageProgress',
      component:mortgageProgress
    },
    {
      path: '/mortgageBank/mortgageManagement/contract/index',
      name:'contract',
      component:contract
    },
    {
      path: '/mortgageBank/index',
      name:'mortgageBank',
      component:mortgageBank
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/projectMessage/index',
      name:'projectMessage',
      component:projectMessage
    }

    ,
    {
      path: '/sso/login',
      name: 'login',
      component: loginindex
    }
    // ,
    // {
    //   path: '/userMeeting/index',
    //   redirect:'/userMeeting/index/week'
    // }
    // ,
    // {
    //   path: '/userMeeting/searchmeet',
    //   name:'searchmeet',
    //   component:searchmeet
    // }

  ]
})
*/
