import { relativeDays } from '../index';

describe('测试relativeDays', () => {
  it('负天', () => {
    expect(relativeDays('2019-01-09', '2019-01-8')).toBe(-1);
  });
  it('1', () => {
    expect(relativeDays('2019-01-08', '2019-01-9')).toBe(1);
  });
  it('超过一年', () => {
    expect(relativeDays('2018-01-09', '2019-01-10')).toBeGreaterThan(360);
  });
});
