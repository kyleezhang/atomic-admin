// 日志打印中间件
import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../utils/log4js';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const code = res.statusCode;
    console.log('hhhhhhhhh');
    next();
    // 组装日志信息
    const logFormat = `
      Method: ${req.method}
      Request original url: ${req.originalUrl}
      IP: ${req.ip}
      Status Code: ${code}
      Params: ${JSON.stringify(req.params)}
      Query: ${JSON.stringify(req.query)}
      Body: ${JSON.stringify(req.body)}
    `;
    console.log(logFormat, 'hello');
    // 根据状态码进行日志类型的区分
    if (code >= 500) {
      Logger.error(logFormat);
    } else if (code >= 400) {
      Logger.warn(logFormat);
    } else {
      Logger.access(logFormat);
      Logger.info(logFormat);
    }
  }
}
