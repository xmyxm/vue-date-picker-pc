// 公历节日
var solar = {
  '01-01': '元旦',
  '02-14': '情人节',
  '03-03': '爱耳日',
  '03-08': '妇女节',
  '03-12': '植树节',
  '03-15': '权益日',
  '03-18': '爱肝日',
  '04-01': '愚人节',
  '04-22': '地球日',
  '05-01': '劳动节',
  '05-04': '青年节',
  '05-12': '护士节',
  '05-18': '博物馆日',
  '05-19': '中国旅游日',
  '05-31': '无烟日',
  '06-01': '儿童节',
  '06-05': '环境日',
  '06-06': '爱眼日',
  '06-23': '奥林匹克日',
  '07-01': '建党节',
  '08-01': '建军节',
  '10-01': '国庆节',
  '09-03': '抗战胜利日',
  '09-10': '教师节',
  '09-27': '世界旅游日',
  '10-31': '万圣节',
  '12-24': '平安夜',
  '12-25': '圣诞节'
}; // 农历节日

var lunar = {
  '01-01': '春节',
  '02-02': '龙抬头',
  '01-15': '元宵节',
  '03-03': '上巳节',
  '05-05': '端午节',
  '06-24': '火把节',
  '07-07': '七夕节',
  '07-15': '中元节',
  '08-15': '中秋节',
  '09-09': '重阳节',
  '10-01': '寒衣节',
  '10-15': '下元节',
  '12-08': '腊八节'
}; // 2015至今的法定假期

var holiday = {
  '2017-01-01': '元旦假期',
  '2017-01-02': '元旦假期',
  '2017-01-27': '除夕假期',
  '2017-01-28': '春节假期',
  '2017-01-29': '春节假期',
  '2017-01-30': '春节假期',
  '2017-01-31': '春节假期',
  '2017-02-01': '春节假期',
  '2017-02-02': '春节假期',
  '2017-04-02': '清明假期',
  '2017-04-03': '清明假期',
  '2017-04-04': '清明假期',
  '2017-04-29': '劳动节假期',
  '2017-04-30': '劳动节假期',
  '2017-05-01': '劳动节假期',
  '2017-05-28': '端午假期',
  '2017-05-29': '端午假期',
  '2017-05-30': '端午假期',
  '2017-10-01': '国庆假期',
  '2017-10-02': '国庆假期',
  '2017-10-03': '国庆假期',
  '2017-10-04': '国庆假期',
  '2017-10-05': '国庆假期',
  '2017-10-06': '国庆假期',
  '2017-10-07': '国庆假期',
  '2017-10-08': '国庆假期',
  '2017-12-30': '元旦假期',
  '2017-12-31': '元旦假期',
  '2018-01-01': '元旦假期',
  '2018-02-15': '除夕假期',
  '2018-02-16': '春节假期',
  '2018-02-17': '春节假期',
  '2018-02-18': '春节假期',
  '2018-02-19': '春节假期',
  '2018-02-20': '春节假期',
  '2018-02-21': '春节假期',
  '2018-04-05': '清明假期',
  '2018-04-06': '清明假期',
  '2018-04-07': '清明假期',
  '2018-04-29': '劳动节假期',
  '2018-04-30': '劳动节假期',
  '2018-05-01': '劳动节假期',
  '2018-06-16': '端午假期',
  '2018-06-17': '端午假期',
  '2018-06-18': '端午假期',
  '2018-09-22': '中秋假期',
  '2018-09-23': '中秋假期',
  '2018-09-24': '中秋假期',
  '2018-10-01': '国庆假期',
  '2018-10-02': '国庆假期',
  '2018-10-03': '国庆假期',
  '2018-10-04': '国庆假期',
  '2018-10-05': '国庆假期',
  '2018-10-06': '国庆假期',
  '2018-10-07': '国庆假期',
  '2018-12-30': '元旦假期',
  '2018-12-31': '元旦假期',
  '2019-01-01': '元旦假期',
  '2019-02-04': '除夕假期',
  '2019-02-05': '春节假期',
  '2019-02-06': '春节假期',
  '2019-02-07': '春节假期',
  '2019-02-08': '春节假期',
  '2019-02-09': '春节假期',
  '2019-02-10': '春节假期',
  '2019-04-05': '清明假期',
  '2019-04-06': '清明假期',
  '2019-04-07': '清明假期',
  '2019-05-01': '劳动节假期',
  '2019-05-07': '端午假期',
  '2019-05-08': '端午假期',
  '2019-05-09': '端午假期',
  '2019-09-13': '中秋假期',
  '2019-09-14': '中秋假期',
  '2019-09-15': '中秋假期',
  '2019-10-01': '国庆假期',
  '2019-10-02': '国庆假期',
  '2019-10-03': '国庆假期',
  '2019-10-04': '国庆假期',
  '2019-10-05': '国庆假期',
  '2019-10-06': '国庆假期',
  '2019-10-07': '国庆假期',
  '2020-01-01': '元旦假期',
  '2020-01-24': '除夕假期',
  '2020-01-25': '春节假期',
  '2020-01-26': '春节假期',
  '2020-01-27': '春节假期',
  '2020-01-28': '春节假期',
  '2020-01-29': '春节假期',
  '2020-01-30': '春节假期',
  '2020-04-04': '清明假期',
  '2020-04-05': '清明假期',
  '2020-04-06': '清明假期',
  '2020-05-01': '劳动节假期',
  '2020-05-02': '劳动节假期',
  '2020-05-03': '劳动节假期',
  '2020-05-04': '劳动节假期',
  '2020-05-05': '劳动节假期',
  '2020-06-25': '端午假期',
  '2020-06-26': '端午假期',
  '2020-06-27': '端午假期',
  '2020-10-01': '国庆假期',
  '2020-10-02': '国庆假期',
  '2020-10-03': '国庆假期',
  '2020-10-04': '国庆假期',
  '2020-10-05': '国庆假期',
  '2020-10-06': '国庆假期',
  '2020-10-07': '国庆假期',
  '2020-10-08': '国庆假期'
}; // 2015至今的假期调休工作日

var work = {
  '2017-01-22': '除夕班',
  '2017-02-04': '春节班',
  '2017-04-01': '清明班',
  '2017-05-27': '端午班',
  '2017-09-30': '国庆班',
  '2018-02-11': '春节班',
  '2018-02-24': '春节班',
  '2018-04-08': '清明节班',
  '2018-04-28': '劳动节班',
  '2018-09-29': '国庆班',
  '2018-09-30': '国庆班',
  '2019-02-02': '春节班',
  '2019-02-03': '春节班',
  '2019-09-29': '国庆班',
  '2019-10-12': '国庆班',
  '2020-01-19': '春节班',
  '2020-02-01': '春节班',
  '2020-04-26': '五一班',
  '2020-05-09': '五一班',
  '2020-06-28': '端午班',
  '2020-09-27': '国庆班',
  '2020-10-10': '国庆班'
}; // 2015至今特殊节日

var vication = {
  chuxi: {
    name: '除夕',
    dates: ['2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24', '2021-02-11']
  },
  qingming: {
    name: '清明',
    dates: ['2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04', '2021-04-04']
  },
  muqin: {
    name: '母亲节',
    dates: ['2017-05-14', '2018-05-13', '2019-05-12', '2020-05-10', '2021-05-09']
  },
  fuqin: {
    name: '父亲节',
    dates: ['2017-06-18', '2018-06-17', '2019-06-16', '2020-06-21', '2021-06-20']
  },
  poshui: {
    name: '泼水节',
    dates: ['2017-03-17', '2017-03-18', '2017-03-19', '2017-03-20']
  },
  nadamu: {
    name: '那达慕',
    dates: ['2017-07-26', '2017-07-27', '2017-07-28', '2017-07-29', '2017-07-30']
  }
};
var holiday$1 = {
  work: work,
  holiday: holiday,
  lunar: lunar,
  solar: solar,
  vication: vication
};

/* eslint-disable */
var calendar = {
  /**
    * 农历1900-2100的润大小信息表
    * @Array Of Property
    * @return Hex
    */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049

  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520],
  // 2100

  /**
    * 公历每个月份的天数普通表
    * @Array Of Property
    * @return Number
    */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
    * 天干地支之天干速查表
    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
    * @return Cn string
    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
    * 天干地支之地支速查表
    * @Array Of Property
    * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
    * @return Cn string
    */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
    * 天干地支之地支速查表<=>生肖
    * @Array Of Property
    * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
    * @return Cn string
    */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
    * 24节气速查表
    * @Array Of Property
    * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
    * @return Cn string
    */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
    * 1900-2100各年的24节气日期速查表
    * @Array Of Property
    * @return 0x string For splice
    */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
    * 数字转中文速查表
    * @Array Of Property
    * @trans ['日','一','二','三','四','五','六','七','八','九','十']
    * @return Cn string
    */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
    * 日期转农历称呼速查表
    * @Array Of Property
    * @trans ['初','十','廿','卅']
    * @return Cn string
    */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
    * 月份转农历称呼速查表
    * @Array Of Property
    * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
    * @return Cn string
    */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
    * 返回农历y年一整年的总天数
    * @param lunar Year
    * @return Number
    * @eg:var count = calendar.lYearDays(1987) ;//count=387
    */
  lYearDays: function lYearDays(y) {
    var i,
        sum = 348;

    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }

    return sum + this.leapDays(y);
  },

  /**
    * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
    * @param lunar Year
    * @return Number (0-12)
    * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
    */
  leapMonth: function leapMonth(y) {
    // 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
    * 返回农历y年闰月的天数 若该年没有闰月则返回0
    * @param lunar Year
    * @return Number (0、29、30)
    * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
    */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }

    return 0;
  },

  /**
    * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
    * @param lunar Year
    * @return Number (-1、29、30)
    * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
    */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 月份参数从1至12，参数错误返回-1


    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
    * 返回公历(!)y年m月的天数
    * @param solar Year
    * @return Number (-1、28、29、30、31)
    * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
    */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1


    var ms = m - 1;

    if (ms === 1) {
      // 2月份的闰平规律测算后确认返回28或29
      return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey === 0) ganKey = 10; // 如果余数为0则为最后一个天干

    if (zhiKey === 0) zhiKey = 12; // 如果余数为0则为最后一个地支

    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
   * 公历月、日判断所属星座
   * @param  cMonth [description]
   * @param  cDay [description]
   * @return Cn string
   */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
    * 传入offset偏移量返回干支
    * @param offset 相对甲子的偏移量
    * @return Cn string
    */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
    * 传入公历(!)y年获得该年第n个节气的公历日期
    * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
    * @return day Number
    * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
    */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }

    if (n < 1 || n > 24) {
      return -1;
    }

    var _table = this.sTermInfo[y - 1900];
    var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
    var _calday = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
    return parseInt(_calday[n - 1]);
  },

  /**
    * 传入农历数字月份返回汉语通俗表示法
    * @param lunar month
    * @return Cn string
    * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
    */
  toChinaMonth: function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1


    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字

    return s;
  },

  /**
    * 传入农历日期数字返回汉字表示法
    * @param lunar day
    * @return Cn string
    * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
    */
  toChinaDay: function toChinaDay(d) {
    // 日 => \u65e5
    var s;

    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;

      case 20:
        s = "\u4E8C\u5341";
        break;

      case 30:
        s = "\u4E09\u5341";
        break;

      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }

    return s;
  },

  /**
    * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
    * @param y year
    * @return Cn string
    * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
    */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
    * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
    * @param y  solar year
    * @param m  solar month
    * @param d  solar day
    * @return JSON object
    * @eg:console.log(calendar.solar2lunar(1987,11,01));
    */
  solar2lunar: function solar2lunar(y, m, d) {
    // 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    } // 公历传参最下限


    if (y === 1900 && m === 1 && d < 31) {
      return -1;
    } // 未传参  获得当天


    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }

    var i,
        leap = 0,
        temp = 0; // 修正ymd参数

    var y = objDate.getFullYear(),
        m = objDate.getMonth() + 1,
        d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;

    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }

    if (offset < 0) {
      offset += temp;
      i--;
    } // 是否今天


    var isTodayObj = new Date(),
        isToday = false;

    if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
      isToday = true;
    } // 星期几


    var nWeek = objDate.getDay(),
        cWeek = this.nStr1[nWeek]; // 数字表示周几顺应天朝周一开始的惯例

    if (nWeek === 0) {
      nWeek = 7;
    } // 农历年


    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月

    var isLeap = false; // 效验闰月

    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i === leap + 1 && isLeap === false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      } // 解除闰月


      if (isLeap === true && i === leap + 1) {
        isLeap = false;
      }

      offset -= temp;
    } // 闰月导致数组下标重叠取反


    if (offset === 0 && leap > 0 && i === leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }

    if (offset < 0) {
      offset += temp;
      --i;
    } // 农历月


    var month = i; // 农历日

    var day = offset + 1; // 天干地支处理

    var sm = m - 1;
    var gzY = this.toGanZhiYear(year); // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`

    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始

    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始
    // 依据12节气修正干支月

    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);

    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    } // 传入的日期的节气与否


    var isTerm = false;
    var Term = null;

    if (firstNode === d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }

    if (secondNode === d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    } // 日柱 当月一日与 1900/1/1 相差天数


    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1); // 该日期所属的星座

    var astro = this.toAstro(m, d);
    return {
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'Animal': this.getAnimal(year),
      'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
      'IDayCn': this.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'Term': Term,
      'astro': astro,
      'lunarVication': holiday$1.lunar["".concat(month, "-").concat(day)],
      'solarVication': holiday$1.solar["".concat(m, "-").concat(d)],
      'holiday': holiday$1.holiday["".concat(y, "-").concat(m, "-").concat(d)],
      'work': holiday$1.work["".concat(y, "-").concat(m, "-").concat(d)]
    };
  },
  getHolidayInfo: function getHolidayInfo(lunarM, lunarD, solarY, solarM, solarD) {
    lunarM = lunarM > 9 ? lunarM : "0".concat(lunarM);
    lunarD = lunarM > 9 ? lunarD : "0".concat(lunarD);
    solarM = solarM > 9 ? solarM : "0".concat(solarM);
    solarD = solarD > 9 ? solarD : "0".concat(solarD);
    var lunarVication = holiday$1.lunar["".concat(lunarM, "-").concat(lunarD)];
    var vicationObj = holiday$1.vication;
    var vication = null;
    Object.entries(vicationObj).forEach(function (item) {
      var _item$ = item[1],
          name = _item$.name,
          dates = _item$.dates;

      if (dates.indexOf("".concat(solarY, "-").concat(solarM, "-").concat(solarD)) !== -1) {
        vication = name;
      }
    });
    var solarVication = holiday$1.solar["".concat(solarM, "-").concat(solarD)];
    return {
      'vication': lunarVication || vication || solarVication,
      'holiday': holiday$1.holiday["".concat(solarY, "-").concat(solarM, "-").concat(solarD)],
      'work': holiday$1.work["".concat(solarY, "-").concat(solarM, "-").concat(solarD)]
    };
  },

  /**
    * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
    * @param y  lunar year
    * @param m  lunar month
    * @param d  lunar day
    * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
    * @return JSON object
    * @eg:console.log(calendar.lunar2solar(1987,9,10));
    */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
    // 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);

    if (isLeapMonth && leapMonth != m) {
      return -1;
    } // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同


    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
      return -1;
    } // 超出了最大极限值


    var day = this.monthDays(y, m);
    var _day = day; // bugFix 2016-9-25
    // if month is leap, _day use leapDays method

    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }

    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    } // 参数合法性效验
    // 计算农历的时间差


    var offset = 0;

    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }

    var leap = 0,
        isAdd = false;

    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);

      if (!isAdd) {
        // 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }

      offset += this.monthDays(y, i);
    } // 转换闰月农历 需补充该年闰月的前一个月的时差


    if (isLeapMonth) {
      offset += day;
    } // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)


    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  },
  // 聚合数据:  {name: '元旦', value: ['2018-01-01', '2018-01-02'], year: 2019}
  getHolidayTypeList: function getHolidayTypeList() {
    var holidayList = holiday$1.holiday;
    var data = [];
    var name = '';
    var index = 0;
    Object.keys(holidayList).forEach(function (item, i) {
      var currentName = holidayList[item]; // 除夕和春节统一归为春节假期

      if (name === currentName || name.indexOf('除夕') !== -1 && currentName.indexOf('春节') !== -1) {
        data[index - 1] && data[index - 1].value.push(item);
      } else {
        name = holidayList[item].indexOf('除夕') !== -1 ? '春节假期' : holidayList[item];
        index += 1;
        data.push({
          name: name,
          value: [item],
          year: new Date(item).getFullYear()
        });
      } // 元旦年份修改


      if (currentName.indexOf('元旦') !== -1) {
        data[index - 1].value && data[index - 1].value.forEach(function (dataItem, i) {
          if (new Date(dataItem).getMonth() === 0) {
            data[index - 1].year = new Date(dataItem).getFullYear();
          }
        });
      }
    });
    return data;
  }
};

