import dayjs from 'dayjs';
import { getHumanDate } from './utils';
// -------------规则描述------------------
/**
 * 1.时间的转义：
 *
 * 60秒以内： “多少秒前”
 *
 * 1小时内:“xx分钟前”
 *
 * 1小时后，24小时前：“xx小时前”
 *
 * 24小时后，48小时前：“昨天  xx：xx”
 *
 * 48小时后，72小时前：“前天  xx：xx”
 *
 * 72小时后，一年内：“xx-xx xx：xx”
 *
 * 一年前："xxxx-xx-xx  xx：xx"
 */

const isMomentAgo = date => date instanceof MomentAgo;

const momentAgo = (date, cfg) => {
  if (isMomentAgo(date)) {
    return date;
  }
  return new MomentAgo(date);
};

class MomentAgo {
  constructor(date) {
    this.$d = dayjs(date);
  }

  ago(options = {}) {
    const date = this.$d.valueOf();
    return getHumanDate(date, options);
  }
}

export default momentAgo;
