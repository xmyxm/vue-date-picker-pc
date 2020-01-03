// 打 npm 包入口文件 

import PCDatePicker from './src/datepicker/index.vue';

PCDatePicker.install = Vue => Vue.component(PCDatePicker.name, PCDatePicker);

export default PCDatePicker;
