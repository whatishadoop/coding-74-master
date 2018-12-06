import Vue from 'vue';
// 国际化
import VueI18n from 'vue-i18n';
import en from './locale/en';
import zh from './locale/zh';
import {getCookie} from './cookie';

Vue.use(VueI18n);

const messages = {
  zh: zh,
  en: en
};

export default new VueI18n({
  // locale: 'zh', // 语言标识
  locale: getCookie('PLAY_LANG', 'zh'),
  messages
});