/**
 * 给日期添加农历，节假日
 * @param {*} dayList 时间天数数组集合
 */

function addLunarInfo(dayList) {
  dayList.forEach(function (item) {
    var year = item.year,
        month = item.month,
        day = item.day; // 获取日期农历信息

    var lunarDateInfo = calendar.solar2lunar(year, month, day); // 根据是否闰月计算月总天数
    // const monthDayCount = lunarDateInfo.isLeap ? lunarUtil.leapDays(year) : lunarUtil.monthDays(lunarDateInfo.lYear, lunarDateInfo.lMonth);
    // 农历月份

    var lunarMonth = lunarDateInfo.lMonth;
    var lunarDay = lunarDateInfo.lDay; // 传入农历日期数字返回汉字表示法

    var chinaDay = calendar.toChinaDay(lunarDay);

    if (lunarDay === 1) {
      chinaDay = lunarDateInfo.IMonthCn;
    }

    var holidayInfo = calendar.getHolidayInfo(lunarMonth, lunarDay, year, month, day); // 展示信息优先级：农历节日 > 特殊节日（母亲节等）> 公历节日 > 月份（每月初一显示月份）> 日期

    chinaDay = holidayInfo.vication || chinaDay; // 假期标识

    var holiday = holidayInfo.holiday; // 假期补班标识

    var work = holidayInfo.work;
    item.lDay = chinaDay;
    item.holiday = holiday;
    item.work = work;
  });
}
/**
 * 通过日期计算所属月的总天数
 * @param {*} date 时间对象
 */

function dayCountByMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
/**
 * 通过日期计算所属月的公共属性
 * @param {*} date 时间对象
 */

function monthInfoByDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // 计算当月总天数

  var dayCount = dayCountByMonth(date); // 计算当月第一天星期几

  var firstDayWeekIndex = new Date("".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/1")).getDay(); // 计算当月最后一天星期几

  var lastDayWeekIndex = new Date("".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(dayCount)).getDay(); // 月信息

  var monthInfo = {
    year: year,
    month: month,
    dayCount: dayCount,
    firstDayWeekIndex: firstDayWeekIndex,
    lastDayWeekIndex: lastDayWeekIndex
  };
  return monthInfo;
}
/**
 * 获取月份时间数字，用于比较大小
 * @param {*} date 时间对象
 */

function getYearMonthNum(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var text = year + (month >= 10 ? "".concat(month) : "0".concat(month));
  return parseInt(text, 10);
}
/**
 * 去掉时分秒的时间对象
 * @param {*} date 时间对象
 */

function dateByDate(date) {
  return new Date("".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate()));
}
/**
 * 获取今天日期，用于比较大小
 */

function getTodayDate() {
  return dateByDate(new Date());
}
/**
 * 获取昨天日期
 */

function getYesterday() {
  var date = new Date();
  date.setDate(date.getDate() - 1);
  return dateByDate(date);
}
/**
 * 获取上个月的当日日期
 */

function getLastMonthDay() {
  var date = new Date();
  date.setMonth(date.getMonth());
  return dateByDate(date);
}
/**
 * 格式化范围日期
 */

function getRegionDay(dateRegion) {
  if (dateRegion) {
    if (dateRegion.start) {
      dateRegion.start = dateByDate(dateRegion.start);
    }

    if (dateRegion.end) {
      dateRegion.end = dateByDate(dateRegion.end);
    }
  }

  return dateRegion;
}
/**
 * 生成去掉时分秒的时间对象
 * @param {*} year 年
 * @param {*} month 月
 * @param {*} day 日
 */

function dateByDateText(year, month, day) {
  return new Date([year, month, day].join('/'));
}
/**
 * 计算当前时间所在周的起始范围
 * @param {*} date 时间对象
 */

function weekInfoByDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dateText = "".concat(year, "/").concat(month, "/").concat(date.getDate());
  var nowDate = new Date(dateText);
  var initTime = new Date(dateText);
  initTime.setMonth(0); // 本年初始月份

  initTime.setDate(1); // 本年初始时间

  var differenceVal = nowDate - initTime; // 今天的时间减去本年开始时间，获得相差的时间

  var todayYear = Math.ceil(differenceVal / (24 * 60 * 60 * 1000)); // 获取今天是今年第几天
  // 本年初始时间是1号，所以天数差值需要补充1天

  todayYear += 1; // 如果当前年份第一天不是周一需要补上上年年尾的几天

  todayYear += initTime.getDay() - 1; // 计算出第几周

  var week = Math.ceil(todayYear / 7); // 当天是周几

  var weekIndex = todayYear % 7; // 当年所属周

  var weekInfo = {
    year: year,
    month: month,
    week: week,
    weekIndex: weekIndex
  }; // debugger;
  // 当前日期为周日

  if (weekIndex === 0) {
    var startTime = new Date(dateText); // 减去6天刚好是这周周一

    startTime.setDate(startTime.getDate() - 7 + 1); // 当前日期所属周

    weekInfo.currentWeek = {
      start: startTime,
      end: nowDate
    }; // 当前日期生效周

    weekInfo.validTime = weekInfo.currentWeek;
  } else {
    // 当前日期非周日
    var _startTime = new Date(dateText);

    _startTime.setDate(_startTime.getDate() - weekIndex + 1);

    var endTime = new Date(dateText); // debugger;

    endTime.setDate(endTime.getDate() + 7 - weekIndex); // 当前日期所属周

    weekInfo.currentWeek = {
      start: _startTime,
      end: endTime
    };
    var oldTime = new Date(dateText);
    oldTime.setDate(oldTime.getDate() - weekIndex - 7); // 当前日期生效周

    weekInfo.validTime = {
      start: oldTime,
      end: _startTime
    };
  }

  return weekInfo;
}
/**
 * 计算生成完成日历控件中的天数据
 * @param {*} displayDate 日历显示的日期（月份切换即使用此日期）
 * @param {*} disabledCheck 日期是否禁止点击check函数
 * @param {*} enablefix  是否在日历尾部多加一行
 */

function dayListByDate(displayDate, disabledCheck) {
  var enablefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // 是否在日历尾部多加一行
  // 该月总天数, 该月第一天是周几, 该月最后一天是周几, 当前日期所在的周
  var _monthInfoByDate = monthInfoByDate(displayDate),
      year = _monthInfoByDate.year,
      month = _monthInfoByDate.month,
      dayCount = _monthInfoByDate.dayCount,
      firstDayWeekIndex = _monthInfoByDate.firstDayWeekIndex,
      lastDayWeekIndex = _monthInfoByDate.lastDayWeekIndex; // 月天数对象集合


  var dayList = []; // 获取主体部分数据

  for (var i = 0; i < dayCount; i++) {
    var currentDay = i + 1; // 日期的数字形式，用于比较选中

    var currentDate = dateByDateText(year, month, currentDay);
    dayList.push({
      year: year,
      month: month,
      day: currentDay,
      date: currentDate
    });
  } // 补齐本月之前的数据, 若 firstDayWeekIndex = 0 则当天为周日，需补6天


  var prevDay = firstDayWeekIndex === 0 ? 6 : firstDayWeekIndex - 1;

  if (prevDay) {
    var prevMonth = month - 1;
    var prevYear = year;

    if (prevMonth <= 0) {
      prevMonth = 12;
      prevYear = year - 1;
    }

    var prevDayCount = dayCountByMonth(new Date("".concat(prevYear, "/").concat(prevMonth, "/1")));
    var prevDayBorder = prevDayCount - prevDay;

    for (; prevDayCount > prevDayBorder; prevDayCount--) {
      var _currentDate = new Date([prevYear, prevMonth, prevDayCount].join('/'));

      dayList.unshift({
        year: prevYear,
        month: prevMonth,
        day: prevDayCount,
        date: _currentDate
      });
    }
  } // 补齐本月之后的数据
  // 将日历数据补全6行；


  var nextDay = lastDayWeekIndex === 0 ? 0 : 7 - lastDayWeekIndex;

  if (dayCount + prevDay <= 28 && enablefix) {
    nextDay += 7 * 2;
  } else if (dayCount + prevDay > 28 && dayCount + prevDay <= 35 && enablefix) {
    nextDay += 7;
  }

  if (nextDay) {
    var nextMonth = month + 1;
    var nextYear = year;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = year + 1;
    }

    for (var _i = 1; _i <= nextDay; _i++) {
      var _currentDate2 = new Date([nextYear, nextMonth, _i].join('/'));

      dayList.push({
        year: nextYear,
        month: nextMonth,
        day: _i,
        date: _currentDate2
      });
    }
  }

  addLunarInfo(dayList);

  if (typeof disabledCheck === 'function') {
    dayList.forEach(function (item) {
      item.disabled = disabledCheck(item.date);
    });
  }

  return dayList;
}

