// 除内置错误类型外提供一些其他错误类型
export enum ErrorTypes {
  // 未授权
  UNAUTHORIZED = 'Unauthorized',
  // 被禁用
  FORBIDDEN = 'Forbidden',
  // 无效的参数
  INVALID_PARAMETER = 'Invalid Parameter',
  // 已过期的
  EXPIRED = 'Expired',
  // 服务错误
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  // 不存在
  NOT_FOUND = 'Not Found',
}
