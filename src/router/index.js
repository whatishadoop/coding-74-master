import Vue from 'vue';
import Router from 'vue-router';
import forumpage from 'components/modules/forumpage';
import morepage from 'components/modules/morepage';
import mypage from 'components/modules/mypage';
import investmentpage from 'components/modules/investmentpage';
import homepage from 'components/modules/homepage';

import homerouter from 'router/modules/homerouter';
import investmentrouter from 'router/modules/investmentrouter';
Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/homepage'
}, {
  path: '/homepage',
  component: homepage,
  // redirect: '/homepage/goods',
  children: [
    ...homerouter
  ]
}, {
  path: '/investmentpage',
  component: investmentpage,
  redirect: '/investmentpage/goods',
  children: [
    ...investmentrouter
  ]
}, {
  path: '/mypage',
  component: mypage
}, {
  path: '/morepage',
  component: morepage
}, {
  path: '/forumpage',
  component: forumpage
}
];

export default new Router({
    linkActiveClass: 'active',
    routes
});
