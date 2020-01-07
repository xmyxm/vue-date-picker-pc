// 打 npm 包入口文件 

import PCDatePicker from './src/datepicker/index.vue';
export { DATE_TYPE } from './src/datepicker/lib/config'

PCDatePicker.install = Vue => Vue.component(PCDatePicker.name, PCDatePicker);

// To auto-install when vue is found
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(PCDatePicker)
}

export default PCDatePicker;