/**
 * 配置界面
 */
//   CURRENT: 'week-item',
//   ACTIVE: 'week-active',
//   TODAY: 'week-today',
//   DISABLED: 'week-disabled',
//   PREV: 'week-prev',
//   NEXT: 'week-next',
// };

var DAY_STYLE = {
  CURRENT: 'day-item',
  ACTIVE: 'day-active',
  TEMP_ACTIVE: 'temp-day-active',
  REGION: 'day-region',
  TEMP_REGION: 'temp-day-region',
  TODAY: 'today',
  ACTIVE_TODAY: 'today-active',
  REGION_TODAY: 'today-region',
  DISABLED: 'day-disabled',
  DISABLED_TODAY: 'today-disabled',
  PREV: 'day-prev',
  NEXT: 'day-next'
};
var MONTH_STYLE = {
  CURRENT: 'month-item',
  ACTIVE: 'month-active',
  DISABLED: 'month-disabled',
  THIS_MONTH: 'this-month',
  DISABLED_THIS_MONTH: 'this-month-disabled'
};

// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true

function dayConverters(selectDate, displayDate, disabledCheck) {
  // 是否在日历尾部多加一行
  var enablefix = false;
  var dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  var displayYearMonthNum = getYearMonthNum(displayDate);
  var todayDate = new Date();
  dayList.forEach(function (item) {
    if (!item.disabled) {
      var currentYearMonthNum = getYearMonthNum(item.date);

      if (selectDate && selectDate.getTime() === item.date.getTime()) {
        // 选中时间
        item.status = DAY_STYLE.ACTIVE;
      } else if (item.date.getTime() === todayDate.getTime()) {
        // 追加当天状态
        item.status = DAY_STYLE.TODAY;
      } else if (displayYearMonthNum !== currentYearMonthNum) {
        if (displayYearMonthNum > currentYearMonthNum) {
          // 上个月
          item.status = DAY_STYLE.PREV;
        } else {
          // 下个月
          item.status = DAY_STYLE.NEXT;
        }
      } else {
        // 当月
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      // 不可选择时间
      item.status = DAY_STYLE.DISABLED;
    }
  });
  return dayList;
}

/**
 * 修改日期
 * @param {*} date 时间对象
 * @param {*} num 增减数值
 */

function updateDay(date, num) {
  var newDate = dateByDate(date);
  newDate.setDate(newDate.getDate() + num);
  return newDate;
}
/**
 * 修改月份
 * @param {*} date 时间对象
 * @param {*} num 增减数值
 */

function updateMonth(date, num) {
  var newDate = dateByDate(date);
  newDate.setMonth(newDate.getMonth() + num);
  return newDate;
}
/**
 * 修改年份
 * @param {*} date 时间对象
 * @param {*} num 增减数值
 */

function updateYear(date, num) {
  var newDate = dateByDate(date);
  newDate.setFullYear(newDate.getFullYear() + num);
  return newDate;
}
var updateTime = {
  updateDay: updateDay,
  updateMonth: updateMonth,
  updateYear: updateYear
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'Calendar',
  props: {
    lastYear: {
      type: Boolean,
      default: true
    },
    lastMonth: {
      type: Boolean,
      default: true
    },
    nextYear: {
      type: Boolean,
      default: true
    },
    nextMonth: {
      type: Boolean,
      default: true
    },
    clickDay: {
      type: [Function, Object],
      default: null
    },
    mouseEnter: {
      type: Function,
      default: function _default() {}
    },
    mouseLeave: {
      type: Function,
      default: function _default() {}
    },
    dayList: {
      type: Array
    },
    displayDate: {
      type: Date
    }
  },
  methods: {
    btnChange: function btnChange(type, num) {
      if (this.$parent.updateDisplayDate) this.$parent.updateDisplayDate(type, num);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "day-wrap" }, [
    _c("div", { staticClass: "header" }, [
      _vm.lastYear
        ? _c(
            "div",
            {
              staticClass: "icon-btn",
              attrs: { title: "上一年" },
              on: {
                click: function($event) {
                  return _vm.btnChange("updateYear", -1)
                }
              }
            },
            [_c("i", { staticClass: "double-left-btn" })]
          )
        : _c("div", { staticClass: "icon-btn" }),
      _vm._v(" "),
      _vm.lastMonth
        ? _c(
            "div",
            {
              staticClass: "icon-btn",
              attrs: { title: "上个月" },
              on: {
                click: function($event) {
                  return _vm.btnChange("updateMonth", -1)
                }
              }
            },
            [_c("i", { staticClass: "left-btn" })]
          )
        : _c("div", { staticClass: "icon-btn" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "center-btn",
          attrs: {
            title:
              _vm.displayDate.getFullYear() +
              "-" +
              _vm.displayDate.getMonth() +
              1
          }
        },
        [
          _vm._v(
            "\n      " +
              _vm._s(_vm.displayDate.getFullYear()) +
              " 年 " +
              _vm._s(_vm.displayDate.getMonth() + 1) +
              " 月\n    "
          )
        ]
      ),
      _vm._v(" "),
      _vm.nextMonth
        ? _c(
            "div",
            {
              staticClass: "icon-btn",
              attrs: { title: "下个月" },
              on: {
                click: function($event) {
                  return _vm.btnChange("updateMonth", 1)
                }
              }
            },
            [_c("i", { staticClass: "right-btn" })]
          )
        : _c("div", { staticClass: "icon-btn" }),
      _vm._v(" "),
      _vm.nextYear
        ? _c(
            "div",
            {
              staticClass: "icon-btn",
              attrs: { title: "下一年" },
              on: {
                click: function($event) {
                  return _vm.btnChange("updateYear", 1)
                }
              }
            },
            [_c("i", { staticClass: "double-right-btn" })]
          )
        : _c("div", { staticClass: "icon-btn" })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "head-day-list" },
      _vm._l(["一", "二", "三", "四", "五", "六", "日"], function(val) {
        return _c(
          "span",
          {
            key: val,
            class:
              "head-day-" + (val === "六" || val === "日" ? "opacity" : "item")
          },
          [_c("span", [_vm._v(_vm._s(val))])]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "day-list" },
      _vm._l(_vm.dayList, function(dayData) {
        return _c(
          "div",
          {
            key: "" + dayData.year + dayData.month + dayData.day,
            class: dayData.status,
            on: {
              click: function($event) {
                return _vm.clickDay(dayData, $event)
              },
              mouseenter: function($event) {
                return _vm.mouseEnter(dayData, $event)
              },
              mouseleave: function($event) {
                return _vm.mouseLeave(dayData, $event)
              }
            }
          },
          [
            _c("span", { staticClass: "day-item-val" }, [
              _vm._v(_vm._s(dayData.day))
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "vication-wrap", attrs: { title: dayData.lDay } },
              [_vm._v(_vm._s(dayData.lDay))]
            ),
            _vm._v(" "),
            dayData.holiday
              ? _c("p", { staticClass: "holiday-wrap" }, [_vm._v("假")])
              : _vm._e(),
            _vm._v(" "),
            dayData.work
              ? _c("p", { staticClass: "work-wrap" }, [_vm._v("班")])
              : _vm._e()
          ]
        )
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3252ec1e_0", { source: "\n.day-list[data-v-3252ec1e] {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n    text-align: left;\n    padding-left: 1%;\n    padding-right: 1%;\n}\n.day-item[data-v-3252ec1e],\n.today[data-v-3252ec1e],\n.day-prev[data-v-3252ec1e],\n.day-next[data-v-3252ec1e],\n.day-active[data-v-3252ec1e],\n.temp-day-active[data-v-3252ec1e],\n.day-region[data-v-3252ec1e],\n.temp-day-region[data-v-3252ec1e],\n.day-disabled[data-v-3252ec1e],\n.today-active[data-v-3252ec1e],\n.today-region[data-v-3252ec1e],\n.head-day-item[data-v-3252ec1e],\n.head-day-opacity[data-v-3252ec1e] {\n    position: relative;\n    display: inline-block;\n    width: 14%;\n    padding-left: 3px;\n    padding-right: 3px;\n    text-align: center;\n    border-radius: 2px;\n    box-sizing: border-box;\n}\n.day-item .day-item-val[data-v-3252ec1e],\n.today .day-item-val[data-v-3252ec1e],\n.day-prev .day-item-val[data-v-3252ec1e],\n.day-next .day-item-val[data-v-3252ec1e],\n.day-active .day-item-val[data-v-3252ec1e],\n.temp-day-active .day-item-val[data-v-3252ec1e],\n.day-region .day-item-val[data-v-3252ec1e],\n.temp-day-region .day-item-val[data-v-3252ec1e],\n.day-disabled .day-item-val[data-v-3252ec1e],\n.today-active .day-item-val[data-v-3252ec1e],\n.today-region .day-item-val[data-v-3252ec1e] {\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n    text-align: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.day-item .day-item-val[data-v-3252ec1e]:hover,\n.day-prev .day-item-val[data-v-3252ec1e]:hover {\n    background-color: #f8f8f8;\n}\n.today .day-item-val[data-v-3252ec1e] {\n    color: #000;\n    background-color: #f7f7f7;\n}\n.day-prev[data-v-3252ec1e], .day-next[data-v-3252ec1e] {\n    color: #a6a6a6;\n}\n.day-active .day-item-val[data-v-3252ec1e],\n.today-active .day-item-val[data-v-3252ec1e] {\n    color: #fff;\n    background-color: #118bfb;\n}\n.temp-day-active .day-item-val[data-v-3252ec1e] {\n    color: #fff;\n    background-color: #afd3f5;\n}\n.day-region .day-item-val[data-v-3252ec1e] {\n    background-color: #deedfb;\n    color: #02498a;\n}\n.temp-day-region .day-item-val[data-v-3252ec1e] {\n    background-color: #f2f7fb;\n    color: #9fc2e2;\n}\n.day-disabled .day-item-val[data-v-3252ec1e] {\n    color: #cccccc;\n    cursor: not-allowed;\n}\n.day-disabled .day-item-val[data-v-3252ec1e]:hover {\n    background-color: #fff;\n}\n\n/************************************* 新已确认样式 day start **************************************/\n.head-day-list[data-v-3252ec1e] {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n}\n.head-day-opacity[data-v-3252ec1e] {\n    color: #ffb036;\n    opacity: .8;\n}\n.holiday-wrap[data-v-3252ec1e], .work-wrap[data-v-3252ec1e] {\n    position: absolute;\n    top: 0;\n    left: 5px;\n    padding-left: 1px;\n    padding-right: 1px;\n    color: #fff;\n    width: 12px;\n    height: 12px;\n    text-align: left;\n    line-height: 10px;\n    font-size: 7px;\n    margin-top: 0;\n    z-index: 10;\n}\n.holiday-wrap[data-v-3252ec1e]:before, .work-wrap[data-v-3252ec1e]:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    z-index: -999;\n    border-right: 2.2em solid transparent;\n}\n.holiday-wrap[data-v-3252ec1e]:before {\n    border-top: 2.2em solid #ff6459;\n}\n.day-disabled .holiday-wrap[data-v-3252ec1e]:before {\n    border-top: 2.2em solid rgba(255, 100, 89, 0.5);\n}\n.work-wrap[data-v-3252ec1e]:before {\n    border-top: 2.2em solid #118bfb;\n}\n.day-disabled .work-wrap[data-v-3252ec1e]:before {\n    border-top: 2.2em solid rgba(17, 139, 251, 0.5);\n}\n.day-disabled .vication-wrap[data-v-3252ec1e] {\n    color: #cccccc;\n}\n.vication-wrap[data-v-3252ec1e] {\n    font-size: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 10px;\n    margin: 0;\n    padding: 0;\n    padding-top: 3px;\n}\n/************************************* 新已确认样式 day end **************************************/\n\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/calendar.vue"],"names":[],"mappings":";AAyGA;IACA,gBAAA;IACA,kBAAA;IACA,WAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;;;;;;;;;;;;;IAaA,kBAAA;IACA,qBAAA;IACA,UAAA;IACA,iBAAA;IACA,kBAAA;IACA,kBAAA;IACA,kBAAA;IACA,sBAAA;AACA;AAEA;;;;;;;;;;;IAWA,qBAAA;IACA,UAAA;IACA,WAAA;IACA,gBAAA;IACA,sBAAA;IACA,kBAAA;IACA,kBAAA;IACA,eAAA;AACA;AAEA;;IAEA,yBAAA;AACA;AAEA;IACA,WAAA;IACA,yBAAA;AACA;AACA;IACA,cAAA;AACA;AAEA;;IAEA,WAAA;IACA,yBAAA;AACA;AAEA;IACA,WAAA;IACA,yBAAA;AACA;AAEA;IACA,yBAAA;IACA,cAAA;AACA;AAEA;IACA,yBAAA;IACA,cAAA;AACA;AAEA;IACA,cAAA;IACA,mBAAA;AACA;AACA;IACA,sBAAA;AACA;;AAEA,8FAAA;AACA;IACA,gBAAA;IACA,kBAAA;IACA,WAAA;IACA,eAAA;AACA;AAEA;IACA,cAAA;IACA,WAAA;AACA;AAEA;IACA,kBAAA;IACA,MAAA;IACA,SAAA;IACA,iBAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,cAAA;IACA,aAAA;IACA,WAAA;AACA;AAEA;IACA,YAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;IACA,aAAA;IACA,qCAAA;AACA;AAEA;IACA,+BAAA;AACA;AAEA;IACA,+CAAA;AACA;AAEA;IACA,+BAAA;AACA;AAEA;IACA,+CAAA;AACA;AAEA;IACA,cAAA;AACA;AAEA;IACA,cAAA;IACA,mBAAA;IACA,gBAAA;IACA,uBAAA;IACA,iBAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA;AACA,4FAAA","file":"calendar.vue","sourcesContent":["<template>\n  <div class=\"day-wrap\">\n    <!-- 日历头 -->\n    <div class=\"header\">\n      <div v-if=\"lastYear\" class=\"icon-btn\" title=\"上一年\" @click=\"btnChange('updateYear', -1)\">\n        <i class=\"double-left-btn\" />\n      </div>\n      <div v-else class=\"icon-btn\"/>\n      <div v-if=\"lastMonth\" class=\"icon-btn\" title=\"上个月\" @click=\"btnChange('updateMonth', -1)\">\n        <i class=\"left-btn\" />\n      </div>\n      <div v-else class=\"icon-btn\"/>\n      <div :title=\"displayDate.getFullYear() + '-' + displayDate.getMonth() + 1\" class=\"center-btn\">\n        {{displayDate.getFullYear()}} 年 {{displayDate.getMonth() + 1}} 月\n      </div>\n      <div v-if=\"nextMonth\" class=\"icon-btn\" title=\"下个月\" @click=\"btnChange('updateMonth', 1)\">\n        <i class=\"right-btn\" />\n      </div>\n      <div v-else class=\"icon-btn\"/>\n      <div v-if=\"nextYear\" class=\"icon-btn\" title=\"下一年\" @click=\"btnChange('updateYear', 1)\">\n        <i class=\"double-right-btn\" />\n      </div>\n      <div v-else class=\"icon-btn\"/>\n    </div>\n\n    <!-- 星期头 -->\n    <div class=\"head-day-list\">\n      <span\n        v-for=\"val in ['一', '二', '三', '四', '五', '六', '日']\"\n        :class=\"'head-day-' + (val === '六' || val === '日' ? 'opacity' : 'item')\"\n        :key=\"val\"\n      >\n        <span>{{ val }}</span>\n      </span>\n    </div>\n\n    <!-- 日期单元 -->\n    <div class=\"day-list\">\n      <div\n        v-for=\"dayData in dayList\"\n        :key=\"`${dayData.year}${dayData.month}${dayData.day}`\"\n        :class=\"dayData.status\"\n        @click=\"clickDay(dayData, $event)\"\n        @mouseenter=\"mouseEnter(dayData, $event)\"\n        @mouseleave=\"mouseLeave(dayData, $event)\"\n      >\n        <span class=\"day-item-val\">{{dayData.day}}</span>\n        <p class=\"vication-wrap\" :title=\"dayData.lDay\">{{dayData.lDay}}</p>\n        <p v-if=\"dayData.holiday\" class=\"holiday-wrap\">假</p>\n        <p v-if=\"dayData.work\" class=\"work-wrap\">班</p>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: 'Calendar',\n  props: {\n    lastYear: {\n      type: Boolean,\n      default: true,\n    },\n    lastMonth: {\n      type: Boolean,\n      default: true,\n    },\n    nextYear: {\n      type: Boolean,\n      default: true,\n    },\n    nextMonth: {\n      type: Boolean,\n      default: true,\n    },\n    clickDay: {\n      type: [Function, Object],\n      default: null,\n    },\n    mouseEnter: {\n      type: Function,\n      default() {},\n    },\n    mouseLeave: {\n      type: Function,\n      default() {},\n    },\n    dayList: {\n      type: Array,\n    },\n    displayDate: {\n      type: Date,\n    },\n  },\n  methods: {\n    btnChange(type, num) {\n      if (this.$parent.updateDisplayDate) this.$parent.updateDisplayDate(type, num);\n    },\n  },\n};\n</script>\n\n<style scoped>\n\n.day-list {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n    text-align: left;\n    padding-left: 1%;\n    padding-right: 1%;\n}\n\n.day-item,\n.today,\n.day-prev,\n.day-next,\n.day-active,\n.temp-day-active,\n.day-region,\n.temp-day-region,\n.day-disabled,\n.today-active,\n.today-region,\n.head-day-item,\n.head-day-opacity {\n    position: relative;\n    display: inline-block;\n    width: 14%;\n    padding-left: 3px;\n    padding-right: 3px;\n    text-align: center;\n    border-radius: 2px;\n    box-sizing: border-box;\n}\n\n.day-item .day-item-val,\n.today .day-item-val,\n.day-prev .day-item-val,\n.day-next .day-item-val,\n.day-active .day-item-val,\n.temp-day-active .day-item-val,\n.day-region .day-item-val,\n.temp-day-region .day-item-val,\n.day-disabled .day-item-val,\n.today-active .day-item-val,\n.today-region .day-item-val {\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n    text-align: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.day-item .day-item-val:hover,\n.day-prev .day-item-val:hover {\n    background-color: #f8f8f8;\n}\n\n.today .day-item-val {\n    color: #000;\n    background-color: #f7f7f7;\n}\n.day-prev, .day-next {\n    color: #a6a6a6;\n}\n\n.day-active .day-item-val,\n.today-active .day-item-val {\n    color: #fff;\n    background-color: #118bfb;\n}\n\n.temp-day-active .day-item-val {\n    color: #fff;\n    background-color: #afd3f5;\n}\n\n.day-region .day-item-val {\n    background-color: #deedfb;\n    color: #02498a;\n}\n\n.temp-day-region .day-item-val {\n    background-color: #f2f7fb;\n    color: #9fc2e2;\n}\n\n.day-disabled .day-item-val {\n    color: #cccccc;\n    cursor: not-allowed;\n}\n.day-disabled .day-item-val:hover {\n    background-color: #fff;\n}\n\n/************************************* 新已确认样式 day start **************************************/\n.head-day-list {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n}\n\n.head-day-opacity {\n    color: #ffb036;\n    opacity: .8;\n}\n\n.holiday-wrap, .work-wrap {\n    position: absolute;\n    top: 0;\n    left: 5px;\n    padding-left: 1px;\n    padding-right: 1px;\n    color: #fff;\n    width: 12px;\n    height: 12px;\n    text-align: left;\n    line-height: 10px;\n    font-size: 7px;\n    margin-top: 0;\n    z-index: 10;\n}\n\n.holiday-wrap:before, .work-wrap:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    z-index: -999;\n    border-right: 2.2em solid transparent;\n}\n\n.holiday-wrap:before {\n    border-top: 2.2em solid #ff6459;\n}\n\n.day-disabled .holiday-wrap:before {\n    border-top: 2.2em solid rgba(255, 100, 89, 0.5);\n}\n\n.work-wrap:before {\n    border-top: 2.2em solid #118bfb;\n}\n\n.day-disabled .work-wrap:before {\n    border-top: 2.2em solid rgba(17, 139, 251, 0.5);\n}\n\n.day-disabled .vication-wrap {\n    color: #cccccc;\n}\n\n.vication-wrap {\n    font-size: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 10px;\n    margin: 0;\n    padding: 0;\n    padding-top: 3px;\n}\n/************************************* 新已确认样式 day end **************************************/\n\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-3252ec1e";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Calendar = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
var script$1 = {
  name: 'Day',
  components: {
    Calendar: Calendar
  },
  props: {
    // 选中的日期，范围模式下表示起始日期
    value: {
      type: Date
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    // 选中时的回调
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      displayDate: new Date(this.value.getTime())
    };
  },
  watch: {
    value: function value(newValue) {
      this.displayDate = new Date(newValue.getTime());
    }
  },
  computed: {
    dayList: function dayList() {
      var value = this.value,
          displayDate = this.displayDate,
          disabledDay = this.disabledDay,
          mouseHitDate = this.mouseHitDate;
      var dayList = dayConverters(value, displayDate, disabledDay);
      return dayList;
    }
  },
  methods: {
    // 可选时间判断
    disabledDay: function disabledDay(date) {
      var startDate = this.startDate,
          endDate = this.endDate;

      if (startDate && date < startDate || date > endDate) {
        return true;
      }

      return false;
    },
    updateDisplayDate: function updateDisplayDate(type, num) {
      this.displayDate = updateTime[type](this.displayDate, num);
    },
    // 选中某个日期
    clickDay: function clickDay(dayInfo) {
      this.mouseHitDate = null;
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date,
          disabled = dayInfo.disabled;
      var onSus = this.onSus;

      if (!disabled) {
        console.log('clickDay', "".concat(year, "/").concat(month, "/").concat(day));
        onSus({
          date: date
        });
      }
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Calendar", {
    attrs: {
      "click-day": _vm.clickDay,
      "day-list": _vm.dayList,
      "display-date": _vm.displayDate
    }
  })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Day = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true

function cycleConverters(displayDate, disabledCheck, mouseStart, mouseEnd, startDate, endDate) {
  // 是否在日历尾部多加一行
  var enablefix = false;
  var dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  var displayMonth = displayDate.getMonth();
  var todayDate = getTodayDate(); // 显示日历所属的月份

  var endYearMonthNum = getYearMonthNum(displayDate);
  dayList.forEach(function (item) {
    if (!item.disabled) {
      // 当前时间对应的月
      var currentYearMonthNum = getYearMonthNum(item.date);

      if (item.date.getTime() === todayDate.getTime() && displayMonth === item.date.getMonth()) {
        item.status = DAY_STYLE.TODAY;
      } else if (currentYearMonthNum !== endYearMonthNum) {
        if (currentYearMonthNum > endYearMonthNum) {
          // 下个月
          item.status = DAY_STYLE.NEXT;
        } else {
          // 上个月
          item.status = DAY_STYLE.PREV;
        }
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });

  if (mouseStart) {
    dayList.forEach(function (item) {
      if (item.date >= mouseStart && item.date <= mouseEnd && displayMonth === item.date.getMonth()) {
        if (item.date.getTime() === mouseStart.getTime() || item.date.getTime() === mouseEnd.getTime()) {
          // 周期第一天或最后一天
          item.status = DAY_STYLE.ACTIVE;
        } else {
          // 周期第一天和最后一天之间的时间
          item.status = DAY_STYLE.REGION;
        }
      }
    });
  } else if (startDate) {
    dayList.forEach(function (item) {
      if (item.date >= startDate && item.date <= endDate && displayMonth === item.date.getMonth()) {
        if (item.date.getTime() === startDate.getTime() || item.date.getTime() === endDate.getTime()) {
          // 周期第一天或最后一天
          item.status = DAY_STYLE.ACTIVE;
        } else {
          // 周期第一天和最后一天之间的时间
          item.status = DAY_STYLE.REGION;
        }
      }
    });
  }

  return dayList;
}

//
var script$2 = {
  name: 'Cycle',
  components: {
    Calendar: Calendar
  },
  props: {
    value: {
      type: Date
    },
    // 自定义时间区间
    limit: {
      type: Number,
      default: 7
    },
    startDate: {
      type: [Date, Object],
      default: null
    },
    endDate: {
      type: [Date, Object],
      default: new Date()
    },
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      mouseDay: null,
      // 鼠标移入的天数
      displayStart: this.getDisplayStart(this.value),
      displayEnd: this.value
    };
  },
  watch: {
    dateRegion: function dateRegion(newValue) {
      this.displayStart = this.getDisplayStart(newValue);
      this.displayEnd = this.value;
    }
  },
  computed: {
    startDayList: function startDayList() {
      var mouseDay = this.mouseDay,
          displayStart = this.displayStart,
          disabledDay = this.disabledDay,
          value = this.value,
          limit = this.limit;
      var dayList = cycleConverters(displayStart, disabledDay, mouseDay ? updateTime.updateDay(mouseDay, -limit) : null, mouseDay, updateTime.updateDay(value, -limit), value);
      return dayList;
    },
    endDayList: function endDayList() {
      var mouseDay = this.mouseDay,
          displayEnd = this.displayEnd,
          disabledDay = this.disabledDay,
          value = this.value,
          limit = this.limit;
      var dayList = cycleConverters(displayEnd, disabledDay, mouseDay ? updateTime.updateDay(mouseDay, -limit) : null, mouseDay, updateTime.updateDay(value, -limit), value);
      return dayList;
    }
  },
  methods: {
    // 可选时间判断
    disabledDay: function disabledDay(date) {
      var startDate = this.startDate,
          endDate = this.endDate;

      if (startDate && date < startDate || date > endDate) {
        return true;
      }

      return false;
    },
    getDisplayStart: function getDisplayStart(date) {
      var startDate;
      var limit = this.limit;
      var endMonth = date.getMonth();
      var start = updateTime.updateDay(date, -limit);
      var startMonth = start.getMonth();

      if (startMonth === endMonth) {
        startDate = updateTime.updateMonth(endDate, -1);
      } else {
        startDate = start;
      }

      return startDate;
    },
    updateDisplayDate: function updateDisplayDate(type, num) {
      this.displayStart = updateTime[type](this.displayStart, num);
      this.displayEnd = updateTime[type](this.displayEnd, num);
    },
    // 选中某个日期
    clickDay: function clickDay(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date,
          disabled = dayInfo.disabled;

      if (!disabled) {
        this.mouseDay = null;
        var start = updateTime.updateDay(date, -this.limit);
        this.onSus({
          start: start,
          end: date
        });
        console.log('clickDay', "".concat(year, "/").concat(month, "/").concat(day));
      }
    },
    enter: function enter(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date,
          disabled = dayInfo.disabled;

      if (!disabled) {
        this.mouseDay = date;
        console.log('enter', "".concat(year, "/").concat(month, "/").concat(day));
      }
    },
    leave: function leave(dayInfo, event) {
      this.mouseDay = null;
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "custom-week-wrap", on: { mouseleave: _vm.leave } },
    [
      _c("Calendar", {
        attrs: {
          "next-year": false,
          "next-month": false,
          "click-day": _vm.clickDay,
          "mouse-enter": _vm.enter,
          "day-list": _vm.startDayList,
          "display-date": _vm.displayStart
        }
      }),
      _vm._v(" "),
      _c("Calendar", {
        attrs: {
          "last-year": false,
          "last-month": false,
          "click-day": _vm.clickDay,
          "mouse-enter": _vm.enter,
          "day-list": _vm.endDayList,
          "display-date": _vm.displayEnd
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-7c33b4d8_0", { source: "\n.custom-week-wrap[data-v-7c33b4d8] {\n  display: flex;\n  justify-content: space-between;\n}\n.day-wrap[data-v-7c33b4d8] {\n  flex: 1;\n  position: relative;\n}\n.day-wrap[data-v-7c33b4d8]:nth-child(2n)::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: #e4e7ed;\n  z-index: 1000;\n}\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/cycle.vue"],"names":[],"mappings":";AA6JA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,OAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,mBAAA;EACA,aAAA;AACA","file":"cycle.vue","sourcesContent":["<template>\n  <div class=\"custom-week-wrap\" @mouseleave=\"leave\" >\n     <Calendar\n      :next-year = \"false\"\n      :next-month = \"false\"\n      :click-day = \"clickDay\"\n      :mouse-enter = \"enter\"\n      :day-list = \"startDayList\"\n      :display-date = \"displayStart\"\n    />\n\n    <Calendar\n      :last-year = \"false\"\n      :last-month = \"false\"\n      :click-day = \"clickDay\"\n      :mouse-enter = \"enter\"\n      :day-list = \"endDayList\"\n      :display-date = \"displayEnd\"\n    />\n  </div>\n</template>\n\n<script>\nimport { cycleConverters } from './lib/cycle-converters';\nimport { getLastMonthDay, getYesterday, getTodayDate } from './lib/tools-date';\nimport updateTime from './lib/update-time';\nimport Calendar from './calendar.vue';\n\nexport default {\n  name: 'Cycle',\n  components: {\n    Calendar,\n  },\n  props: {\n    value: {\n      type: Date,\n    },\n    // 自定义时间区间\n    limit: {\n      type: Number,\n      default: 7,\n    },\n    startDate: {\n      type: [Date, Object],\n      default: null,\n    },\n    endDate: {\n      type: [Date, Object],\n      default: new Date(),\n    },\n    onSus: {\n      type: Function,\n      default() {},\n    },\n  },\n  data() {\n    return {\n      mouseDay: null, // 鼠标移入的天数\n      displayStart: this.getDisplayStart(this.value),\n      displayEnd: this.value,\n    };\n  },\n  watch: {\n    dateRegion(newValue) {\n      this.displayStart = this.getDisplayStart(newValue);\n      this.displayEnd = this.value;\n    },\n  },\n  computed: {\n    startDayList() {\n      const {\n        mouseDay,\n        displayStart, // 显示时间\n        disabledDay, // 禁止选择判断逻辑\n        value,\n        limit\n      } = this;\n      const dayList = cycleConverters(\n        displayStart,\n        disabledDay,\n        mouseDay ? updateTime.updateDay(mouseDay, -limit) : null,\n        mouseDay,\n        updateTime.updateDay(value, -limit),\n        value,\n      );\n      return dayList;\n    },\n    endDayList() {\n      const {\n        mouseDay,\n        displayEnd, // 显示时间\n        disabledDay, // 禁止选择判断逻辑\n        value,\n        limit\n      } = this;\n      const dayList = cycleConverters(\n        displayEnd,\n        disabledDay,\n        mouseDay ? updateTime.updateDay(mouseDay, -limit) : null,\n        mouseDay,\n        updateTime.updateDay(value, -limit),\n        value,\n      );\n      return dayList;\n    },\n  },\n  methods: {\n    // 可选时间判断\n    disabledDay(date) {\n      const { startDate, endDate } = this;\n      if ((startDate && date < startDate) || date > endDate) {\n        return true;\n      }\n      return false;\n    },\n    getDisplayStart(date) {\n      let startDate;\n      const { limit } = this;\n      const endMonth = date.getMonth();\n      const start = updateTime.updateDay(date, -limit);\n      const startMonth = start.getMonth();\n      if(startMonth === endMonth) {\n        startDate = updateTime.updateMonth(endDate, -1);\n      } else {\n        startDate = start;\n      }\n      return startDate;\n    },\n    updateDisplayDate(type, num) {\n      this.displayStart = updateTime[type](this.displayStart, num);\n      this.displayEnd = updateTime[type](this.displayEnd, num);\n    },\n    // 选中某个日期\n    clickDay(dayInfo) {\n      const { year, month, day, date, disabled } = dayInfo;\n      if (!disabled) {\n        this.mouseDay = null;\n        const start = updateTime.updateDay(date, -this.limit);\n        this.onSus({ start, end: date });\n        console.log('clickDay', `${year}/${month}/${day}`);\n      }\n    },\n    enter(dayInfo) {\n      const { year, month, day, date, disabled } = dayInfo;\n      if (!disabled) {\n        this.mouseDay = date;\n        console.log('enter', `${year}/${month}/${day}`);\n      }\n    },\n    leave(dayInfo, event) {\n      this.mouseDay = null; \n    },\n  },\n};\n</script>\n\n<style scoped>\n.custom-week-wrap {\n  display: flex;\n  justify-content: space-between;\n}\n\n.day-wrap {\n  flex: 1;\n  position: relative;\n}\n\n.day-wrap:nth-child(2n)::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: #e4e7ed;\n  z-index: 1000;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-7c33b4d8";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var Cycle = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    browser,
    undefined
  );

// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true

function weekConverters(selectDate, displayDate, disabledCheck, mouseHitDate) {
  // 是否在日历尾部多加一行
  var enablefix = false;
  var dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  var todayDate = getTodayDate(); // 显示日历所属的月份

  var endYearMonthNum = getYearMonthNum(displayDate);
  dayList.forEach(function (item) {
    if (!item.disabled) {
      // 当前时间对应的月
      var currentYearMonthNum = getYearMonthNum(item.date);

      if (item.date.getTime() === todayDate.getTime()) {
        item.status = DAY_STYLE.TODAY;
      } else if (currentYearMonthNum !== endYearMonthNum) {
        if (currentYearMonthNum > endYearMonthNum) {
          // 下个月
          item.status = DAY_STYLE.NEXT;
        } else {
          // 上个月
          item.status = DAY_STYLE.PREV;
        }
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });

  if (selectDate) {
    var weekInfo = weekInfoByDate(selectDate);
    var _weekInfo$currentWeek = weekInfo.currentWeek,
        start = _weekInfo$currentWeek.start,
        end = _weekInfo$currentWeek.end;

    if (end < todayDate) {
      dayList.forEach(function (item) {
        if (!item.disabled && item.year <= weekInfo.year && item.month <= weekInfo.month && item.date >= start && item.date <= end) {
          if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
            // 自然周第一天或最后一天
            item.status = DAY_STYLE.ACTIVE;
          } else {
            // 自然周第一天和最后一天之间的时间
            item.status = DAY_STYLE.REGION;
          }
        }
      });
    }
  } // 如果鼠标滑动到某时间需要 计算其对应的周


  if (mouseHitDate) {
    var _weekInfo = weekInfoByDate(mouseHitDate);

    var _weekInfo$currentWeek2 = _weekInfo.currentWeek,
        _start = _weekInfo$currentWeek2.start,
        _end = _weekInfo$currentWeek2.end;

    if (_end < todayDate) {
      // weekInfo.month <= month &&
      dayList.forEach(function (item) {
        if (!item.disabled && item.date >= _start && item.date <= _end) {
          if (item.date.getTime() === _start.getTime() || item.date.getTime() === _end.getTime()) {
            item.status = DAY_STYLE.TEMP_ACTIVE;
          } else {
            item.status = DAY_STYLE.TEMP_REGION;
          }
        }
      });
    }
  }

  return dayList;
}

//
var script$3 = {
  name: 'Week',
  components: {
    Calendar: Calendar
  },
  props: {
    value: {
      type: Date
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      mouseHitDate: null,
      // 鼠标命中日期
      displayDate: new Date(this.value.getTime())
    };
  },
  watch: {
    value: function value(newValue) {
      this.displayDate = new Date(newValue.getTime());
    }
  },
  computed: {
    dayList: function dayList() {
      var value = this.value,
          displayDate = this.displayDate,
          disabledDay = this.disabledDay,
          mouseHitDate = this.mouseHitDate;
      var dayList = weekConverters(value, displayDate, disabledDay, mouseHitDate);
      return dayList;
    }
  },
  methods: {
    // 可选时间判断
    disabledDay: function disabledDay(date) {
      var startDate = this.startDate,
          endDate = this.endDate;

      if (startDate && date < startDate || date > endDate) {
        return true;
      }

      return false;
    },
    updateDisplayDate: function updateDisplayDate(type, num) {
      this.displayDate = updateTime[type](this.displayDate, num);
    },
    // 选中某个日期
    clickDay: function clickDay(dayInfo) {
      this.mouseHitDate = null;
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date;
      var startDate = this.startDate,
          endDate = this.endDate,
          onSus = this.onSus;

      var _weekInfoByDate = weekInfoByDate(date),
          _weekInfoByDate$curre = _weekInfoByDate.currentWeek,
          start = _weekInfoByDate$curre.start,
          end = _weekInfoByDate$curre.end;

      if (!(startDate && end < startDate) && end < endDate) {
        console.log('clickDay', "".concat(year, "/").concat(month, "/").concat(day));
        onSus({
          start: start,
          end: end
        });
      }
    },
    enter: function enter(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day;
      this.mouseHitDate = new Date("".concat(year, "/").concat(month, "/").concat(day, "/"));
      console.log('enter', "".concat(year, "/").concat(month, "/").concat(day));
    },
    leave: function leave(dayInfo) {
      this.mouseHitDate = null;
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day;
      console.log('leave', "".concat(year, "/").concat(month, "/").concat(day));
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Calendar", {
    attrs: {
      "click-day": _vm.clickDay,
      "mouse-enter": _vm.enter,
      "mouse-leave": _vm.leave,
      "day-list": _vm.dayList,
      "display-date": _vm.displayDate
    }
  })
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Week = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true

function monthConverters(selectDate, displayDate, disabledCheck) {
  var monthList = [];
  var year = displayDate.getFullYear();
  var selectYearMonth = getYearMonthNum(selectDate); // (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();

  var _data;

  var _date;

  var _disabled;

  var _status;

  var _dateNum;

  for (var m = 1; m <= 12; m++) {
    _date = new Date(year, m, 0);
    _dateNum = getYearMonthNum(_date);
    _disabled = disabledCheck(_date);

    if (_disabled) {
      _status = MONTH_STYLE.DISABLED;
    } else {
      _status = MONTH_STYLE.CURRENT;
    }

    if (selectYearMonth === _dateNum) {
      _status = MONTH_STYLE.ACTIVE;
    }

    _data = {
      year: year,
      month: m,
      date: _date,
      dateNum: _dateNum,
      disabled: _disabled,
      status: _status
    };
    monthList.push(_data);
  }

  return monthList;
}

//
var script$4 = {
  name: 'Month',
  props: {
    // 选中的日期，范围模式下表示起始日期
    value: {
      type: Date
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    // 选中时的回调
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      displayDate: new Date(this.value.getTime())
    };
  },
  watch: {
    value: function value(newValue) {
      this.displayDate = new Date(newValue.getTime());
    }
  },
  computed: {
    monthList: function monthList() {
      var value = this.value,
          displayDate = this.displayDate,
          disabledDay = this.disabledDay;
      var list = monthConverters(value, displayDate, disabledDay);
      return list;
    }
  },
  methods: {
    // 可选时间判断
    disabledDay: function disabledDay(date) {
      var startDate = this.startDate,
          endDate = this.endDate;

      if (startDate && date < startDate || date > endDate) {
        return true;
      }

      return false;
    },
    updateDisplayDate: function updateDisplayDate(type, num) {
      this.displayDate = updateTime[type](this.displayDate, num);
    },
    // 选中某个日期
    clickDay: function clickDay(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          date = dayInfo.date,
          disabled = dayInfo.disabled;
      var onSus = this.onSus;

      if (!disabled) {
        console.log('clickDay', "".concat(year, "/").concat(month));
        onSus(dayInfo);
      }
    }
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "day-wrap" }, [
    _c("div", { staticClass: "header" }, [
      _c(
        "div",
        {
          staticClass: "icon-btn",
          attrs: { title: "上一年" },
          on: {
            click: function($event) {
              return _vm.updateDisplayDate("updateYear", -1)
            }
          }
        },
        [_c("i", { staticClass: "double-left-btn" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "center-btn",
          attrs: { title: _vm.displayDate.getFullYear() }
        },
        [
          _vm._v(
            "\n        " + _vm._s(_vm.displayDate.getFullYear()) + " 年\n      "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "icon-btn",
          attrs: { title: "下一年" },
          on: {
            click: function($event) {
              return _vm.updateDisplayDate("updateYear", 1)
            }
          }
        },
        [_c("i", { staticClass: "double-right-btn" })]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "month-list" },
      _vm._l(_vm.monthList, function(monthData) {
        return _c(
          "div",
          {
            key: "" + monthData.year + monthData.month,
            class: monthData.status,
            on: {
              click: function($event) {
                return _vm.clickDay(monthData, $event)
              }
            }
          },
          [
            _c("span", { staticClass: "month-item-val" }, [
              _vm._v(_vm._s(monthData.month))
            ])
          ]
        )
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-77fcc2e4_0", { source: "\n.month-list[data-v-77fcc2e4] {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n    text-align: left;\n    padding-bottom: 5px;\n}\n.month-item[data-v-77fcc2e4], .month-disabled[data-v-77fcc2e4], .month-active[data-v-77fcc2e4] {\n    display: inline-block;\n    width: 24%;\n    padding: 5%;\n    border-radius: 2px;\n    text-align: center;\n    box-sizing: border-box;\n}\n.month-active[data-v-77fcc2e4] {\n    cursor: pointer;\n    background: #118bfb;\n    color: #fff;\n}\n.month-item[data-v-77fcc2e4] {\n    cursor: pointer;\n}\n.month-disabled[data-v-77fcc2e4]{\n    cursor: not-allowed;\n    color: #ccc;\n}\n.month-item[data-v-77fcc2e4]:hover {\n    background-color: #f8f8f8;\n}\n.month-item[data-v-77fcc2e4]:nth-child(4n+1), \n.month-disabled[data-v-77fcc2e4]:nth-child(4n+1) {\n    margin-left: 2%;\n}\n.month-item-val[data-v-77fcc2e4] {\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n    text-align: center;\n    border-radius: 50%;\n}\n\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/month.vue"],"names":[],"mappings":";AAwGA;IACA,gBAAA;IACA,kBAAA;IACA,WAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;AACA;AAEA;IACA,qBAAA;IACA,UAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,sBAAA;AACA;AAEA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;AACA;AAEA;IACA,eAAA;AACA;AAEA;IACA,mBAAA;IACA,WAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;;IAEA,eAAA;AACA;AAEA;IACA,qBAAA;IACA,UAAA;IACA,WAAA;IACA,gBAAA;IACA,sBAAA;IACA,kBAAA;IACA,kBAAA;AACA","file":"month.vue","sourcesContent":["<template>\n<div class=\"day-wrap\">\n    <!-- 日历头 -->\n    <div class=\"header\">\n      <div class=\"icon-btn\" title=\"上一年\" @click=\"updateDisplayDate('updateYear', -1)\">\n        <i class=\"double-left-btn\" />\n      </div>\n      <div :title=\"displayDate.getFullYear()\" class=\"center-btn\">\n        {{displayDate.getFullYear()}} 年\n      </div>\n      <div class=\"icon-btn\" title=\"下一年\" @click=\"updateDisplayDate('updateYear', 1)\">\n        <i class=\"double-right-btn\" />\n      </div>\n    </div>\n    <!-- 日期单元 -->\n    <div class=\"month-list\">\n      <div\n        v-for=\"monthData in monthList\"\n        :key=\"`${monthData.year}${monthData.month}`\"\n        :class=\"monthData.status\"\n        @click=\"clickDay(monthData, $event)\"\n      >\n        <span class=\"month-item-val\">{{monthData.month}}</span>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { monthConverters } from './lib/month-converters';\nimport updateTime from './lib/update-time';\n\nexport default {\n  name: 'Month',\n  props: {\n    // 选中的日期，范围模式下表示起始日期\n    value: {\n      type: Date,\n    },\n    startDate: {\n      type: Date,\n      default: null,\n    },\n    endDate: {\n      type: Date,\n      default: null,\n    },\n    // 选中时的回调\n    onSus: {\n      type: Function,\n      default() {},\n    },\n  },\n  data() {\n    return {\n      displayDate: new Date(this.value.getTime()),\n    };\n  },\n  watch: {\n    value(newValue) {\n      this.displayDate = new Date(newValue.getTime());\n    },\n  },\n  computed: {\n    monthList() {\n      const {\n        value, // 当前选择的时间对象\n        displayDate, // 显示年份\n        disabledDay, // 禁止选择判断逻辑\n      } = this;\n      const list = monthConverters(\n        value,\n        displayDate,\n        disabledDay,\n      );\n      return list\n    },\n  },\n  methods: {\n    // 可选时间判断\n    disabledDay(date) {\n      const { startDate, endDate } = this;\n      if ((startDate && date < startDate) || date > endDate) {\n        return true;\n      }\n      return false;\n    },\n    updateDisplayDate(type, num) {\n      this.displayDate = updateTime[type](this.displayDate, num);\n    },\n    // 选中某个日期\n    clickDay(dayInfo) {\n      const { year, month, date, disabled } = dayInfo;\n      const { onSus } = this;\n      if (!disabled) {\n        console.log('clickDay', `${year}/${month}`);\n        onSus(dayInfo);\n      }\n    },\n  },\n};\n</script>\n\n<style scoped>\n.month-list {\n    background: #fff;\n    position: relative;\n    z-index: 15;\n    font-size: 12px;\n    text-align: left;\n    padding-bottom: 5px;\n}\n\n.month-item, .month-disabled, .month-active {\n    display: inline-block;\n    width: 24%;\n    padding: 5%;\n    border-radius: 2px;\n    text-align: center;\n    box-sizing: border-box;\n}\n\n.month-active {\n    cursor: pointer;\n    background: #118bfb;\n    color: #fff;\n}\n\n.month-item {\n    cursor: pointer;\n}\n\n.month-disabled{\n    cursor: not-allowed;\n    color: #ccc;\n}\n\n.month-item:hover {\n    background-color: #f8f8f8;\n}\n\n.month-item:nth-child(4n+1), \n.month-disabled:nth-child(4n+1) {\n    margin-left: 2%;\n}\n\n.month-item-val {\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n    text-align: center;\n    border-radius: 50%;\n}\n\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-77fcc2e4";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Month = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true

function weekConverters$1(displayDate, disabledCheck, dateRegion, mouseStart, mouseEnd) {
  // 是否在日历尾部多加一行
  var enablefix = false;
  var dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  var displayMonth = displayDate.getMonth();
  var todayDate = getTodayDate(); // 显示日历所属的月份

  var endYearMonthNum = getYearMonthNum(displayDate);
  dayList.forEach(function (item) {
    if (!item.disabled) {
      // 当前时间对应的月
      var currentYearMonthNum = getYearMonthNum(item.date);

      if (item.date.getTime() === todayDate.getTime() && displayMonth === item.date.getMonth()) {
        item.status = DAY_STYLE.TODAY;
      } else if (currentYearMonthNum !== endYearMonthNum) {
        if (currentYearMonthNum > endYearMonthNum) {
          // 下个月
          item.status = DAY_STYLE.NEXT;
        } else {
          // 上个月
          item.status = DAY_STYLE.PREV;
        }
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });

  if (mouseStart) {
    if (mouseEnd) {
      var maxDate;
      var minDate;

      if (mouseStart >= mouseEnd) {
        maxDate = mouseStart;
        minDate = mouseEnd;
      } else {
        maxDate = mouseEnd;
        minDate = mouseStart;
      }

      dayList.forEach(function (item) {
        if (item.date >= minDate && item.date <= maxDate && displayMonth === item.date.getMonth()) {
          if (item.date.getTime() === minDate.getTime() || item.date.getTime() === maxDate.getTime()) {
            // 自然周第一天或最后一天
            item.status = DAY_STYLE.ACTIVE;
          } else {
            // 自然周第一天和最后一天之间的时间
            item.status = DAY_STYLE.REGION;
          }
        }
      });
    } else {
      var mouseStartTime = mouseStart.getTime();
      dayList.forEach(function (item) {
        if (mouseStartTime === item.date.getTime()) {
          item.status = DAY_STYLE.ACTIVE;
        }
      });
    }
  } else if (dateRegion) {
    var start = dateRegion.start,
        end = dateRegion.end;
    dayList.forEach(function (item) {
      if (item.date >= start && item.date <= end && displayMonth === item.date.getMonth()) {
        if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
          // 自然周第一天或最后一天
          item.status = DAY_STYLE.ACTIVE;
        } else {
          // 自然周第一天和最后一天之间的时间
          item.status = DAY_STYLE.REGION;
        }
      }
    });
  }

  return dayList;
}

//
var script$5 = {
  name: 'Custom',
  components: {
    Calendar: Calendar
  },
  props: {
    // 自定义日期区间选择 (customWeek)
    dateRegion: {
      type: Object,
      default: null
    },
    startDate: {
      type: [Date, Object],
      default: null
    },
    endDate: {
      type: [Date, Object],
      default: new Date()
    },
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      mouseStart: null,
      // 鼠标点击的第一个点
      mouseEnd: null,
      // 鼠标点击的第一个点
      displayStart: this.getDisplayStart(this.dateRegion),
      displayEnd: this.getDisplayEnd(this.dateRegion)
    };
  },
  watch: {
    dateRegion: function dateRegion(newDateRegion) {
      this.displayStart = this.getDisplayStart(newDateRegion);
      this.displayEnd = this.getDisplayEnd(newDateRegion);
    }
  },
  computed: {
    startDayList: function startDayList() {
      var mouseStart = this.mouseStart,
          mouseEnd = this.mouseEnd,
          dateRegion = this.dateRegion,
          displayStart = this.displayStart,
          disabledDay = this.disabledDay;
      var dayList = weekConverters$1(displayStart, disabledDay, dateRegion, mouseStart, mouseEnd);
      return dayList;
    },
    endDayList: function endDayList() {
      var mouseStart = this.mouseStart,
          mouseEnd = this.mouseEnd,
          dateRegion = this.dateRegion,
          displayEnd = this.displayEnd,
          disabledDay = this.disabledDay;
      var dayList = weekConverters$1(displayEnd, disabledDay, dateRegion, mouseStart, mouseEnd);
      return dayList;
    }
  },
  methods: {
    // 可选时间判断
    disabledDay: function disabledDay(date) {
      var startDate = this.startDate,
          endDate = this.endDate;

      if (startDate && date < startDate || date > endDate) {
        return true;
      }

      return false;
    },
    getDisplayStart: function getDisplayStart(dateRegion) {
      var startDate = getLastMonthDay();

      if (dateRegion) {
        var start = dateRegion.start,
            end = dateRegion.end;
        var startMonth = start.getMonth();
        var endMonth = end.getMonth();

        if (startMonth === endMonth) {
          var todayMonth = getTodayDate().getMonth();

          if (todayMonth === startMonth) {
            //
            startDate = updateTime.updateMonth(start, -1);
          } else {
            startDate = updateTime.updateMonth(start, 0);
          }
        } else {
          startDate = start;
        }
      }

      return startDate;
    },
    getDisplayEnd: function getDisplayEnd(dateRegion) {
      var endDate = getYesterday();

      if (dateRegion) {
        var start = dateRegion.start,
            end = dateRegion.end;
        var startMonth = start.getMonth();
        var endMonth = end.getMonth();

        if (startMonth === endMonth) {
          var todayMonth = getTodayDate().getMonth();

          if (todayMonth === endMonth) {
            endDate = updateTime.updateMonth(end, 0);
          } else {
            endDate = updateTime.updateMonth(end, 1);
          }
        } else {
          endDate = end;
        }
      }

      return endDate;
    },
    updateDisplayDate: function updateDisplayDate(type, num) {
      this.displayStart = updateTime[type](this.displayStart, num);
      this.displayEnd = updateTime[type](this.displayEnd, num);
    },
    // 选中某个日期
    clickDay: function clickDay(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date,
          disabled = dayInfo.disabled;

      if (!disabled) {
        if (this.mouseStart) {
          if (this.mouseStart >= date) {
            this.onSus({
              start: date,
              end: this.mouseStart
            });
          } else {
            this.onSus({
              start: this.mouseStart,
              end: date
            });
          }

          this.mouseStart = null;
        } else {
          this.mouseStart = date;
        }

        console.log('clickDay', "".concat(year, "/").concat(month, "/").concat(day));
      }
    },
    enter: function enter(dayInfo) {
      var year = dayInfo.year,
          month = dayInfo.month,
          day = dayInfo.day,
          date = dayInfo.date,
          disabled = dayInfo.disabled;

      if (!disabled) {
        if (this.mouseStart) {
          this.mouseEnd = date;
        } // this.mouseHitDate = new Date(`${year}/${month}/${day}/`);


        console.log('enter', "".concat(year, "/").concat(month, "/").concat(day));
      }
    },
    leave: function leave() {}
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "custom-week-wrap" },
    [
      _c("Calendar", {
        attrs: {
          "next-year": false,
          "next-month": false,
          "click-day": _vm.clickDay,
          "mouse-enter": _vm.enter,
          "mouse-leave": _vm.leave,
          "day-list": _vm.startDayList,
          "display-date": _vm.displayStart
        }
      }),
      _vm._v(" "),
      _c("Calendar", {
        attrs: {
          "last-year": false,
          "last-month": false,
          "click-day": _vm.clickDay,
          "mouse-enter": _vm.enter,
          "mouse-leave": _vm.leave,
          "day-list": _vm.endDayList,
          "display-date": _vm.displayEnd
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-b26ade5e_0", { source: "\n.custom-week-wrap[data-v-b26ade5e] {\n  display: flex;\n  justify-content: space-between;\n}\n.day-wrap[data-v-b26ade5e] {\n  flex: 1;\n  position: relative;\n}\n.day-wrap[data-v-b26ade5e]:nth-child(2n)::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: #e4e7ed;\n  z-index: 1000;\n}\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/custom.vue"],"names":[],"mappings":";AA+LA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,OAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,mBAAA;EACA,aAAA;AACA","file":"custom.vue","sourcesContent":["<template>\n  <div class=\"custom-week-wrap\">\n     <Calendar\n      :next-year = \"false\"\n      :next-month = \"false\"\n      :click-day = \"clickDay\"\n      :mouse-enter = \"enter\"\n      :mouse-leave = \"leave\"\n      :day-list = \"startDayList\"\n      :display-date = \"displayStart\"\n    />\n\n    <Calendar\n      :last-year = \"false\"\n      :last-month = \"false\"\n      :click-day = \"clickDay\"\n      :mouse-enter = \"enter\"\n      :mouse-leave = \"leave\"\n      :day-list = \"endDayList\"\n      :display-date = \"displayEnd\"\n    />\n  </div>\n</template>\n\n<script>\nimport { weekConverters } from './lib/custom-converters';\nimport { getLastMonthDay, getYesterday, getTodayDate } from './lib/tools-date';\nimport updateTime from './lib/update-time';\nimport Calendar from './calendar.vue';\n\nexport default {\n  name: 'Custom',\n  components: {\n    Calendar,\n  },\n  props: {\n    // 自定义日期区间选择 (customWeek)\n    dateRegion: {\n      type: Object,\n      default: null,\n    },\n    startDate: {\n      type: [Date, Object],\n      default: null,\n    },\n    endDate: {\n      type: [Date, Object],\n      default: new Date(),\n    },\n    onSus: {\n      type: Function,\n      default() {},\n    },\n  },\n  data() {\n    return {\n      mouseStart: null, // 鼠标点击的第一个点\n      mouseEnd: null, // 鼠标点击的第一个点\n      displayStart: this.getDisplayStart(this.dateRegion),\n      displayEnd: this.getDisplayEnd(this.dateRegion),\n    };\n  },\n  watch: {\n    dateRegion(newDateRegion) {\n      this.displayStart = this.getDisplayStart(newDateRegion);\n      this.displayEnd = this.getDisplayEnd(newDateRegion);\n    },\n  },\n  computed: {\n    startDayList() {\n      const {\n        mouseStart,\n        mouseEnd,\n        dateRegion,\n        displayStart, // 显示时间\n        disabledDay, // 禁止选择判断逻辑\n      } = this;\n      const dayList = weekConverters(\n        displayStart,\n        disabledDay,\n        dateRegion,\n        mouseStart,\n        mouseEnd,\n      );\n      return dayList;\n    },\n    endDayList() {\n      const {\n        mouseStart,\n        mouseEnd,\n        dateRegion,\n        displayEnd, // 显示时间\n        disabledDay, // 禁止选择判断逻辑\n      } = this;\n      const dayList = weekConverters(\n        displayEnd,\n        disabledDay,\n        dateRegion,\n        mouseStart,\n        mouseEnd,\n      );\n      return dayList;\n    },\n  },\n  methods: {\n    // 可选时间判断\n    disabledDay(date) {\n      const { startDate, endDate } = this;\n      if ((startDate && date < startDate) || date > endDate) {\n        return true;\n      }\n      return false;\n    },\n    getDisplayStart(dateRegion) {\n      let startDate = getLastMonthDay();\n      if (dateRegion) {\n        const { start, end } = dateRegion;\n        const startMonth = start.getMonth();\n        const endMonth = end.getMonth();\n        if (startMonth === endMonth) {\n          const todayMonth = getTodayDate().getMonth();\n          if (todayMonth === startMonth) {\n            //\n            startDate = updateTime.updateMonth(start, -1);\n          } else {\n            startDate = updateTime.updateMonth(start, 0);\n          }\n        } else {\n          startDate = start;\n        }\n      }\n      return startDate;\n    },\n    getDisplayEnd(dateRegion) {\n      let endDate = getYesterday();\n      if (dateRegion) {\n        const { start, end } = dateRegion;\n        const startMonth = start.getMonth();\n        const endMonth = end.getMonth();\n        if (startMonth === endMonth) {\n          const todayMonth = getTodayDate().getMonth();\n          if (todayMonth === endMonth) {\n            endDate = updateTime.updateMonth(end, 0);\n          } else {\n            endDate = updateTime.updateMonth(end, 1);\n          }\n        } else {\n          endDate = end;\n        }\n      }\n      return endDate;\n    },\n    updateDisplayDate(type, num) {\n      this.displayStart = updateTime[type](this.displayStart, num);\n      this.displayEnd = updateTime[type](this.displayEnd, num);\n    },\n    // 选中某个日期\n    clickDay(dayInfo) {\n      const { year, month, day, date, disabled } = dayInfo;\n      if (!disabled) {\n        if (this.mouseStart) {\n          if (this.mouseStart >= date) {\n            this.onSus({ start: date, end: this.mouseStart });\n          } else {\n            this.onSus({ start: this.mouseStart, end: date });\n          }\n          this.mouseStart = null;\n        } else {\n          this.mouseStart = date;\n        }\n        console.log('clickDay', `${year}/${month}/${day}`);\n      }\n    },\n    enter(dayInfo) {\n      const { year, month, day, date, disabled } = dayInfo;\n      if (!disabled) {\n        if (this.mouseStart) {\n          this.mouseEnd = date;\n        }\n        // this.mouseHitDate = new Date(`${year}/${month}/${day}/`);\n        console.log('enter', `${year}/${month}/${day}`);\n      }\n    },\n    leave() {\n\n    },\n  },\n};\n</script>\n\n<style scoped>\n.custom-week-wrap {\n  display: flex;\n  justify-content: space-between;\n}\n\n.day-wrap {\n  flex: 1;\n  position: relative;\n}\n\n.day-wrap:nth-child(2n)::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: #e4e7ed;\n  z-index: 1000;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-b26ade5e";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var Custom = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: 'CMask',
  props: {
    // 展示的日历组件类型
    type: {
      type: String,
      default: 'day'
    }
  },
  mounted: function mounted() {
    var maskEle = this.$refs.mask;
    var parentPosition = maskEle.parentElement.getBoundingClientRect();
    var maskPosition = maskEle.getBoundingClientRect();
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    maskEle.className = this.getClass();
    var classText = 'bottom';

    if (winHeight - parentPosition.height - parentPosition.top >= maskPosition.height || parentPosition.top < maskPosition.height) {
      classText = 'top';
      maskEle.style.top = "".concat(parentPosition.height + 5, "px");
    } else {
      maskEle.style.bottom = "".concat(parentPosition.height + 5, "px");
    }

    if (winWidth - parentPosition.left >= maskPosition.width) {
      maskEle.className += " mask-".concat(classText, "-left");
    } else if (parentPosition.left + parentPosition.width >= maskPosition.width) {
      maskEle.className += " mask-".concat(classText, "-right");
    } else {
      maskEle.className += " mask-".concat(classText, "-center");
    }
  },
  methods: {
    eventStop: function eventStop(event) {
      event.stopPropagation();
    },
    getClass: function getClass() {
      return ['custom', 'cycle'].indexOf(this.type) > -1 ? 'date-double-picker-mask' : 'date-picker-mask';
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "mask",
      class: _vm.getClass(),
      on: {
        click: function($event) {
          return _vm.eventStop($event)
        }
      }
    },
    [_c("div", { staticClass: "mask-inner" }, [_vm._t("default")], 2)]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-1138c6f8_0", { source: "\n.date-picker-mask[data-v-1138c6f8],\n.date-double-picker-mask[data-v-1138c6f8] {\n    position: absolute;\n    max-height: 350px;\n    z-index: 10;\n    border: 1px solid #e4e7ed;\n    border-radius: 4px;\n    line-height: 20px;\n    user-select: none;\n}\n.date-picker-mask[data-v-1138c6f8] {\n  width: 250px;\n}\n.date-double-picker-mask[data-v-1138c6f8] {\n  width: 500px;\n}\n.mask-top-left[data-v-1138c6f8]::before,\n.mask-top-center[data-v-1138c6f8]::before,\n.mask-top-right[data-v-1138c6f8]::before {\n  content: \"\";\n  position: absolute;\n  border-bottom: 4px solid #fff;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid transparent;\n  z-index: 1000;\n}\n.mask-top-left[data-v-1138c6f8]::after,\n.mask-top-center[data-v-1138c6f8]::after,\n.mask-top-right[data-v-1138c6f8]::after {\n  content: \"\";\n  position: absolute;\n  border-bottom: 5px solid #e4e7ed;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 5px solid transparent;\n  z-index: 99;\n}\n.mask-top-left[data-v-1138c6f8],\n.mask-bottom-left[data-v-1138c6f8] {\n  left: 0;\n}\n.mask-top-center[data-v-1138c6f8],\n.mask-bottom-center[data-v-1138c6f8] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.mask-top-right[data-v-1138c6f8],\n.mask-bottom-right[data-v-1138c6f8] {\n  right: 0;\n}\n.mask-top-left[data-v-1138c6f8]::before,\n.mask-top-center[data-v-1138c6f8]::before,\n.mask-top-right[data-v-1138c6f8]::before{\n  top: -8px;\n}\n.mask-top-left[data-v-1138c6f8]::after,\n.mask-top-center[data-v-1138c6f8]::after,\n.mask-top-right[data-v-1138c6f8]::after {\n  top: -10px;\n}\n.mask-bottom-left[data-v-1138c6f8]::before,\n.mask-bottom-center[data-v-1138c6f8]::before,\n.mask-bottom-right[data-v-1138c6f8]::before{\n  bottom: -8px;\n}\n.mask-bottom-left[data-v-1138c6f8]::after,\n.mask-bottom-center[data-v-1138c6f8]::after,\n.mask-bottom-right[data-v-1138c6f8]::after{\n  bottom: -10px;\n}\n.mask-top-center[data-v-1138c6f8]::before,\n.mask-top-center[data-v-1138c6f8]::after,\n.mask-bottom-center[data-v-1138c6f8]::before,\n.mask-bottom-center[data-v-1138c6f8]::after {\n  transform: translateX(-50%);\n}\n.mask-top-left[data-v-1138c6f8]::before,\n.mask-bottom-left[data-v-1138c6f8]::before {\n  left: 40px;\n}\n.mask-top-left[data-v-1138c6f8]::after,\n.mask-bottom-left[data-v-1138c6f8]::after {\n  left: 38px;\n}\n.mask-top-right[data-v-1138c6f8]::before,\n.mask-bottom-right[data-v-1138c6f8]::before {\n  right: 40px;\n}\n.mask-top-right[data-v-1138c6f8]::after,\n.mask-bottom-right[data-v-1138c6f8]::after {\n  right: 38px;\n}\n.mask-bottom-left[data-v-1138c6f8]::before,\n.mask-bottom-center[data-v-1138c6f8]::before,\n.mask-bottom-right[data-v-1138c6f8]::before {\n  content: \"\";\n  position: absolute;\n  border-bottom: 4px solid transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #fff;\n  z-index: 1000;\n}\n.mask-bottom-left[data-v-1138c6f8]::after,\n.mask-bottom-center[data-v-1138c6f8]::after,\n.mask-bottom-right[data-v-1138c6f8]::after {\n  content: \"\";\n  position: absolute;\n  border-bottom: 5px solid transparent;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 5px solid #e4e7ed;;\n  z-index: 99;\n}\n.mask-inner[data-v-1138c6f8] {\n    position: relative;\n    background: #fff;\n    height: 100%;\n}\n\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/mask.vue"],"names":[],"mappings":";AAwDA;;IAEA,kBAAA;IACA,iBAAA;IACA,WAAA;IACA,yBAAA;IACA,kBAAA;IACA,iBAAA;IACA,iBAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;;;EAGA,WAAA;EACA,kBAAA;EACA,6BAAA;EACA,kCAAA;EACA,mCAAA;EACA,iCAAA;EACA,aAAA;AACA;AAEA;;;EAGA,WAAA;EACA,kBAAA;EACA,gCAAA;EACA,kCAAA;EACA,mCAAA;EACA,iCAAA;EACA,WAAA;AACA;AAEA;;EAEA,OAAA;AACA;AAEA;;EAEA,SAAA;EACA,2BAAA;AACA;AAEA;;EAEA,QAAA;AACA;AAEA;;;EAGA,SAAA;AACA;AAEA;;;EAGA,UAAA;AACA;AAEA;;;EAGA,YAAA;AACA;AAEA;;;EAGA,aAAA;AACA;AAEA;;;;EAIA,2BAAA;AACA;AAGA;;EAEA,UAAA;AACA;AAEA;;EAEA,UAAA;AACA;AAEA;;EAEA,WAAA;AACA;AAEA;;EAEA,WAAA;AACA;AAEA;;;EAGA,WAAA;EACA,kBAAA;EACA,oCAAA;EACA,kCAAA;EACA,mCAAA;EACA,0BAAA;EACA,aAAA;AACA;AAEA;;;EAGA,WAAA;EACA,kBAAA;EACA,oCAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,WAAA;AACA;AAEA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;AACA","file":"mask.vue","sourcesContent":["<template>\n  <div\n    ref=\"mask\"\n    :class=\"getClass()\"\n    @click=\"eventStop($event)\"\n  >\n    <div class=\"mask-inner\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n<script>\n\nexport default {\n  name: 'CMask',\n  props: {\n    // 展示的日历组件类型\n    type: {\n      type: String,\n      default: 'day',\n    },\n  },\n  mounted() {\n    const maskEle = this.$refs.mask;\n    const parentPosition = maskEle.parentElement.getBoundingClientRect();\n    const maskPosition = maskEle.getBoundingClientRect();\n    const winWidth = window.innerWidth;\n    const winHeight = window.innerHeight;\n    maskEle.className = this.getClass();\n    let classText = 'bottom';\n    if (winHeight - parentPosition.height - parentPosition.top >= maskPosition.height || parentPosition.top < maskPosition.height) {\n      classText = 'top';\n      maskEle.style.top = `${parentPosition.height + 5}px`;\n    } else {\n      maskEle.style.bottom = `${parentPosition.height + 5}px`;\n    }\n    if (winWidth - parentPosition.left >= maskPosition.width) {\n      maskEle.className += ` mask-${classText}-left`;\n    } else if (parentPosition.left + parentPosition.width >= maskPosition.width) {\n      maskEle.className += ` mask-${classText}-right`;\n    } else {\n      maskEle.className += ` mask-${classText}-center`;\n    }\n  },\n  methods: {\n    eventStop(event) {\n      event.stopPropagation();\n    },\n    getClass() {\n      return ['custom', 'cycle'].indexOf(this.type) > -1  ? 'date-double-picker-mask' : 'date-picker-mask';\n    },\n  },\n};\n</script>\n\n<style scoped>\n.date-picker-mask,\n.date-double-picker-mask {\n    position: absolute;\n    max-height: 350px;\n    z-index: 10;\n    border: 1px solid #e4e7ed;\n    border-radius: 4px;\n    line-height: 20px;\n    user-select: none;\n}\n\n.date-picker-mask {\n  width: 250px;\n}\n\n.date-double-picker-mask {\n  width: 500px;\n}\n\n.mask-top-left::before,\n.mask-top-center::before,\n.mask-top-right::before {\n  content: \"\";\n  position: absolute;\n  border-bottom: 4px solid #fff;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid transparent;\n  z-index: 1000;\n}\n\n.mask-top-left::after,\n.mask-top-center::after,\n.mask-top-right::after {\n  content: \"\";\n  position: absolute;\n  border-bottom: 5px solid #e4e7ed;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 5px solid transparent;\n  z-index: 99;\n}\n\n.mask-top-left,\n.mask-bottom-left {\n  left: 0;\n}\n\n.mask-top-center,\n.mask-bottom-center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.mask-top-right,\n.mask-bottom-right {\n  right: 0;\n}\n\n.mask-top-left::before,\n.mask-top-center::before,\n.mask-top-right::before{\n  top: -8px;\n}\n\n.mask-top-left::after,\n.mask-top-center::after,\n.mask-top-right::after {\n  top: -10px;\n}\n\n.mask-bottom-left::before,\n.mask-bottom-center::before,\n.mask-bottom-right::before{\n  bottom: -8px;\n}\n\n.mask-bottom-left::after,\n.mask-bottom-center::after,\n.mask-bottom-right::after{\n  bottom: -10px;\n}\n\n.mask-top-center::before,\n.mask-top-center::after,\n.mask-bottom-center::before,\n.mask-bottom-center::after {\n  transform: translateX(-50%);\n}\n\n\n.mask-top-left::before,\n.mask-bottom-left::before {\n  left: 40px;\n}\n\n.mask-top-left::after,\n.mask-bottom-left::after {\n  left: 38px;\n}\n\n.mask-top-right::before,\n.mask-bottom-right::before {\n  right: 40px;\n}\n\n.mask-top-right::after,\n.mask-bottom-right::after {\n  right: 38px;\n}\n\n.mask-bottom-left::before,\n.mask-bottom-center::before,\n.mask-bottom-right::before {\n  content: \"\";\n  position: absolute;\n  border-bottom: 4px solid transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #fff;\n  z-index: 1000;\n}\n\n.mask-bottom-left::after,\n.mask-bottom-center::after,\n.mask-bottom-right::after {\n  content: \"\";\n  position: absolute;\n  border-bottom: 5px solid transparent;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 5px solid #e4e7ed;;\n  z-index: 99;\n}\n\n.mask-inner {\n    position: relative;\n    background: #fff;\n    height: 100%;\n}\n\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-1138c6f8";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var CMask = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    browser,
    undefined
  );

//
var script$7 = {
  name: 'PCDatePicker',
  components: {
    Day: Day,
    Week: Week,
    Month: Month,
    Cycle: Cycle,
    Custom: Custom,
    CMask: CMask
  },
  props: {
    // 是否展示日历组件
    open: {
      type: Boolean,
      default: false
    },
    // 展示的日历组件类型
    type: {
      type: String,
      default: 'day'
    },
    // 选择日期（day or week）
    value: {
      type: Date,
      default: getYesterday
    },
    // 自定义时间区间
    limit: {
      type: Number,
      default: 7
    },
    // 自定义日期区间选择 (customWeek)
    dateRegion: {
      type: Object,
      default: null
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    onSus: {
      type: Function,
      default: function _default() {}
    }
  },
  computed: {
    bindData: function bindData() {
      return {
        value: dateByDate(this.value),
        // 格式化数据，去掉时分秒
        limit: this.limit,
        dateRegion: getRegionDay(this.dateRegion),
        startDate: this.startDate,
        endDate: this.endDate,
        onSus: this.onSus
      };
    }
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.open
    ? _c(
        "CMask",
        { attrs: { type: _vm.type } },
        [
          _vm.type == "day"
            ? _c("Day", _vm._b({}, "Day", _vm.bindData, false))
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "week"
            ? _c("Week", _vm._b({}, "Week", _vm.bindData, false))
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "month"
            ? _c("Month", _vm._b({}, "Month", _vm.bindData, false))
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "cycle"
            ? _c("Cycle", _vm._b({}, "Cycle", _vm.bindData, false))
            : _vm._e(),
          _vm._v(" "),
          _vm.type == "custom"
            ? _c("Custom", _vm._b({}, "Custom", _vm.bindData, false))
            : _vm._e()
        ],
        1
      )
    : _vm._e()
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-ddeed2d6_0", { source: "\n@import \"./style/base.css\";\n", map: {"version":3,"sources":["/Users/chenxuanfeng/mydata/vue-date-picker-pc/src/datepicker/index.vue"],"names":[],"mappings":";AAoFA,0BAAA","file":"index.vue","sourcesContent":["<template>\n  <CMask v-if=\"open\" :type=\"type\" >\n    <Day v-if=\"type == 'day'\" v-bind=\"bindData\"></Day>\n    <Week v-if=\"type == 'week'\" v-bind=\"bindData\"></Week>\n    <Month v-if=\"type == 'month'\" v-bind=\"bindData\"></Month>\n    <Cycle v-if=\"type == 'cycle'\" v-bind=\"bindData\"></Cycle>\n    <Custom v-if=\"type == 'custom'\" v-bind=\"bindData\"></Custom>\n  </CMask>\n</template>\n\n<script>\nimport Day from './day.vue';\nimport Cycle from './cycle.vue';\nimport Week from './week.vue';\nimport Month from \"./month.vue\";\nimport Custom from './custom.vue';\nimport CMask from './mask.vue';\nimport { dateByDate, getYesterday, getRegionDay } from './lib/tools-date';\n\nexport default {\n  name: 'PCDatePicker',\n  components: {\n    Day,\n    Week,\n    Month,\n    Cycle,\n    Custom,\n    CMask,\n  },\n  props: {\n    // 是否展示日历组件\n    open: {\n      type: Boolean,\n      default: false,\n    },\n    // 展示的日历组件类型\n    type: {\n      type: String,\n      default: 'day',\n    },\n    // 选择日期（day or week）\n    value: {\n      type: Date,\n      default: getYesterday,\n    },\n    // 自定义时间区间\n    limit: {\n      type: Number,\n      default: 7,\n    },\n    // 自定义日期区间选择 (customWeek)\n    dateRegion: {\n      type: Object,\n      default: null,\n    },\n    startDate: {\n      type: Date,\n      default: null,\n    },\n    endDate: {\n      type: Date,\n      default: null,\n    },\n    onSus: {\n      type: Function,\n      default() {},\n    },\n  },\n  computed: {\n    bindData() {\n      return {\n        value: dateByDate(this.value), // 格式化数据，去掉时分秒\n        limit: this.limit,\n        dateRegion: getRegionDay(this.dateRegion),\n        startDate: this.startDate,\n        endDate: this.endDate,\n        onSus: this.onSus,\n      };\n    },\n  },\n};\n</script>\n\n<style>\n  @import \"./style/base.css\";\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var PCDatePicker = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    browser,
    undefined
  );

// 打 npm 包入口文件 

PCDatePicker.install = function (Vue) {
  return Vue.component(PCDatePicker.name, PCDatePicker);
}; // To auto-install when vue is found


var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(PCDatePicker);
}

export default PCDatePicker;
