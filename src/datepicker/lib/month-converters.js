import { getYearMonthNum } from './tools-date';
import { MONTH_STYLE } from './config';

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function monthConverters(selectDate, displayDate, disabledCheck) {
    const monthList = [];
    const year = displayDate.getFullYear();
    const selectYearMonth = getYearMonthNum(selectDate);
    // (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
    let _data;
    let _date;
    let _disabled;
    let _status;
    let _dateNum;
    for (let m = 1; m <= 12; m++) {
        _date = new Date(year, m - 1, 1);
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
            year,
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

export default {
    monthConverters,
};

