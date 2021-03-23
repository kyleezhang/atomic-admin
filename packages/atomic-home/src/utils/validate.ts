// 判断传入路径是否为外部链接
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
