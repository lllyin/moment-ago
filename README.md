## momentAgo

人性化显示已过去时间

## 规则

```
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
// --------------------------------------
```

## 用法

1. `yarn add moment-ago` 或者 `npm install moment-ago`

2. 使用

nodejs

```
const momentAgo = require("moment-ago");
```

ES6

```
import momentAgo from("moment-ago");
```

## API

```
momentAgo('2018-08-08') // 解析

momentAgo(new Date()).ago() //刚刚


// ----- 传入时间戳 ---------
momentAgo(new Date().valueOf() - 1000).ago({ adjustVal: 0 }) // 1秒前

momentAgo(new Date().valueOf() - 5000).ago({ adjustVal: 0 }) // 5秒前

momentAgo(new Date().valueOf() - 5000).ago({ adjustVal: 5 }) // 刚刚

// ------ 传入一个标准的ISO 8601时间字符串-----
momentAgo("2018-09-30 10:35:23").ago() // 17秒前

momentAgo("2018-09-30 10:30:23").ago() // 6分钟前

momentAgo("2018-09-30 09:30:23").ago() // 1小时前
```
