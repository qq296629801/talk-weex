/* global Vue */

/* weex initialized here, please do not move this line */
import CodeUtil from '@/codec'
Vue.prototype.$encode = CodeUtil.encode
Vue.prototype.$decode = CodeUtil.decode
const {router} = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
