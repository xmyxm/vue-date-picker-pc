import PCDatePicker from './src/datepicker/index.vue';
export { DATE_TYPE } from './src/datepicker/lib/config';
export { dayCountByMonth, monthInfoByDate, getYearMonthNum, dateByDate, getTodayDate, getYesterday, getLastMonthDay, getRegionDay, dateByDateText, weekInfoByDate } from './src/datepicker/lib/tools-date';

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
