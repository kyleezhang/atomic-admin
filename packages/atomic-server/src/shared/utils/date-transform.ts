// 支持的日期处理格式，后续可扩展
type FormatType =
  | 'yyyyMMdd HH:mm:ss'
  | 'yyyyMMdd hh:mm:ss'
  | 'yyyy-MM-dd HH:mm:ss'
  | 'yyyy-MM-dd hh:mm:ss';

/**
 * 补零处理
 * @param num 处理数
 */
function handler(num: number): string {
  if (num > 9) {
    return String(num);
  }
  return `0${num}`;
}

function dateTransform(value: Date | string, format: FormatType): string {
  const target = new Date(value);
  const year = target.getFullYear();
  const mouth = handler(target.getMonth() + 1);
  const date = handler(target.getDate());
  const hour = target.getHours();
  const minute = handler(target.getMinutes());
  const second = handler(target.getSeconds());

  const result = format
    .replace('yyyy', String(year))
    .replace('MM', mouth)
    .replace('dd', date)
    .replace('HH', handler(hour))
    .replace('hh', handler(hour > 12 ? hour - 12 : hour))
    .replace('mm', minute)
    .replace('ss', second);

  return result;
}

export { dateTransform };
