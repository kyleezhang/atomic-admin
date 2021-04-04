/**
 * 业务状态码
 * 除成功外，其他都是5位数字，按模块分类
 * 根据不同模块，起始数字不同，具体业务依次递增
 * ------------------------------------
 * 模块              | Code
 * ------------------------------------
 * 通用              | 1XXXX
 * ------------------------------------
 * 用户              | 2XXXX
 * ------------------------------------
 * 业务1             | 3XXXX
 * ------------------------------------
 * 业务10            | 11XXX
 * ------------------------------------
 */

// 通用模块
export enum CommonCodes {
  // 成功的
  SUCCESSFUL = 0,
  // 未登录
  TOKEN_EMPTY = 10001,
  // token过期
  TOKEN_EXPIRED = 10002,
  // token无效
  TOKEN_INVALID = 10003,
  // 未找到
  NOT_FOUND = 10004,
  // 创建失败
  CREATED_FAIL = 10005,
  // 更新失败
  UPDATED_FAIL = 10006,
  // 删除失败
  DELETED_FAIL = 10007,
  // 参数错误
  PARAMETER_INVALID = 10008,
  // 数据已存在
  DATA_EXISTED = 10009,
  // 初始化失败
  INITIALIZE_FAIL = 100010,
  // 初始化失败
  BUILD_FAIL = 100011,
  // 获取失败
  FETCH_FAIL = 100012,
}
