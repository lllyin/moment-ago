import momentAgo from '../index';

describe('测试MomentAgo', () => {
  it('刚刚', () => {
    expect(momentAgo(new Date()).ago()).toBe('刚刚');
  });
  it('刚刚', () => {
    expect(momentAgo(momentAgo(new Date())).ago()).toBe('刚刚');
  });
  it('1秒前', () => {
    expect(momentAgo(new Date().valueOf() - 1000).ago({ adjustVal: 0 })).toBe('1秒前');
  });
  it('1分前', () => {
    expect(momentAgo(new Date().valueOf() - 60 * 1000).ago({ adjustVal: 0 })).toBe('1分钟前');
  });
  it('返包含小时前', () => {
    expect(momentAgo(new Date().valueOf() - 2 * 60 * 60 * 1000).ago({ adjustVal: 0 })).toEqual(expect.stringMatching('2小时前'));
  });
  it('昨天', () => {
    const date = new Date();
    const yestoday = new Date().setDate(date.getDate() - 1);
    expect(momentAgo(yestoday).ago({ adjustVal: 0 })).toEqual(expect.stringMatching('昨天'));
  });
  it('前天', () => {
    const date = new Date();
    const yestoday = new Date().setDate(date.getDate() - 2);
    expect(momentAgo(yestoday).ago({ adjustVal: 0 })).toEqual(expect.stringMatching('前天'));
  });
  it('今年以内应返回月-日 时:分:秒 ', () => {
    const date = new Date();
    const yestoday = new Date().setDate(date.getDate() - 3);
    expect(momentAgo(yestoday).ago({ adjustVal: 0 })).toEqual(expect.stringMatching(/\d+-\d+ \d+:\d+/));
  });
  it('一年以前应返回一个标准的ISO 8601时间字符串 ', () => {
    const date = new Date();
    const yestoday = new Date().setFullYear(date.getFullYear() - 1);
    expect(momentAgo(yestoday).ago({ adjustVal: 0 })).toEqual(expect.stringMatching(/\d+-\d+-\d+ \d+:\d+/));
  });
  it('未来', () => {
    const date = new Date();
    const yestoday = new Date().setFullYear(date.getFullYear() + 1);
    expect(momentAgo(yestoday).ago({ adjustVal: 0 })).toEqual(expect.stringMatching('未来'));
  });

  it('未来', () => {
    expect(momentAgo(new Date().setMonth(new Date().getMonth() + 2)).ago({ adjustVal: 0 })).toEqual(expect.stringMatching('未来'));
  });
});
